function sendData() {
  var usernameInputValue = document.getElementById('firstname').value;
  var lastnameInputValue = document.getElementById('lastname').value;
  var sendData = {
    firstname: usernameInputValue,
    lastname: lastnameInputValue
  };
  var result = httpGet('http://httpbin.org/post', JSON.stringify(sendData));
  console.log(JSON.parse(result).data);
}

function httpGet(url, data) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('POST', url, false);
  xmlHttp.send(data);
  return xmlHttp.response;
}
