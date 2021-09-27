import { FirebaseService } from './FirebaseService';

export class StorageService {
  constructor({ storage = new FirebaseService() } = {}) {
    this.storage = storage;
  }

  fetchAllFromCollection(collectionName) { 
    return this.storage.fetchAllFromCollection(collectionName);
  }

  subscribeToCollection(collectionName, callbackFN) {
    return this.storage.subscribeToCollection(collectionName, callbackFN);
  }

  addToCollection(collectionName, doc) {
    return this.storage.addToCollection(collectionName, doc);
  }
}