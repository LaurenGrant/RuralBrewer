var React = require('react');
var Router = require('react-router');

var NavBar = React.createClass({
  render: function(){
    return (
        <div className="ui stackable borderless five item menu">
          <a className="item">LOGO Will Go HERE</a>
          <a className="item">Home</a>
          <a className="item">About</a>
          <a className="item">Brews</a>
          <a className="item">Contact</a>
        </div>
    )
  }
});

module.exports = NavBar;
