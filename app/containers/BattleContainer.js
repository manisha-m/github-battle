var React = require('react');
var Battle = require('../components/Battle');
var gitHelper = require('../utils/githubapi');

var BattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isLoading: true,
            playerInfo: []
        };
    },
    componentDidMount: function () {
        console.log("In ComponentDidMount");
        var query = this.props.location.query;
        console.log("Query object " + JSON.stringify(query));
        gitHelper.getAllPlayersInfo([query.playerOne, query.playerTwo])
        .then(function (players) {
            console.log("Returned player info " + players);  
            this.setState({
                isLoading: false,
                playerInfo: [players[0], players[1]]
            })   
        }.bind(this))


    },
    handleInitiateBattle: function () {
        //go to results
        this.context.router.push({
            pathname: '/results',
            state: {
                playerInfo: this.state.playerInfo
            }
        });
    },
    render: function () {
        return (
            <Battle 
                isLoading={this.state.isLoading} 
                onInitiateBattle={this.handleInitiateBattle} 
                playerInfo={this.state.playerInfo} />
        );
    }
    
});

module.exports = BattleContainer;