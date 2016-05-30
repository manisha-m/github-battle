var React = require('react');
var Results = require('../components/Results');
var gitHelper = require('../utils/githubapi')

var ResultsContainer = React.createClass({
    getInitialState: function () {
      return {
          isLoading: true,
          score: []
      }; 
    },
    componentDidMount: function () {
      //calculate and set scores
      //githubapi helper method to calculate score
      gitHelper.battle(this.props.location.state.playerInfo)
        .then(function (scores) {
            console.log("Returned player info " + scores); 
            this.setState({
                isLoading: false,
                score: [scores[0], scores[1]]
            })
      }.bind(this))
    },
    render: function () {
        return (
        <Results 
            isLoading={this.state.isLoading} 
            score={this.state.score} 
            playerInfo={this.props.location.state.playerInfo}/>
        );
    }
});

module.exports = ResultsContainer;