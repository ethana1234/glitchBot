function checkOldGames() {
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('./gameLog.txt')
    });
    lineReader.on('line', function (line) {
    });
}

// Here a date has been assigned
// while creating Date object
var dateobj = new Date();

// date of the month from above Date Object is
// being extracted using getDate()
var B = dateobj.getFullYear();

// Printing date of the month
console.log(B);
