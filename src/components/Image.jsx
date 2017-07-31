import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgSrc, imgHeight, imgWidth } = this.props;

    return (
      <img src={imgSrc} height={imgHeight} width={imgWidth} />
    );
  }
}

export default Image;