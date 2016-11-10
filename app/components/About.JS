var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div id="heroAbout" className="ui stackable two column grid">
        <div className="column"></div> {/* End column */}
        <div className="overlay column">
          <div className="ui basic segment">
            <h1 className="ui white center aligned header">About The Rural Brewer</h1>
            <p className="whiteText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim, massa non sagittis fermentum, nibh sem consectetur ligula, sit amet mollis ipsum ipsum vitae massa. Sed eget ex quis leo luctus efficitur. Maecenas eget egestas ex. Donec facilisis nisl nec lacus iaculis semper. Nunc sit amet ante augue. Cras venenatis lectus porttitor, viverra eros ut, fringilla nisi. Nulla ultrices egestas mi in condimentum. Fusce in urna sit amet nisi finibus convallis a a nulla. Cras non ligula tincidunt, dignissim magna in, dictum risus. Pellentesque fringilla id urna at interdum. Etiam laoreet vitae dui ac feugiat. Morbi at volutpat dolor. Sed ut urna non orci maximus fringilla. Curabitur mattis ullamcorper ante.
            </p>
            <p className="whiteText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim, massa non sagittis fermentum, nibh sem consectetur ligula, sit amet mollis ipsum ipsum vitae massa. Sed eget ex quis leo luctus efficitur. Maecenas eget egestas ex. Donec facilisis nisl nec lacus iaculis semper. Nunc sit amet ante augue. Cras venenatis lectus porttitor, viverra eros ut, fringilla nisi.
            </p>
          </div> {/* End segment */}
        </div> {/* End column */}
      </div>
    )
  }
});

module.exports = About;
