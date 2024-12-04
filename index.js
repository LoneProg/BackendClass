//Simple calculator using prompt-sync
// const promptSync = require("prompt-sync");

// const prompt = promptSync();

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return "Error: Division by zero";
//   }
//   return a / b;
// }

// function calculator() {
//   while (true) {
//     console.log("\nSimple Calculator");
//     console.log("1. Add");
//     console.log("2. Subtract");
//     console.log("3. Multiply");
//     console.log("4. Divide");
//     console.log("5. Exit");

//     const choice = prompt("Enter your choice (1-5): ");

//     if (choice === '5') {
//       console.log("Thank you for using the calculator. Goodbye!");
//       break;
//     }

//     if (!['1', '2', '3', '4'].includes(choice)) {
//       console.log("Invalid choice. Please try again.");
//       continue;
//     }

//     const num1 = parseFloat(prompt("Enter the first number: "));
//     const num2 = parseFloat(prompt("Enter the second number: "));

//     let result;
//     switch (choice) {
//       case '1':
//         result = add(num1, num2);
//         console.log(`Result: ${num1} + ${num2} = ${result}`);
//         break;
//       case '2':
//         result = subtract(num1, num2);
//         console.log(`Result: ${num1} - ${num2} = ${result}`);
//         break;
//       case '3':
//         result = multiply(num1, num2);
//         console.log(`Result: ${num1} * ${num2} = ${result}`);
//         break;
//       case '4':
//         result = divide(num1, num2);
//         console.log(`Result: ${num1} / ${num2} = ${result}`);
//         break;
//       }
//     }
//   }


// calculator();

// math methods
// var num = 20;
// console.log(Math.sqrt(num));
// console.log(Math.sin(20));
// console.log(Math.round(Math.sqrt(num)));
// console.log(Math.floor(Math.sqrt(num)));
// console.log(Math.cbrt(num));
// console.log(Math.fround(Math.sqrt(num)));
// console.log(Math.max(12,num));
// console.log(Math.min(12,num));
// console.log(Math.cos(num));
// console.log(Math.tan(num));
// console.log(Math.hypot(num,20));
// console.log(Math.hypot(num,20) * Math.hypot(num,20));
// console.log(Math.abs(0.9999));
// console.log(Math.ceil(0.63653));

// function Timer() {
//   console.log("Hi,Its 5secs already");
// }
// console.log(__dirname + "" + __filename);
// setTimeout(Timer, 5000);

// var time = 0;
// function sayHello() {
//   time = time + 1
//   var remain = 10 - time;
//   console.log(remain + " seconds remaining");
//   if (time>=10) {
//     clearInterval(timer)
//   }  
// }
// var timer = setInterval(sayHello, 1000);

// const sum = require("./app.js");

// console.log(sum(2,4));

               //FILESYSTEM

const { error } = require("node:console");
const fs = require("node:fs");
console.log('first');

const checkedFile =  fs.readFileSync('./test.txt', 'utf-8');

console.log(checkedFile);
console.log('second');


//async reading

const asyncfile = fs.readFile('./test.txt','utf-8', (error, data) => {
    if (error) {
        console.log(error);
                
    }else{
        console.log(data);
        
    }
})

console.log('third');

fs.writeFileSync('./test.txt','hello world');

console.log('File created');

// const fileasync = fs.appendFile('./example.txt', " another text overwritten", (error,data) => {
//     if (error) {
//         console.log(err);
        
//     } else {
//         console.log('newfile created');
        
//     }
// })
// const deletefile = fs.unlink('./example.txt', (err)=>{
//     if (error) {
//         console.log(err + 'failed');
        
//     } else {
//         console.log('successfully deleted');
        
//     }
// })

const currentName = 'file.txt'
const newname = 'test.txt'

fs.rename(currentName, newname, (err) => {
    if(error){
        console.log(`failed: ${error}`);
    }else{
        console.log("Successfully renamed");
    }
})
