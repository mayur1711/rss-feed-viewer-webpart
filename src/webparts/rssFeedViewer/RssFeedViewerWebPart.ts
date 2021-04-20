import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import {
  BaseClientSideWebPart,
  PropertyPaneDropdown,
} from "@microsoft/sp-webpart-base";

import * as strings from "RssFeedViewerWebPartStrings";
import FeedViewer from "./components/FeedViewer";
import { IFeedViewerProps } from "./interfaces/IFeedViewerProps";

export interface IRssFeedViewerWebPartProps {
  webPartTitle: string;
  webPartType: string;
  rssFeedURL: string;
  viewAllURL: string;
  defaultThumbnailURL: string;
}

export default class RssFeedViewerWebPart extends BaseClientSideWebPart<IRssFeedViewerWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IFeedViewerProps> = React.createElement(
      FeedViewer,
      {
        webPartTitle: this.properties.webPartTitle,
        webPartType: this.properties.webPartType,
        rssFeedURL: this.properties.rssFeedURL,
        viewAllURL: this.properties.viewAllURL,
        defaultThumbnailURL: this.properties.defaultThumbnailURL,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  // @ts-ignore
  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("webPartTitle", {
                  label: strings.WebPartTitleFieldLabel,
                }),
                PropertyPaneDropdown("webPartType", {
                  label: strings.WebPartTypeFieldLabel,
                  options: [
                    {
                      key: "Compact",
                      text: "Compact",
                    },
                    {
                      key: "Expanded",
                      text: "Expanded",
                    },
                  ],
                }),
                PropertyPaneTextField("rssFeedURL", {
                  label: strings.RSSFeedURLFieldLabel,
                  multiline: true,
                  rows: 5,
                }),
                PropertyPaneTextField("viewAllURL", {
                  label: strings.ViewAllURLFieldLabel,
                }),
                PropertyPaneTextField("defaultThumbnailURL", {
                  label: strings.DefaultThumbnailURLFieldlabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
