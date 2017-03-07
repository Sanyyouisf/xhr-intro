//JSON doesn't like comments and everything MUST be in quotes.. in JSON files
//the "new" tag is a constructor.  It's an object that has properties.
// xmlr has a bunch of stuff and the new tag will create a "copy" of that
// then names it as a new variable. Then you can use your variable name to access the information.

console.log("First line in Js filr ", Date.now());
//initialize our XMLHttpRequest object
var myRequest = new XMLHttpRequest();
//The XMLHttpRequest object can be used to request data from a web server.
//with The XMLHttpRequest you can:
//Update a web page without reloading the page
//Request data from a server - after the page has loaded
//Receive data from a server  - after the page has loaded
//Send data to a server - in the background

//add using dot notation

var dinoContainer = document.getElementById("dinoContainer");

function makeDom(xhrData){    
    var dinosaurString = "";
    var currentDinosaur;

    for(var x = 0; x < xhrData.dinosaur.length; x++) {
        currentDinosaur = xhrData.dinosaur[x];
        dinosaurString += `<div class="col-sm-6 col-md-4">`;
        dinosaurString += `<div class="thumbnail">`;
        dinosaurString += `<img src="${currentDinosaur.url}" alt="...">`;
        dinosaurString += `<div class="${currentDinosaur.type}">`;
        dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
        dinosaurString += `<p>${currentDinosaur.food}</p>`;
        dinosaurString += `</div></div></div>`;
    }
    dinoContainer.innerHTML = dinosaurString;
}

function executeThisCodeAfterFileLoaded(){
	console.log("Data Return :  ", Date.now());
//A common use of JSON is to exchange data to/from a web server.
//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
//var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
    var data = JSON.parse(this.responseText);

    // console.log("it works!", data);
    makeDom(data);
}
function executeThisCodeAfterFileFails(){
    // console.log("booooo");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);

//now we do something to the things || 2 things... 
//GET/POST/PUT/DELETE..etc.. SECOND IS WHERE DO I GET IT FROM?
myRequest.open("GET", "dinosaur.json");

myRequest.send();
console.log("myRequest", myRequest);


console.log("Last line in Js filr ", Date.now());