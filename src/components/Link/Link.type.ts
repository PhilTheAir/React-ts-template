// step 7a

export interface ILinksInfo {
  id: string;
  createdAt: string;
  url: string;
  description: string;
}

export interface IFeedProps {
  feed: {
    links: Array<ILinksInfo>
  }
}