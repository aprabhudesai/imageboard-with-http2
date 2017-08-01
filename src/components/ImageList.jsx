import React from 'react';
import Image from './Image.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count } = this.props;
    let imageList = [];
    for(let i = 0; i < count ; i++) {
      let imageName = `/image/testpic${i+1}.png`;
      imageList.push(
        <li className="img-list-item" key={i}>
          <Image
            imgSrc={imageName}
            imgHeight={100}
            imgWidth={80}
          />
        </li>
      );
    }

    return (
      <ul className="image-list">
        {imageList}
      </ul>
    );
  }
}

export default ImageList;