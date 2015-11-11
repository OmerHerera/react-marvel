/** @jsx React.DOM */

var React           = require('react')
    , ReactDOM      = require('react-dom')
    , Table         = require("./table.jsx")
    , data
    , Router = require('react-router').Router
    , Route = require('react-router').Route
    , Link = require('react-router').Link
    , Cell = require("./cell.jsx")




function _render () {
    ReactDOM.render(
        <Router>
            <Route path="/" component={Table}>
            </Route>
            <Route path="/heroe/:heroeId" component={Cell}>
            </Route>
        </Router>, document.getElementById("tableContainer"));
}

_render();
