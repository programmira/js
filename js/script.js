"use strict";

let num = 20;

// function showFirstMessage (text, arg, num, fwef) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage ("Hello World");
// console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 5));
// console.log(calc(2, 3));
// console.log(calc(10, 6));


function ret() {
    let num = 40;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello!");
};

logger ();

const calc = (8, 9) => {
    console.log('1');
    return 8 + 9;
};