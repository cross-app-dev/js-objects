
var myMethod = function (inputObject){
    console.log("Inside myMethod");
    for(var myProperty in inputObject){
        console.log(myProperty);
        console.log(inputObject[myProperty]);
    }
}

var dumpProperties = function (inputObject){
    console.log("Inside dumpProperties");
    var properties = inputObject.getOwnPropertyNames();
}

var myObject = {
  name:"ObjectName",
  type:"1A",
  size:5,
  isAccessible: true,
  dumpElements:myMethod
};

console.log("The name of my object is: ", myObject.name);
console.log("The type of my object is: ", myObject["type"]);
//console.log(myObject.dumpElements);
myObject.dumpElements(myObject);
