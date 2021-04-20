import * as React from "react";
import * as dateformat from "dateformat";
import { IFeedViewerCard } from "../interfaces/IFeedViewerState";
import * as Helpers from "../utils/Helpers";

export const ExpandedView = (props: any) => {
  const { feedItems, currentPage } = props.parentState;
  const { defaultThumbnailURL } = props.parentProps;

  const indexOfLastFeedItem: number = currentPage * 10;
  const indexOfFirstFeedItem: number = indexOfLastFeedItem - 10;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(feedItems.length / 10); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        className={"page-item" + (currentPage == number ? " active" : "")}
      >
        <a
          href="#"
          className="page-link"
          onClick={() => props.pageChangeHandler(number)}
        >
          {number}
        </a>
      </li>
    );
  });

  return (
    <div className="row">
      <div className="col-12">
        <ul className="latest-feed p-0">
          {feedItems
            .slice(indexOfFirstFeedItem, indexOfLastFeedItem)
            .map((item: IFeedViewerCard, key: any) => {
              return (
                <FeedCard
                  key={key}
                  item={item}
                  defaultThumbnailURL={defaultThumbnailURL}
                  calculateReadingMinutes={props.calculateReadingMinutes}
                ></FeedCard>
              );
            })}
        </ul>
        <ul className="pagination">{renderPageNumbers}</ul>
      </div>
    </div>
  );
};

const FeedCard = (props: any) => {
  const {
    title,
    link,
    description,
    content,
    pubDate,
    thumbnail,
    enclosure,
  } = props.item;

  return (
    <li className="row mb-3 pb-3 pb-md-0">
      <div className="mb-3 col-md-3">
        <a href={link} target="_blank">
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
        </a>
      </div>
      <div className="col-md-9">
        <h4>{title}</h4>
        <p>{description.replace(/<\/?[^>]+>/gi, " ")}</p>
        <div className="btm pt-3 mb-3">
          <strong>
            {dateformat(new Date(pubDate.replace("-", "/")), "mmm dd, yyyy")}
          </strong>{" "}
          | {Helpers.calculateReadingMinutes(content)} Min Read |{" "}
          <a href={link} target="_blank">
            Read More
          </a>
        </div>
      </div>
    </li>
  );
};
