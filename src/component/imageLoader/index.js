import React, { Component, Fragment } from "react";
import CircularSpinner from "./circular";
import noImg from "assets/no-image-icon-6.png"

class ImageLoader extends Component {
  state = {
    loaded: false
  };

  onImageLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    const { src, imageClass = "img"  } = this.props

    return (
      <Fragment>
        <div className="image-container">
          <img
            className={imageClass}
            src={src}
            onLoad={this.onImageLoaded}
            onError={(e)=>{e.target.onerror = null; e.target.src=noImg}} alt="product"
          />
          {!loaded && (
            <div className="image-container-overlay">
              <CircularSpinner />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default ImageLoader;
