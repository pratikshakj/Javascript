//Numbers
let num = 13
let num1 = 3
console.log(num  + num1)
console.log(num  - num1)
console.log(num  * num1)
console.log(num  / num1)
console.log(num  ** num1)
console.log(num  % num1)
console.log(num && num1)
console.log(num || num1)
console.log(typeof(num1))
console.log('--------------------------------------------')

//Strings
let n1 = 'Prats'
const n2 = "Jadhav"
console.log(n1+n2)
console.log(n1-n2)
console.log(n1*n2) 
console.log(n1**n2)
console.log(n1%n2)
console.log(n1 || n2)
console.log(n1 && n2)
console.log(c ='1'+1)
console.log(typeof(c))
console.log(123 * '123') //--->typeof this is a number
console.log('--------------------------------------------')

//Boolean 1 | True & 0 | False
let isLogedIn = true;
let islogedOut = false;
console.log(isLogedIn )
console.log( isLogedIn + islogedOut)
console.log( isLogedIn -islogedOut)
console.log(isLogedIn * islogedOut)
console.log(isLogedIn **islogedOut )
console.log(isLogedIn % isLogedIn)
console.log(isLogedIn % islogedOut)
console.log(isLogedIn + islogedOut)
console.log(isLogedIn || islogedOut)
console.log(isLogedIn && islogedOut )
console.log(islogedOut || isLogedIn)
console.log(islogedOut &&isLogedIn )
console.log(isLogedIn || 5)
console.log(isLogedIn && 5 )
console.log(5 || islogedOut)
console.log(5 && islogedOut )
console.log('isLogedIn' || islogedOut)
console.log('isLogedIn' && islogedOut )
console.log(isLogedIn || 'islogedOut')
console.log(isLogedIn && 'islogedOut' )
console.log(typeof(isLogedIn))
console.log('--------------------------------------------')

//NULL
let lastLogin = null;
console.log(lastLogin + lastLogin);
console.log(lastLogin - lastLogin);
console.log(lastLogin * lastLogin);
console.log(lastLogin / lastLogin);
console.log(lastLogin ** lastLogin);
console.log(lastLogin && lastLogin);
console.log(lastLogin || lastLogin);
console.log(lastLogin + 'null');
console.log(typeof(lastLogin))
console.log('--------------------------------------------')

Undefine
let isLastLoginDate = undefined;
console.log(isLastLoginDate + isLastLoginDate)
console.log(isLastLoginDate - isLastLoginDate)
console.log(isLastLoginDate * isLastLoginDate)
console.log(isLastLoginDate ** isLastLoginDate)
console.log(isLastLoginDate / isLastLoginDate)
console.log(isLastLoginDate || isLastLoginDate)
console.log(isLastLoginDate && isLastLoginDate)
console.log(typeof(isLastLoginDate))
console.log('--------------------------------------------')

//Object
const person = {
  firstName: 'Pratiksha',
  lastName: 'Jadhav',
  age: 24,
  isLogedIn:false,
  isLastLoginDate:true,
}

console.log(person.firstName + person.lastName)

//Conditional statements
const age = 90;
 if(age >=80){
  console.log('yes u r adult and you can vote')
  } 
  else if(age >= 18){
    console.log('Yes you can vote');
  }
  else {
    console.log('No, You can not vote')
  }

 // Ternary Operator
age >= 18 ? console.log('Yes') : console.log('No') 

let result = age >= 18 ? 'Yes':'No'
console.log(result)

//switch Case

const opt = 6;
switch(opt){
  case 1:{
    console.log('Nameste')
  }
  break;
  case 2:{
    console.log('Hola')
  }
  break;
  case 3:{
    console.log('Bonjur')
  }
  break;
  default:
    console.log('Hello Invalid OPT')
}

let a = 40; let b = 30;
let opts = '*';

switch(opts){
  case '+': console.log(a + b);
  break;
  case '-': console.log(a - b);
  break;
  case '*': console.log(a * b);
  break;
  case '/': console.log(a / b);
  break;
  default:console.log('IDK')
}

// Logical Operators
const age =20;
const gender ='Male'

if(age >=18 && gender == 'Male'){
  console.log('you are adult')
}

if(age >=18 || gender == 'Male'){
  console.log('you are adult')
}

const num = 16;

if(!(num % 2 == 0 )){
  console.log('odd')
}

//Loops 
//FOR ex print my name 15 times
for (let i = 1 ; i<=15; i++){
  console.log(i + ' Pratiksha')
}
//While don't know how many time I need to loop
let ip = 0;
let house = 25;

while(ip !=10){
    ip++;
  console.log('steps'+ ip)
}

//Do while
/* A game code to understand DO while
Guess the input*/

let number = 40;
let guess =0;

do{
 guess = parseInt(prompt("Guess a number"));
  if(guess == number){
      alert('winner');
      break;
    }
}while(guess !=0)




//Function in JS
function sayHello(){ //<-- function Defination
  console.log('Hello Javascript')
}
sayHello() // <---callback function

function multiply(a,b){
  return a * b;
}
let result1 = multiply(7,5)
let result2 = multiply(9,10)
console.log(result1 , result2)


function addNumbers(){
  let ans = 0;
  for (let i = 0; i < arguments.length; i++){
    ans = ans + arguments[i]
  }
  return ans;
} 
let result = addNumbers(10,20,30,40,50,60,70,80,90,100)
console.log(result); // Output: 550

This also can be achived using spread Operator (...)
The spread operator (...) in JavaScript is a powerful and commonly used feature (introduced in ES6) that allows you to expand or unpack elements of an array, object, or iterable into individual elements.
function addNums1(...addNs){
  let r =0;
  for(let i = 0; i < addNs.length;i++){
    r = r + addNs[i] 
  }
  return r;
}
let result = addNums1(10,20,30,40,50,60,70,80,90,100)
console.log(result); // Output: 550

//Arrow Functions
// 	1. Syntax
const sayHello = ()=>{
  console.log('Hello')
}
sayHello();

// if we are passing { } then we need to add return keyword
const addNums = (a,b) =>{
  return a + b ;
}
console.log(addNums(5,5))

//This is single linere where we are omitting(not using) return keyword (oneLiner Function)
const addNumv1 = (a,b) => a+b; 
console.log(addNumv1(5,15))

	//2. 'arguments' Keyword : Im arrow function argument keyword doesn't work it will throw an error saying uncaught reference error 'arguments' is not defined
  const addNumsV1 = (...numsT)=>{
    let total = 0;
    for(let i = 0; i<numsT.length; i++){
      total = total+ numsT[i]
    }
    return total;
  }
 let totals = addNumsV1(2,4,6,8)
 console.log(totals)
  //will get reference error saying aruments not defined.
  //We can use spread operator approach

// 	3. Hoisting

const sayHello =() =>{ 
  console.log('Hello Javascript')
}
sayHello()


//  4. This Keyword
const obj ={
  value:20,
  myFunc : myFunc = ()=>{
    // console.log('The value is ' + this.value)
    console.log(this)
  },
}
obj.myFunc()
 

/*-------------------Practice Questions------------------------*/
/* 1. For a given array of marks of student fing the average marks of entire class
marks =[75,85,95,65,55,45]*/ 
let marks =[75,85,95,65,55,45];
let sum = 0;
for(let i =0; i < marks.length; i++){
    sum = sum + marks[i];
}
/*this for or below for can be used */
for(let val of marks){
    sum+= val
}
let avg = sum /marks.length
console.log(`${avg}`);


/*create a array of companies companies = ["Bloomberg","Microsoft","Netflix","Uber","Google","IBM"]
companies.shift();
1. remove 1st element from the array
2. remove uber and replace it with Ola
3. Add amazon at the end of array
*/
let companies = ["Bloomberg","Microsoft","Netflix","Uber","Google","IBM"]
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon")
console.log(companies)

let result =  data.forEach(el =>                                                                                                                                                                                                 
    {
        el.attributes.forEach(kv=>{
            if(obj[kv.userKey]){
                obj[kv.userKey] = `${obj[kv.userKey]}, ${kv.value}`;
            }else{
                obj[kv.userKey]=kv.value;
            }
         })
        })
console.log(obj)


 





