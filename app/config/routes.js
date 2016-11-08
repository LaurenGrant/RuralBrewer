var React = require('react');
var Main = require('../components/Main');
var NavBar = require('../components/NavBar');
var Home = require('../components/Home');
var About = require('../components/About');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
    <Route path="home" component={Home} />
    <Route path="about" component={About} />
    <IndexRoute component={NavBar} />
  </Route>
);
