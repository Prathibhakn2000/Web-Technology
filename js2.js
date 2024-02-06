let ref=[20,50,60,80,90];
//20*10,50*10,60*10,80*10,90*10
let updatedArray = ref.map(function(elements) 
{
  return elements*10;
})
console.log(updatedArray);

let ref1=[20,50,60,80,90];
//20*10,50*10,60*10,80*10,90*10
let updatedArray1 = ref.map((elements)=>
{
  return elements*10;
})
console.log(updatedArray1);



let arrowFunction=()=>
{
  alert("this a arrow function");
}
arrowFunction();

//filter
console.log(ref);
let filteredElements= ref.filter(function (element)
{
  var output= element>20;       //print greaterthan 20
  return output;
})
console.log(filteredElements)

console.log(ref);
let filteredElements1 = ref.filter((element)=>
{
  var output= element<90;      //print lessthan 90 
  return output;
})
console.log(filteredElements1)

//reducefunction
console.log(filteredElements);
var reduce1=ref.reduce(function(curr,acc){   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce1)

console.log(filteredElements);
var reduce1=ref.reduce((curr,acc)=>{   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce1)

console.log(ref)
var slice=ref.slice(2)   //starting index 2 upto last index
console.log(slice)
console.log(ref.slice(1,3))

var splice=ref.splice();
console.log(splice)



//create 5array each you have apply higher order function
//create form html fname,lname,gender,add,ph no,password ,submit,clear