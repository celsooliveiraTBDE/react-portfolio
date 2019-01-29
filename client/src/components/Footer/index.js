import React from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {


  render() {
    return (

<footer className="footer">
  <div className="content has-text-centered">
    <p className='is-size-7-mobile'>
      <strong>Portfolio </strong> by <Link to="https://jgthms.com">Celso Oliveira</Link>. The source code is licensed
      <Link to="http://opensource.org/licenses/mit-license.php">MIT</Link>. The website content
      is licensed <Link to="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</Link>.
    </p>
  </div>
</footer>
    );
  }
}