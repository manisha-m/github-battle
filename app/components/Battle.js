var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var UserDetails = require('./UserDetails');
var Link = ReactRouter.Link;
var styles = require('../styles/');

function puke(object) {
    <pre> {JSON.stringify(object, null, ' ')}</pre>
}

//stateless function
function Battle(props) {
    if(props.isLoading === true) {
        return (
            <div> LOADING </div>
        );
    } else {
        console.log("Player 1 Info: %o", props.playerInfo[0]);
        console.log("Player 2 Info: %o", props.playerInfo[1]);
        return (
            <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-6'>
                <UserDetails 
                    header='Player One'
                    playerInfo={props.playerInfo[0]} />
            </div>
            <div className='col-sm-6'>
            <UserDetails 
                header='Player Two'
                playerInfo={props.playerInfo[1]} />
            </div>
            </div>
             <div className='col-sm-8 col-sm-offset-2'>
            <div className='col-sm-12'>
            <button className='btn btn-success' style={styles.space} onClick={props.onInitiateBattle}>Initiate Battle!</button>
            </div>
            <div className='col-sm-12'>
            <Link to='/playerOne'>
                <button className='btn btn-info' style={styles.space}>Reselect Players</button>
            </Link>
            </div>
            </div>
            </div>
        );
    }
}

Battle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playerInfo: PropTypes.array.isRequired
}

module.exports = Battle;