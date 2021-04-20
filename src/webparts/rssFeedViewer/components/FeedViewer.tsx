import * as React from "react";
import { IFeedViewerProps } from "../interfaces/IFeedViewerProps";
import { IFeedViewerState } from "../interfaces/IFeedViewerState";
import { CompactView } from "./CompactView";
import { ExpandedView } from "./ExpandedView";
import * as Constants from "../utils/Constants";
import styles from "./FeedViewer.module.scss";

export default class FeedViewer extends React.Component<
  IFeedViewerProps,
  IFeedViewerState
> {
  private feedItemsCollection: Array<any> = [];

  constructor(props: IFeedViewerProps) {
    super(props);
    this.state = {
      feedItems: [],
      isError: false,
      currentPage: 1,
    };
    this.setCurrentPageState = this.setCurrentPageState.bind(this);
  }

  public componentDidMount(): void {
    this.processRSSFeedsAsync(this.props.rssFeedURL);
  }

  public render(): React.ReactElement<IFeedViewerProps> {
    if (this.state.isError) {
      return (
        <div className={styles.feedViewer}>
          <div className="alert alert-danger" role="alert">
            Error in loading {this.props.webPartTitle} web part...
          </div>
        </div>
      );
    } else {
      if (this.props.webPartType == Constants.EXPANDED) {
        return (
          <div className={styles.feedViewer}>
            <ExpandedView
              parentProps={this.props}
              parentState={this.state}
              pageChangeHandler={this.setCurrentPageState}
            ></ExpandedView>
          </div>
        );
      } else {
        return (
          <div className={styles.feedViewer}>
            <CompactView
              parentProps={this.props}
              parentState={this.state}
            ></CompactView>
          </div>
        );
      }
    }
  }

  public processRSSFeedsAsync(rssFeedURLs: string): void {
    const promiseArray = [];
    rssFeedURLs.split("|").forEach((rssFeedURL: any) => {
      promiseArray.push(this.fetchItemsFromFeed(rssFeedURL));
    });

    Promise.all(promiseArray)
      .then(() => {
        this.setFeedItemsState();
      })
      .catch(() => {
        this.setFeedItemsState();
      });
  }

  public fetchItemsFromFeed(rssFeedURL: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(Constants.RRS_TO_JSON_URL + encodeURIComponent(rssFeedURL))
        .then((response) => response.json())
        .then(
          (result) => {
            if (result.status == Constants.STATUS_OK) {
              this.feedItemsCollection.push(...result.items);
              resolve(this.feedItemsCollection);
            } else {
              console.error(Constants.ERROR_MSG + result.message);
              reject(result.message);
            }
          },
          (error) => {
            console.error(Constants.ERROR_MSG + error);
            reject(error);
          }
        );
    });
  }

  public setFeedItemsState(): void {
    if (this.feedItemsCollection.length == 0) {
      this.setState({
        isError: true,
      });
    } else {
      this.feedItemsCollection.forEach((element) => {
        element.pubDateTime = new Date(element.pubDate.replace("-", "/"));
      });
      this.feedItemsCollection.sort((a, b) => b.pubDateTime - a.pubDateTime);
      this.setState({
        feedItems: this.feedItemsCollection,
        isError: false,
      });
    }
  }

  public setCurrentPageState(newPage: number): void {
    this.setState({
      currentPage: newPage,
    });
  }
}
