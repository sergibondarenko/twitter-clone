import { db } from '../storage/firebase';
import {
  collection,
  query,
  onSnapshot,
  getDocs,
  addDoc,
  QuerySnapshot,
  DocumentData,
  QueryDocumentSnapshot,
  QueryConstraint,
  Unsubscribe,
  DocumentReference
} from 'firebase/firestore';

export interface IFirebaseService {
  fetchAllFromCollection: (collectionName: string) => Promise<Object[]>;
  subscribeToCollection: (collectionName: string, callbackFN: Function, queryFilterFN?: QueryConstraint) => Unsubscribe;
  addToCollection: (collectionName: string, doc: Object) => Promise<DocumentReference>
}

export class FirebaseService implements IFirebaseService {
  fetchAllFromCollection(collectionName: string): Promise<Object[]> {
    const coll = collection(db, collectionName);
    return getDocs(coll).then((snapshot: QuerySnapshot<DocumentData>) => {
      return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
        return { ...doc.data(), id: doc.id };
      });
    });
  }

  subscribeToCollection(collectionName: string, callbackFN: Function, queryFilterFN?: QueryConstraint): Unsubscribe {
    const coll = collection(db, collectionName);
    const q = queryFilterFN ? query(coll, queryFilterFN) : query(coll);

    return onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const docs: Object[] = [];
      snapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      callbackFN(docs);
    });
  }

  addToCollection(collectionName: string, doc: Object): Promise<DocumentReference> {
    return addDoc(collection(db, collectionName), doc);
  }
}