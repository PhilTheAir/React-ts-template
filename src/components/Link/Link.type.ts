// step 7a

export interface linksInfo {
  id: string;
  createdAt: string;
  url: string;
  description: string;
}

export interface IFeedProps {
  feed: {
    links: Array<linksInfo>
  }
}