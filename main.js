console.log("hello");
function executeThisCodeAfterLoading(){
	console.log("Loading");
};

function executeThisCodeAfterFileFails(){
	console.log("Fail");
};

var myRequest = new XMLHttpRequest();
myRequest.addEventListener ("load", executeThisCodeAfterLoading);
myRequest.addEventListener ("error", executeThisCodeAfterFileFails);
myRequest.open("GET","dionsaur.json");// get the data from the ginosaure 
myRequest.send(); //send to execute the request
console.log("myRequest",myRequest)
	
