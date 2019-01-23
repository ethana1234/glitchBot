function calcTime(city, offset) {

    d = new Date();

    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    nd = new Date(utc + (3600000*offset));

    return "The local time in " + city + " is " + nd.toLocaleString();

}

// get Bombay time
console.log(calcTime('LA', '-7'));

// get Singapore time
console.log(calcTime('Singapore', '+8'));

// get London time
console.log(calcTime('London', '+1'));
