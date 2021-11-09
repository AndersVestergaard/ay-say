import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../pages-style/index.scss";
import logo from "../images/aysay-logo.png";
import { Helmet } from "react-helmet";
import "@fontsource/roboto";

// markup
class Index extends React.PureComponent<
  {},
  {
    showTopBar: boolean;
    navOpen: boolean;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      showTopBar: false,
      navOpen: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showTopBar: true });
    }, 1);
  }

  startNavTrans() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    return (
      <div className="index-page">
        <Helmet
          htmlAttributes={{ lang: "en" }}
          title="AySay"
          meta={[
            {
              name: `description`,
              content: "AySay is a modern Danish/Turkish/Kurdish trio which combines Anatolian folk and Nordic electronica. A musical space where boundaries are broken down in a present and open way.",
            },
            {
              property: `og:title`,
              content: "AySay",
            },
            {
              property: `og:description`,
              content: "AySay is a modern Danish/Turkish/Kurdish trio which combines Anatolian folk and Nordic electronica. A musical space where boundaries are broken down in a present and open way.",
            },
            {
              property: `og:type`,
              content: `website`,
            },
          ]}
        ></Helmet>
        <div className={`top-bar ${this.state.showTopBar ? "show" : ""}`}>
          <a href="https://www.facebook.com/aysaymusic">Facebook</a>
          <a href="https://www.instagram.com/aysaymusic/">Instagram</a>
          <a href="https://linktr.ee/AySay">Music</a>
          <div className="img-wrapper">
              AySay
          </div>
          <a href="https://linktr.ee/AySay">Contact</a>
          <a href="https://www.youtube.com/channel/UCvIg-1Lz6Z5Sq--DFIS7cSg">
            Youtube
          </a>
          <a href="https://linktr.ee/AySay">Shows</a>
        </div>
        <div
          className={`mobile-nav  ${this.state.navOpen ? "open" : "closed"}`}
        >
          <div className="container">
            <a href="https://www.facebook.com/aysaymusic">Facebook</a>
            <a href="https://www.instagram.com/aysaymusic/">Instagram</a>
            <a href="https://linktr.ee/AySay">Music</a>
            <a href="https://linktr.ee/AySay">Contact</a>
            <a href="https://www.youtube.com/channel/UCvIg-1Lz6Z5Sq--DFIS7cSg">
              Youtube
            </a>
            <a href="https://linktr.ee/AySay">Shows</a>
          </div>

          <div className="img-wrapper">
            AySay
          </div>

          <div className="burger-nav" onClick={() => this.startNavTrans()}>
            <div className="middle"></div>
          </div>
        </div>
        <div className="container">
          <StaticImage
            src="../images/aysay-press.jpg"
            alt="Press photo of AySay"
            placeholder="blurred"
            transformOptions={{ cropFocus: "north", fit: "contain" }}
            quality={100}
          ></StaticImage>
        </div>
      </div>
    );
  }
}

export default Index;
