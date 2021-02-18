import React from "react";

class RandomCat extends React.Component {
    render() {
        const defaultHeight = 400;
        const defaultWidth = 200;
        
    return (
      <a href="http://lorempixel.com">
            <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" width={this.props.width || defaultWidth} height={this.props.height || defaultHeight} />
      </a>
    );
  }
}

export default RandomCat;