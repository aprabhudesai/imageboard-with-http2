import React from 'react';
import ImageList from './ImageList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="image-app">
        <ImageList count={10}/>
      </div>
    );
  }
}

export default App;