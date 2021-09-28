import { StorageService } from './StorageService';
import { IStorageService } from './StorageService';
import { IPostDocWithId, IPostDoc } from './PostDoc';

interface IPostService {
  fetchAllPosts: () => Promise<IPostDocWithId[]>;
  subscribeToAllPosts: (callbackFN: Function) => Function;
  addPost: (doc: IPostDoc) => Promise<Object>;
}

export class PostService implements IPostService {
  private storage: IStorageService;

  constructor({ storage = new StorageService() } = {}) {
    this.storage = storage;
  }

  fetchAllPosts(): Promise<IPostDocWithId[]> {
    return this.storage.fetchAllFromCollection('posts') as Promise<IPostDocWithId[]>;
  }

  subscribeToAllPosts(callbackFN: Function): Function {
    return this.storage.subscribeToCollection('posts', callbackFN);
  }

  addPost(doc: IPostDoc): Promise<Object> {
    return this.storage.addToCollection('posts', doc);
  }
}