const positions = {
    16: [0, 150],
    24: [150, 300],
    5: [300, 450],
    10: [450, 600],
    23: [600, 750],
    8: [750, 900],
    30: [900, 1050],
    11: [1050, 1200],
    36: [1200, 1350],
    13: [1350, 1500],
    27: [1500, 1650],
    6: [1650, 1800],
    34: [1800, 1950],
    17: [1950, 2100],
    25: [2100, 2250],
    2: [2250, 2400],
    21: [2400, 2550],
    4: [2550, 2700],
    19: [2700, 2850],
    15: [2850, 3000],
    32: [3000, 3150],
    0: [3150, 3300],
    26: [3300, 3450],
    3: [3450, 3600],
    35: [3600, 3750],
    12: [3750, 3900],
    28: [3900, 4050],
    7: [4050, 4200],
    29: [4200, 4350],
    18: [4350, 4500],
    22: [4500, 4650],
    9: [4650, 4800],
    31: [4800, 4950],
    14: [4950, 5100],
    20: [5100, 5250],
    1: [5250, 5400],
    33: [5400, 5550]
}

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
let backgroundPos = 11100;

const luckyNumber = random(0,36);
const pick = positions[luckyNumber];
const stopAt = random(pick[0] + indicatorSize, pick[1] - indicatorSize);

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
        clearInterval(intervalId);
    }

}, timer)
