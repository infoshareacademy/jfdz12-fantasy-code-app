import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './navbar/Navbar';

class App extends React.Component {
  state = {
    avatarUrl: ''
  };

  handleOnAvatarUpdate = (url) => {
      this.setState({
          avatarUrl: url
      })
  };

  render() {
    return (
    <Router>
      <Navbar 
        avatarUrl={this.state.avatarUrl}
        onAvatarUpdate={this.handleOnAvatarUpdate}
      />
    </Router>
  );
}};

export default App;