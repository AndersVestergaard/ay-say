import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import "../pages-style/index.scss";
import logo from "../images/aysay-logo.png";

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
        <div className={`top-bar ${this.state.showTopBar ? "show" : ""}`}>
          <a href="https://www.facebook.com/aysaymusic">Facebook</a>
          <a href="https://www.instagram.com/aysaymusic/">Instagram</a>
          <a href="https://linktr.ee/AySay">Music</a>
          <div className="img-wrapper">
            <img src={logo}></img>
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
            <img src={logo}></img>
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
