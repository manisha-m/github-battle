
var axios = require('axios');

function getPlayerInfo(player) {
    return axios.get('https://api.github.com/users/' + player);  
}

function getPlayerRepos(player) {
    //get all repos of the user
    return axios.get('https://api.github.com/users/' + player + '/repos');
}

function getStargazersCount(player) {
    return getPlayerRepos(player)
            .then( function (repos) {
                return repos.data.reduce(function( total, current) {
                    return total + current.stargazers_count;
                }, 0);
            })
    
}

function calculateScore(playerInfo) {
    console.log("Calculating score for player %o", playerInfo)
     return getStargazersCount(playerInfo.login)
         .then(function (stars){
         return stars * 3 + playerInfo.followers + playerInfo.public_repos;

     });
      
}


var helpers = { 
    getAllPlayersInfo: function (players) {
        return axios.all(players.map( function (user) {
            return getPlayerInfo(user);
        })).then( function (info) {
            return info.map(function (player) {
                return player.data;
            });
        }).catch(function (err) {
          console.warn("Exception occured " + err);  
        });
    },
    battle: function (playerInfo) {
        return axios.all([calculateScore(playerInfo[0]), calculateScore(playerInfo[1])])
                .then(function (scores) {
                    console.log("Calculated scores: " + scores);
                    return scores;
                }).catch(function (err) {
          console.warn("Exception occured " + err);  
        });
    }
}

module.exports = helpers;