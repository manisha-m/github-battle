var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles/');
var UserDetails = require('./UserDetails');

function puke(object) {
    return <pre> {JSON.stringify(object, null, ' ')}</pre>
}

function Results (props) {
    console.log("Results: player 1 %o", props.playerInfo[0]);
        if(props.isLoading === true) {
        return (
            <div> LOADING </div>
        );
    } 
    
    if(props.score[0] === props.score[1]) {
        return (
            <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
                <h1>It's a tie!</h1>
                <div className='col-sm-12'>
                    <Link to='/playerOne'>
                        <button className='btn btn-success' style={styles.space}>Start Over</button>
                    </Link>
                </div>
            </div>
        );
    }
    
    var playerOneHeading = (props.score[0] > props.score[1]) ? "Winner" : "Loser";
    var playerTwoHeading = (props.score[1] > props.score[0]) ? "Winner" : "Loser";

    return (
            <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-6'>
                <UserDetails 
                    header={playerOneHeading}
                    score={props.score[0]}
                    playerInfo={props.playerInfo[0]} />
            </div>
            <div className='col-sm-6'>
            <UserDetails 
                header={playerTwoHeading}
                score={props.score[1]}
                playerInfo={props.playerInfo[1]} />
            </div>
            </div>
            
            <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12'>
                <Link to='/playerOne'>
                    <button className='btn btn-success' style={styles.space}>Start Over</button>
                </Link>
            </div>
            </div>
        </div>
    )
    
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    score: PropTypes.array.isRequired,
    playerInfo: PropTypes.array.isRequired
}

module.exports = Results;