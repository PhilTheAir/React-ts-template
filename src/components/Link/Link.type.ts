// step 7a

export interface ILinksInfo {
  id: string;
  createdAt: number;
  url: string;
  description: string;
  postedBy: {
    id: string;
    name: string;
  },
  votes: Array<{
    id: string;
    user: {
      id: string;
    }
  }>
}

export interface IFeedProps {
  feed: {
    links: Array<ILinksInfo>
  }
}