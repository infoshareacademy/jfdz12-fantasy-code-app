import React from 'react';
import {Link} from 'react-router-dom';

function Links() {

  return (
    <div>
      <Link to="/">Homepage</Link>
      <Link to="/page/1">Page 1</Link>
      <Link to="/page/2">Page 2</Link>
      <Link to="/page/3">Page 3</Link>
    </div>
  )
}

export default Links;