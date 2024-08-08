console.log("hello world");
let a = 5;
let b = 2;
console.log("sum is = ", a + b);

let pencil_price = 10;
let ereser_prince = 5;
// let output = "The total price is : "+(pencil_price + ereser_prince)+"Rupees"
let output = `The tota prince is : ${pencil_price + ereser_prince}rupess`;
console.log(output);
console.log("ankit pandey");
//Arthmetics Opretor
console.log("Arthmetics Opretor");
let x = 10;
let y = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Unary opretor
console.log("Unary Opretor");
console.log(x++);
console.log(++x);
console.log(--x);
console.log(x--);
// Assigment opretor
console.log("Assigment Opretor");
let r = 5;
let s = 6;
r = s;
console.log(r); // assine r = 6

// comparison opretor 
console.log("comperison opretor");
let age = 18;
console.log(age < 18);

console.log("some code before it ");
let ages = 22;
if (ages >= 24) {
    console.log("you can vote ");
}
else {
    console.log("you can't vote ");
}


console.log("some code after if ");


// Practice Question 
// create a traffic light system that show what to do based on color 

let color = "red";
if (color === "red") {
    console.log("stop");
}
else if (color === "yellow") {
    console.log("ready to go");
}
else {
    console.log("go...");
}
//practice question 
// create a system to calculate popcorn prices based on the size customer asked for

// if size 'XL' price is Rs 250

// if size 'L' price is Rs 200

// if size 'M' price is Rs 100

// if size 'S' price is Rs 50


let size = "XL";
if (size == "XL") {
    console.log("price is Rs 250");
}
else if (size == "L") {
    console.log("price is Rs 200");
}
else if (size == "M") {
    console.log("price is Rs 100");
}
else if (size == "S") {
    console.log("price is Rs 50");
}
// Practice Question 
// A " Good  String " is a string that starts woth the letter 'a' & has a length > 3 . write a program to find if sting is good or not 

let str = "ankit"
if(str[0] === 'a' && str.length > 3)
{
    console.log("it is a Good string");
}
else{
    console.log("it is not good string");
}
// practice Question 
//Use Switch Statement to print the day of the week using a number variable " day" with value 1 to 7
let day = 5;
switch(day)
{
    case 1: console.log("Mondey");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thusday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("Wrong input");
}
// alert("This is the simeple alert");

let firstname = prompt("Enter your first name");
let lastname = prompt("enter your last name ");
console.log("welcome  "firstname " "lastname "!");