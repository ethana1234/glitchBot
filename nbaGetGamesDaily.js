const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
    Window = require('window');
var xhr = new XMLHttpRequest(),
    window = new Window(),
    currentDate = getDate('-7');
xhr.open('GET', "https://api.mysportsfeeds.com/v1.1/pull/nba/2018-2019-regular/scoreboard.json?fordate=" + currentDate, true);
xhr.setRequestHeader("Authorization", "Basic " + window.btoa("eb17dcd8-204e-4ce2-8830-35195a:ethana33"));
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText),
            games = response.scoreboard.gameScore;
        for (var i = 0;i < games.length;i++) {
            if (checkOldGames(games[i].game.ID) && games[i].isCompleted == "true") {
                console.log(`${games[i].game.awayTeam.Abbreviation} (${games[i].awayScore}) @ ${games[i].game.homeTeam.Abbreviation} (${games[i].homeScore})`);
                return;
            }

        }
    }
    else if (xhr.readyState == 4 && xhr.status > 200){
        console.log('Failed: response code ' + xhr.status);
    }
}

// procedure for checking if game has already been over
function checkOldGames(id) {
    var fileName = './gameLog.txt',
        repeat = false,
        lineArray = require('fs').readFileSync(fileName).toString().split('\n');
    lineArray.forEach(function(line) {
        if (line == id) {
            repeat = true;
        }
    })
    if (repeat) {
        return false;
    }
    //if id isn't in file, add id to file and return true
    var lineWriter = require('fs');
    lineWriter.writeFile(fileName, id + "\n", {flag: 'a'}, (err) => {
        if (err) {
            console.error('error!', err);
        }
    });
    return true;
}

// formats date for http request
function getDate(offset) {
    var d = new Date(),
        utc = d.getTime() + (d.getTimezoneOffset() * 60000),
        nd = new Date(utc + (3600000*offset)),
        year = nd.getFullYear(),
        month = (nd.getMonth() + 1 < 10) ? '0' + (nd.getMonth() + 1) : nd.getMonth() + 1,
        day = (nd.getDate() < 10) ? '0' + (nd.getDate()) : nd.getDate();
    return `${year}${month}${day}`;
}
