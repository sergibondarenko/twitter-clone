import { db } from '../storage/firebase';
import { collection, query, onSnapshot, getDocs, addDoc } from "firebase/firestore";

export class FirebaseService {
  fetchAllFromCollection(collectionName) {
    const coll = collection(db, collectionName);
    return getDocs(coll).then((snapshot) => {
      return snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    });
  }

  subscribeToCollection(collectionName, callbackFN, queryFilterFN) {
    const coll = collection(db, collectionName);
    const q = queryFilterFN ? query(coll, queryFilterFN) : query(coll);
    return onSnapshot(q, (snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      callbackFN(docs);
    });
  }

  addToCollection(collectionName, doc) {
    return addDoc(collection(db, collectionName), doc);
  }
}