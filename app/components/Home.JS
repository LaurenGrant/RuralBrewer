var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div id="heroHome" className="ui middle aligned one column centered grid">
        <div className="row">
          <div className="column">
            <img className="ui centered circular image" src="http://lorempixel.com/200/200/"></img>
          </div> {/* End column */}
        </div> {/* End row */}
      </div>
    )
  }
});

module.exports = Home;
