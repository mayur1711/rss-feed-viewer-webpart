import * as React from "react";
import * as dateformat from "dateformat";
import { IFeedViewerCard } from "../interfaces/IFeedViewerState";
import * as Helpers from "../utils/Helpers";

export const CompactView = (props: any) => {
  const { feedItems } = props.parentState;
  const { webPartTitle, viewAllURL, defaultThumbnailURL } = props.parentProps;

  return (
    <div className="recent-articles pt-3">
      <div className="row mb-3">
        <h4 className="mb-4 col-6">{webPartTitle}</h4>
        <a href={viewAllURL} target="_blank" className="col-6 text-right">
          View All
        </a>
      </div>
      <div className="row">
        <div className="col-md-6">
          {feedItems.slice(0, 6).map((item: IFeedViewerCard, key: number) => {
            if (key % 2 == 0) {
              return (
                <FeedCard
                  key={key}
                  item={item}
                  defaultThumbnailURL={defaultThumbnailURL}
                  calculateReadingMinutes={Helpers.calculateReadingMinutes}
                ></FeedCard>
              );
            }
          })}
        </div>
        <div className="col-md-6">
          {feedItems.slice(0, 6).map((item: IFeedViewerCard, key: number) => {
            if (key % 2 != 0) {
              return (
                <FeedCard
                  key={key}
                  item={item}
                  defaultThumbnailURL={defaultThumbnailURL}
                  calculateReadingMinutes={Helpers.calculateReadingMinutes}
                ></FeedCard>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const FeedCard = (props: any) => {
  const { title, link, content, pubDate, thumbnail, enclosure } = props.item;
  return (
    <div className="item d-flex justify-content-start mb-4">
      <div className="thumb">
        <img
          src={
            thumbnail
              ? thumbnail
              : enclosure
              ? enclosure.link
                ? enclosure.link
                : props.defaultThumbnailURL
              : props.defaultThumbnailURL
          }
          className="w-100"
        />
      </div>
      <div className="col">
        <h5 className="title">
          <label title={title}>{title}</label>
        </h5>
        <div className="details mt-3">
          <strong>
            {dateformat(new Date(pubDate.replace("-", "/")), "mmm dd, yyyy")}
          </strong>{" "}
          | {props.calculateReadingMinutes(content)} Min Read |{" "}
          <a href={link} target="_blank">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
