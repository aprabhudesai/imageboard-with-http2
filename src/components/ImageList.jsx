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
      imageList.push(
        <li className="img-list-item" key={i}>
          <Image
            imgSrc="https://a.thumbs.redditmedia.com/aa10Gl_i_uwP8wqzgx12eUNbhcOBVymtkpbpyWrmXU8.png"
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