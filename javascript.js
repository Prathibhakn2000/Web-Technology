//var keyword
var num; //declaration of variavble
num = 90;  //initilization
console.log(num) //print out put in console
console.log(typeof(num)) //print type of reference

//let keyword
let num1;
num1=50;
console.log(num1)

//const keyword does not allow declartion of variable
const pi = 3.14
console.log(pi);


(function (){
  var ref1=50;
  console.log(ref1)
}());

function run(){ 
  console.log("name fuction");
}
 run();

 var arrowFuction=()=>{
  console.log("this is arrow fuction")
 }
 arrowFuction();


