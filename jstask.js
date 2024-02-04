var date;
var month;
var year;

function DOB(date,month,year)
{
  this.date=date;
  this.month=month;
  this.year=year;
}DOB(15,"dec",2000)
console.log("date:", date)
console.log("month:", month)
console.log("year:", year)

var name;
var age;
function Detail(name,age)
{
  this.name=name;
  this.age=age;
}Detail("Prathibha",23)
console.log("name:",name)
console.log("age:", age)

var elementOfArray=[9,8,6,4,7,5]
console.log(elementOfArray)
for(let i=0;i<elementOfArray.length;i++)  //print array elements
{
  console.log(elementOfArray[i])
}

var arrayEle=[3,8,5,2,9,0]
console.log(arrayEle)
for(let i=0;i<arrayEle.length;i++)  //print array elements
{
  console.log(arrayEle[i])
}

elementOfArray[1]=3   //change array of [1] 8 to 3
console.log(elementOfArray)

arrayEle[1]=1
console.log(arrayEle)


var index = elementOfArray.push(40) //add element at last
console.log(index) //returns position 
console.log(elementOfArray)

var index1 = arrayEle.push(80) 
console.log(index1)  
console.log(arrayEle)

var ele = elementOfArray.pop() //delect last element
console.log(ele) //returns position
console.log(elementOfArray)

var ele1 = arrayEle.pop() 
console.log(ele1) 
console.log(arrayEle)

elementOfArray.unshift(60) //add element at first
console.log(elementOfArray)

arrayEle.unshift(88) 
console.log(arrayEle)

elementOfArray.shift()    //delect first element
console.log(elementOfArray)

arrayEle.shift()    
console.log(arrayEle)

var arr=[1,2,3,4,5,6,7,8]
console.log(arr)

var newArr=arr.slice(1,6) //print start index to end index -1
console.log(newArr)

var delectedele= newArr.pop(); //delete last element
console.log(newArr);

console.log(newArr.shift());  //delete 1st element
console.log(newArr)

var number=[4,1,7,5,3,8];
console.log(number)

number.splice(1,3,8,6,9); //index 1 to 3 delete and add 8,6 and 9  // o/p 4,8,6,9,3,8
console.log(number);

function arithmetic(a,b)
{
  var sum=a+b;
  return sum;
}
var number=arithmetic(5,6);
console.log(number)

function arithmetic1(a,b)
{
  var sub=a-b;
  return sub;
}
var number=arithmetic1(30,4);
console.log(number)

function arithmetic2(a,b)
{
  var mul=a*b;
  return mul;
}
var number=arithmetic2(8,9);
console.log(number)

function arithmetic4(a,b)
{
  var div=a/b;
  return div;
}
var number=arithmetic4(16,2);
console.log(number)


















