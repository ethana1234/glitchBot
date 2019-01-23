var status = null;
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
      xhr = new XMLHttpRequest(),
      message = null;
  xhr.open('GET', "https://ipinfo.io/json", true);
  xhr.send();
  xhr.addEventListener("readystatechange", processRequest, false);
  xhr.onreadystatechange = processRequest;
  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      status = `IP org response: ${response.org}`;
    }
  }
setTimeout(function(){ console.log(status); }, 500);
