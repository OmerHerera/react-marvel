/** @jsx React.DOM */

var React = require('react')
    , Cell = require("./cell.jsx")
    , $             = require("jquery")
    , fetchedData

module.exports = React.createClass({
    /**
     * getInitialState() executes exactly once during the lifecycle of the component and sets up the initial state of the component.
     * @returns {{data: Array}}
     */
    getInitialState: function() {
        return {data: fetchedData || []};
    },
    loadCommentsFromServer: function() {
        $.ajax({
            url: "http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=047d34076dca78bfb1fd6ba191996354&hash=aab07edc087e0ae82a8ddbea3b300086&limit=100",
            dataType: 'json',
            cache: true,
            success: function(data) {
                fetchedData = data.data.results;
                this.setState({data: data.data.results});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    /**
     * componentDidMount is a method called automatically by React when a component is rendered.
     */
    componentDidMount: function() {
        if (!fetchedData) {
            this.loadCommentsFromServer();
        }
    },
    render: function() {
        var rows = [];
        this.state.data.forEach(function(heroe) {
            var thumbnail = heroe.thumbnail.path + "." + heroe.thumbnail.extension;
            var href = "#heroe/" + heroe.id;
            var urlDetails = heroe.urls[0].url;

            rows.push(<Cell title={heroe.name} description={heroe.description} thumbnail={thumbnail} href={urlDetails}/>);
        });

        return (
            <div className="row">
                {rows}
            </div>
        );
    }
});
