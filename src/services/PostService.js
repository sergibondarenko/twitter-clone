import { StorageService } from './StorageService';

export class PostService {
  constructor({ storage = new StorageService() } = {}) {
    this.storage = storage;
  }

  fetchAllPosts() {
    return this.storage.fetchAllFromCollection('posts');
  }

  subscibeToAllPosts(callbackFN) {
    return this.storage.subscribeToCollection('posts', callbackFN);
  }

  addPost(doc) {
    return this.storage.addToCollection('posts', doc);
  }
}