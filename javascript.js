//HighOrder Functions:Function that takes function as argument
function add(a,b){
    res = a+b;
    return res;
}
console.log(add(7,3))


const r =[1,2,3];


// //Area
// function calculateArea(radius){
//     const result = [];
//     for(let i = 0;i< radius.length;i++){                                                                                        //         result.push(Math.PI * radius[i] * radius[i])
//     }
//     return result;
// }
// console.log(calculateArea(radius))

// // Diameter
// const calculateDiameter =function (radius){
//     const res = [];
//     for (let i = 0; i<radius.length; i++){
//         res.push(2*radius[i])
//     }
//     return res;
// }
// // console.log(calculateDiameter(radius))

//Area logic
const area = function (r){
    return Math.PI* r*r
}

//Diameter logic
const diameter = function(r){
    return 2*r;
}

//circumfrance
const  circumfrance = function(r){
    return 2* Math.PI*r;
}

function calculate (r,logic){
 const result =[];
 for (let i= 0; i<r.length;i++){
    result.push(logic(r[i]))
    }
    return result
}

console.log(calculate(r,area));
console.log(calculate(r,diameter));
console.log(calculate(r,circumfrance));

//When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.
//When working with objects, you can use the Object.entries() function to create a new array from an object.
//When working with functions, you can use the compose() function to create complex functions from simpler ones

const test = function (){
    console.log('Hello')
}

const test2 = function (trial){
trial()
trial()
trial() 
trial()
trial()
}
test2(test)


function adds(a,b,cb){ //high order function
    let sum = a+b;
    cb(sum);

    return () => console.log(sum);
}

function showRes(sum){ //callback function
    console.log(sum);
}

adds(7,3, showRes); // this is one form
adds(7,4, (sum) => console.log(sum)) //this is another form using arrow function


//Closures: A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
let resFunc = adds(6,6,()=>{}) // this will return a function
resFunc();


Arrays 

const  students =['Pratik','Sanket','Ankush','Rohit'];

students.push('Ajay'); // adds element at last
console.log(students + ' '+ students.length );
students.pop() // removes last element
console.log(students +' '+ students.length );
students.push('Ajay');
console.log(students + students.length );


myArr = [true, 'Test', 55] // mixed array
console.log(myArr);
myArr.push({state:'KA', Contact: 9988776655}) // adding object to array
console.log(myArr.indexOf(true)); // gives index of element
console.log(myArr.includes(56)); // checks if element is present or not
console.log(myArr.reverse()); // reverses the array
