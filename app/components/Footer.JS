import React from 'react';
import Router from 'react-router';

const NavBar = React.createClass({
  render: function(){
    return (
      <footer>
        <div className="ui inverted vertical footer segment">
          <div
            className="
            ui stackable three column center aligned grid container"
          >
            <div className="column"></div>
            <div className="column">
              <a href="#">© 2016 The Rural Brewer Beer Company</a>
            </div> {/* End column */}
            <div className="column">
              <p>Contact: </p>
              <p>Phone</p>
              <p>Address</p>
              <p>Email</p>
            </div> {/* End column */}
          </div> {/* End grid */}
        </div> {/* End segment */}
      </footer>
    )
  }
});

export default NavBar;
