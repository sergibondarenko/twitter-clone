export interface IPostDoc {
  displayName: string;
  userName: string;
  wasVerified: boolean;
  text: string;
  imageLink: string;
  avatarLink: string;
  timestamp: number;
}

export interface IPostDocWithId extends IPostDoc {
  id: string;
}