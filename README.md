# certificate-renewal-dashboard-webpart

## Summary

This web part was designed using SharePoint Framework (SPFX) and React JS.  
It provides a custom solution for displaying the recent posts from single or multiple RSS Feed(s) onto the SharePoint site.  
The web part is available in two layouts which can be changed from property pane -

- **Compact** - displays the posts in tile format (latest 6 posts)
- **Expanded** - displays the post in detailed format (latest 10 posts from each RSS feed)

<br>

## Output

- **Compact Layout**

  <img alt="Compact Layout" src="https://github.com/mayur1711/rss-feed-viewer-webpart/blob/main/output/Compact View.jpg" style="width:100%;max-width:800px"/>
  <br><br>

- **Expanded Layout**

  <img alt="Expanded Layout" src="https://github.com/mayur1711/rss-feed-viewer-webpart/blob/main/output/Expanded View.jpg" style="width:100%;max-width:800px"/>

- **Property Pane**

  <img alt="Expanded Layout" src="https://github.com/mayur1711/rss-feed-viewer-webpart/blob/main/output/Property Pane.jpg"/>

<br>

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)

<br>

## Adhoc Frameworks/Components used:

- React JS
- Bootstrap

<br>

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

<br>

## Prerequisites

- Node v10.x.x
- [RSS2JSON](https://rss2json.com/) (The web part internally uses the middleware RSS2JSON for consuming and parsing RSS feeds, ensure RSS2JSON is still active)

<br>

## Solution

| Solution                | Author(s)  |
| ----------------------- | ---------- |
| rss-feed-viewer-webpart | Mayur Mule |

<br>

## Version history

| Version | Date            | Comments        |
| ------- | --------------- | --------------- |
| 1.0     | October 1, 2020 | Initial release |

<br>

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

<br>

## Minimal Path to Awesome

- Ensure that installed Node version is v10.x.x
- Clone this repository
- Ensure that you are at the solution folder
- In the command-line run:
  - **npm install**
  - **gulp serve** [for dev workbench]
  - **gulp bundle --ship && gulp package-solution --ship** [for prod build]

<br>

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
- [Reusable React controls for your SharePoint Framework solutions](https://pnp.github.io/sp-dev-fx-controls-react/)
