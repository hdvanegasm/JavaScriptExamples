function sendData() {
  var textboxValue = document.getElementById('username').value;
  var result = httpGet('http://httpbin.org/post', textboxValue);
  console.log(JSON.parse(result).data); 
}

function httpGet(url, value) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('POST', url, false);
  xmlHttp.send(value);
  return xmlHttp.response;
}
