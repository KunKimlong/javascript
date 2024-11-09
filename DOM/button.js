function changeText(){
    var text = "Event on JS DOM"
    var textHtml = document.querySelector('#text');
    textHtml.innerText = text
    textHtml.style = "color:green;";
    
}

function unChangeText(){
    var text = "Hello Everyone Welcome to ETEC";
    
    document.querySelector('#text').innerText = text
}