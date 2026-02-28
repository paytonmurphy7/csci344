//global variable to store the starting count of 0
let count = 0;

let counter = document.querySelector("#counter");
let incrementBtn = document.querySelector("#incrementBtn");
let decrementBtn = document.querySelector("#decrementBtn");
let resetBtn = document.querySelector("#resetBtn");

function increment() {
    count++;
    updateDisplay();
    console.log("Button clicked");
}


function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
    
}

function updateDisplay() {
    
    if (count > 0) {
        counter.style.color = '#4CAF50';
    } else if (count < 0) {
        counter.style.color = '#f44336';
    } else {
        counter.style.color = '#979797';
    } 

    counter.innerHTML = count;
}

updateDisplay();

// check if working within console log
// counter = 2
// incrementBtn = 5
// decrementBtn = 7
// resetBtn = 9
console.log(count, counter, incrementBtn, decrementBtn, resetBtn)
 
