var jsdom = require("jsdom");
const Window = require('window');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window),
    w = new Window();
$.ajax({
  type: "GET",
  url: "https://api.mysportsfeeds.com/v1.1/pull/nfl/2018-regular/daily_game_schedule.xml?fordate=20181014",
  dataType: 'json',
  async: false,
  headers: {
      "Authorization": "Basic " + w.btoa("eb17dcd8-204e-4ce2-8830-35195a:ethana33")
  },
  data: 'hello',
  success: function (data){
    console.log('Thanks for your comment: ' + data);
  }
});
console.log('hello');
