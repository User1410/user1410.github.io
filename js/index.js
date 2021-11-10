const positions = {
    "p-16": [0, 150],
    "p-24": [150, 300],
   "p-5": [300, 450],
    "p-10": [450, 600],
    "p-23": [600, 750],
   "p-8": [750, 900],
    "p-30": [900, 1050],
    "p-11": [1050, 1200],
    "p-36": [1200, 1350],
    "p-13": [1350, 1500],
    "p-27": [1500, 1650],
   "p-6": [1650, 1800],
    "p-34": [1800, 1950],
    "p-17": [1950, 2100],
    "p-25": [2100, 2250],
   "p-2": [2250, 2400],
    "p-21": [2400, 2550],
   "p-4": [2550, 2700],
    "p-19": [2700, 2850],
    "p-15": [2850, 3000],
    "p-32": [3000, 3150],
   "p-0": [3150, 3300],
    "p-26": [3300, 3450],
   "p-3": [3450, 3600],
    "p-35": [3600, 3750],
    "p-12": [3750, 3900],
    "p-28": [3900, 4050],
   "p-7": [4050, 4200],
    "p-29": [4200, 4350],
    "p-18": [4350, 4500],
    "p-22": [4500, 4650],
   "p-9": [4650, 4800],
    "p-31": [4800, 4950],
    "p-14": [4950, 5100],
    "p-20": [5100, 5250],
   "p-1": [5250, 5400],
    "p-33": [5400, 5550]
}

let start = 0;
let end = 100;

// if (window.innerWidth <= 900) {
//     for (let number in positions) {
//         console.log(`start: ${start} num: ${number}`);
//         console.log(`end: ${end} num: ${number}`);
//         positions[number][0] = start;
//         positions[number][1] = end;
//         start = end;
//         end += 100;
//     }
// }

console.log(positions["p-33"][1] + " cia va ilgis");


const colors = {
    "green": [0],
    "red": [5, 16, 1, 14, 9, 18, 7, 12, 3, 32, 19, 21, 25, 34, 27, 36, 30, 23],
    "black": [24, 33, 20, 31, 22, 29, 28, 35, 26, 15, 4, 2, 17, 6, 13, 11, 8, 10]
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min  + 1) + min);
}

function calc(sum) {
    let naturalSum = 0;
    
    for (var iter = 1; naturalSum < sum; iter++) {
        naturalSum += iter;
    }
    
    if (naturalSum > sum) {
      return (iter - 2);
    }
    return (iter-1);
}

const roulette = document.querySelector(".roulette");
const indicatorSize = 4;
let backgroundPos = positions["p-33"][1] * 2;

const luckyNumber = random(0,36);
const luckyNumPos = positions["p-" + luckyNumber];
const stopAt = random(luckyNumPos[0] + indicatorSize, luckyNumPos[1] - indicatorSize);

let timer = 50;
const distance = backgroundPos - stopAt;
let slowDownFrom = calc(distance);
const slowDownRemider = (slowDownFrom + 1)/2;

console.log(luckyNumber);
console.log(distance);

if (slowDownFrom*slowDownRemider < distance) {
    backgroundPos -= (distance - slowDownFrom * slowDownRemider);
}

let intervalId = setInterval(function() {
    roulette.style.backgroundPosition = backgroundPos.toString() + "px";
    
    
    backgroundPos -= slowDownFrom;
    --slowDownFrom;
    if (backgroundPos === stopAt) {
        document.getElementById("luckyNum").textContent = luckyNumber;
        clearInterval(intervalId);
    }

}, timer)
