const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8').split('\n');

var incr = 0;

function simpleMeasure() {
    for (const i in data) {
        if (parseInt(data[i]) > parseInt(data[i - 1])) {
            //console.log((i - 1) + " is less than " + i);
            incr++;
        }
    }

    console.log(incr);
}

var slide = 0;

function slidingWindow() {
    //(b + c + d) > (a + b + c) so d > a
    for (var i = 0; i <= data.length - 3; i++) {
        if (parseInt(data[i + 3]) > parseInt(data[i])) {
            slide++;
        }
    }

    console.log(slide);
}

console.time('part1');
simpleMeasure();
console.timeEnd('part1');
console.time('part2')
slidingWindow();
console.timeEnd('part2');