const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
    Window = require('window');
var xhr = new XMLHttpRequest(),
    window = new Window();
xhr.open('GET', "https://api.mysportsfeeds.com/v1.1/pull/nfl/2018-2019-regular/game_boxscore.json?gameid=", true);
xhr.setRequestHeader("Authorization", "Basic " + window.btoa("eb17dcd8-204e-4ce2-8830-35195a:ethana33"));
//xhr.open('GET', "https://ipinfo.io/json", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText),
            gamebox = response.gameboxscore,
            awayName = gamebox.game.awayTeam.Abbreviation,
            homeName = gamebox.game.homeTeam.Abbreviation,
            awayScore = gamebox.quarterSummary.quarterTotals.awayScore,
            homeScore = gamebox.quarterSummary.quarterTotals.homeScore;
        console.log(`${awayName} (${awayScore}) @ ${homeName} (${homeScore})`);
    }
    else if (xhr.readyState == 4 && xhr.status > 200){
        console.log('Failed: response code ' + xhr.status);
    }
}
