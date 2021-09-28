import { FirebaseService, IFirebaseService } from './FirebaseService';

export interface IStorageService {
  fetchAllFromCollection: (collectionName: string) => Promise<Object[]>;
  subscribeToCollection: (collectionName: string, callbackFN: Function) => Function;
  addToCollection: (collectionName: string, doc: Object) => Promise<Object>
}

export class StorageService implements IStorageService {
  private storage: IFirebaseService;

  constructor({ storage = new FirebaseService() } = {}) {
    this.storage = storage;
  }

  fetchAllFromCollection(collectionName: string): Promise<Object[]> { 
    return this.storage.fetchAllFromCollection(collectionName);
  }

  subscribeToCollection(collectionName: string, callbackFN: Function): Function {
    return this.storage.subscribeToCollection(collectionName, callbackFN);
  }

  addToCollection(collectionName: string, doc: Object): Promise<Object> {
    return this.storage.addToCollection(collectionName, doc);
  }
}