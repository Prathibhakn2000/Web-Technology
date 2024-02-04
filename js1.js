
var city;    //outside the function called global variables
var state;


function location1(city,state)
{
 console.log("running location function")  //inside the functions called local variables
  //console.log("city is :",city );
  //console.log("state is:",state );

 this.city=city;
  this.state=state;
}
location1("Bengalure","Karnataka");
console.log("city is :",city );
console.log("state is:",state );

var nameOfTheArray=[1,2,3,4,5,6]
console.log(nameOfTheArray)
for(let i=0; i < nameOfTheArray.length; i++)
{
  console.log(nameOfTheArray[i]);
}
nameOfTheArray[1]=30;
console.log(nameOfTheArray);
var index = nameOfTheArray.push(60);  //add element at last
console.log(index);
console.log(nameOfTheArray);
var element=nameOfTheArray.pop(60);   //remove element at last or specified
console.log(element);
console.log(nameOfTheArray);
nameOfTheArray.unshift(40);    //add element at first
console.log(nameOfTheArray);
console.log(nameOfTheArray.shift(40)); //remove element
console.log(nameOfTheArray);
console.log(nameOfTheArray.shift(6)); //remove element
console.log(nameOfTheArray);

var array=[2,3,4,5,6];
console.log(array);
var newArray=array.slice(0,6)
console.log(newArray);
var delectedele= newArray.pop();
console.log(newArray);
console.log(newArray.shift())
console.log(newArray)

var numbers=[10,30,50,60,3,4];
console.log(numbers)
numbers.splice(1,3,80,5);
console.log(numbers);


function arithmetic(a,b)
{
  var sum=a+b;
  return sum;
}
var sumofNumbers=arithmetic(5,6);
console.log(sumofNumbers)


//execute all arry operation 2 examples