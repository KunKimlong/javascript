var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
// alert(day+" "+month+" "+year)
document.getElementById('day').innerHTML= "<h1>"+day+"</h1>"
