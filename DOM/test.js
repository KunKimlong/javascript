document.getElementById('hello').innerHTML = "<u>Welcome to JS DOM</u>"
document.getElementById("demo1").innerText = "<h1>Get Id demo 1</h1>";
document.getElementById("demo2").innerHTML = "<h1>Get Id demo 2</h1>";

var text = document.querySelector('.get').innerText
console.log(text);
console.log(document.querySelector('.get').innerText);
document.querySelector('#show').innerText = text;