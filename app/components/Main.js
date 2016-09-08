var React = require('react');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
