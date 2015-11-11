/** @jsx React.DOM */

var React = require('react')
    , CommentList   = require("./commentList.jsx")
    , CommentForm   = require("./commentForm.jsx")
    , $             = require("jquery")
    , transport     = require("./../transport")


module.exports = React.createClass({
    /**
     * getInitialState() executes exactly once during the lifecycle of the component and sets up the initial state of the component.
     * @returns {{data: Array}}
     */
    getInitialState: function() {
        return {data: []};
    },
    loadCommentsFromServer: function() {
        //$.ajax({
        //    url: "http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=047d34076dca78bfb1fd6ba191996354&hash=aab07edc087e0ae82a8ddbea3b300086",
        //    dataType: 'json',
        //    cache: true,
        //    success: function(data) {
        //        this.setState({data: data.results});
        //    }.bind(this),
        //    error: function(xhr, status, err) {
        //        console.error(this.props.url, status, err.toString());
        //    }.bind(this)
        //});
        transport.ws.onmessage = $.proxy(function (event) {
            this.setState({data: JSON.parse(event.data)});
        }, this);
    },
    /**
     * componentDidMount is a method called automatically by React when a component is rendered.
     */
    componentDidMount: function() {
        this.loadCommentsFromServer();
    },
    handleCommentSubmit: function(comment) {
        // TODO: submit to the server and refresh the list
        transport.ws.send(JSON.stringify(comment));
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});
