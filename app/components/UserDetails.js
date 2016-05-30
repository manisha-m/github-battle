var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/');

function puke(object) {
    <pre> {JSON.stringify(object, null, ' ')}</pre>
}

function UserDetails(props) {
    console.log("In UserDetails, props playerInfo %o", props.playerInfo);
    return (
        <div>
            <h2>{props.header}</h2>
            {props.score && <li className='list-group-item'><h3>Score:{props.score}</h3></li>}
            <li className='list-group-item text-center'><img src={props.playerInfo.avatar_url} className='img-rounded img-responsive' style={styles.image}/></li>
            {props.playerInfo.name && <li className='list-group-item'>Name:{props.playerInfo.name}</li>}
            <li className='list-group-item'>Username:{props.playerInfo.login}</li>
            {props.playerInfo.location &&  <li className='list-group-item'>Location:{props.playerInfo.location}</li>}
            <li className='list-group-item'>Followers:{props.playerInfo.followers}</li>
            <li className='list-group-item'>Following:{props.playerInfo.following}</li>
            <li className='list-group-item'>Public Repos:{props.playerInfo.public_repos}</li>
            {props.playerInfo.blog && <li className='list-group-item'>Blog:{props.playerInfo.blog}</li>}
        </div>
    )
}

UserDetails.propTypes = {
    header: PropTypes.string.isRequired,
    playerInfo: PropTypes.object.isRequired,
    score: PropTypes.number
}

module.exports = UserDetails;