/** @jsx React.DOM */

var React = require('react')
    , $             = require("jquery")

module.exports = React.createClass({
    getInitialState: function() {
        return { name: "", descriptions: "", thumbnail: ""};
    },
    loadCommentsFromServer: function() {
    },
    /**
     * componentDidMount is a method called automatically by React when a component is rendered.
     */
    componentDidMount: function() {
    },
    render: function() {
        return (
            <div className="col-md-4 col-md-4">
                <h2>{this.props.title}</h2>
                <p className="pCell descriptionCell">{this.props.description}</p>
                <img className="img-responsive" src={this.props.thumbnail} alt={this.props.description} />
                <p><a className="btn btn-success" href={this.props.href} target="_blank" role="button">View details &raquo;</a></p>
            </div>
        );
    }
});
