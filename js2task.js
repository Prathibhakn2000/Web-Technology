let arr=[5,3,6,9,2,8,6];
var value=arr.map(function(element){
  return element*5;
});
console.log(value)

let arr1=[5,3,6,9,2,8,6];
var value1=arr.map((element)=>{
  return element*5;
});
console.log(value1)

let arrow=()=>
{
  alert("this a arrow function");
}
arrow();

//filter
console.log(arr);
let filteredValue= arr.filter(function (element)
{
  var output = element>2;       //print greaterthan 2
  return output;
})
console.log(filteredValue)

console.log(arr);
let filteredValue1= arr.filter(function (element)
{
  var output = element>2;       //print greaterthan 2
  return output;
})
console.log(filteredValue1)

//reducefunction
console.log(arr);
var reduce=arr.reduce(function(curr,acc){   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce)

console.log(filteredValue);
var reduce=arr.reduce((curr,acc)=>{   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce)

console.log(arr)
var slice=arr.slice(4)   //starting index 2 upto last index
console.log(slice)
console.log(arr.slice(3,5))

var splice=arr.splice();
console.log(splice)

//map
let array=[11,12,15,16,17,18]
let value2=array.map((ele)=>{
  return ele*2;
})
console.log(value2)

//filter
console.log(array);
let filteredVal= array.filter((element)=>
{
  var output = element>11;       
  return output;
})
console.log(filteredVal)

//reduceFunction
console.log(array);
var reduce=array.reduce((curr,acc)=>{   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce)


//map
let array1=[77,33,22,11,66,99]
let value3=array1.map((ele)=>{
  return ele*3;
})
console.log(value3)

//filter
console.log(array1);
let filteredVal1= array1.filter((element)=>
{
  var output = element>22;       
  return output;
})
console.log(filteredVal1)

//reduceFunction
console.log(array1);
var reduce=array1.reduce((curr,acc)=>{   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce)

//map
let array2=[9,6,5,4,8]
let value4=array2.map((ele)=>{
  return ele*3;
})
console.log(value4)

//filter
console.log(array2);
let filteredVal3= array2.filter((element)=>
{
  var output = element>5;       
  return output;
})
console.log(filteredVal3)

//reduceFunction
console.log(array2);
var reduce=array2.reduce((curr,acc)=>{   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce)

//map
let array3=[66,7,4,3,22]
let value5=array3.map((ele)=>{
  return ele*4;
})
console.log(value5)

//filter
console.log(array3);
let filteredVal4= array3.filter((element)=>
{
  var output = element>22;       
  return output;
})
console.log(filteredVal4)

//reduceFunction
console.log(array3);
var reduce=array3.reduce((curr,acc)=>{   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce)

//map
let array4=[2,9,6,4,3]
let value6=array4.map((ele)=>{
  return ele*4;
})
console.log(value6)

//filter
console.log(array4);
let filteredVal5= array4.filter((element)=>
{
  var output = element>3;       
  return output;
})
console.log(filteredVal5)

//reduceFunction
console.log(array4);
var reduce=array4.reduce((curr,acc)=>{   //curr=current value, acc=0 
var sum=curr+acc;
return sum;
});
console.log(reduce)