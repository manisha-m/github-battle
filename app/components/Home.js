var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function () { 
        return (
        <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
            <h1>Github Battle</h1>
            <p className='lead'>May the best coder win!</p>
            <Link to='/playerOne'>
                <button type='submit' className="btn btn-lg btn-success">Start Battle!</button>
            </Link>
        </div>
    );
    }
});


module.exports = Home;

