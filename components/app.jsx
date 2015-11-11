/** @jsx React.DOM */

var React           = require('react')
    , ReactDOM      = require('react-dom')
    , CommentBox    = require("./commentBox.jsx")
    , model          = require("./../data/model")

ReactDOM.render(
    <CommentBox url="/api/comments" />,
    document.getElementById('content')
);
