export interface IFeedViewerState {
  feedItems: Array<IFeedViewerCard>;
  isError: boolean;
  currentPage: number;
}

export interface IFeedViewerCard {
  title: string;
  link: string;
  description: string;
  content: string;
  pubDate: string;
  thumbnail: string;
  enclosure: any;
}
