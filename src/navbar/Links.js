import React from 'react';
import {Link} from 'react-router-dom';

function Links() {

  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/games">Games</Link>
      <Link to="/player-list">Player List</Link>
      {/* <Link to="/profile">Profile</Link> */}
    </div>
  )
}

export default Links;