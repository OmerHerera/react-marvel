/** @jsx React.DOM */

var React = require('react'),
    marked = require('marked')

module.exports = React.createClass({
    rawMarkup: function(str) {
        var rawMarkup = marked(str, {sanitize: true});
        return { __html: rawMarkup };
    },
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup(this.props.children.toString())} />
            </div>
        );
    }
});
