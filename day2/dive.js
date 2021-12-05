const fs = require('fs');
const cmd = fs.readFileSync('input.txt', 'utf8').split('\n');

var horizontal = 0;
var depth = 0;
var aim = 0;

function readCommands() {
    var reg = /\d+/g;
    var reg2 = /[a-zA-z]/g;
    for (const i in cmd) {
        var num = parseInt(cmd[i].match(reg));
        var dir = (cmd[i].match(reg2)).join('');

        if (dir === 'forward') {
            horizontal += num;
            depth += (aim * num); //part 2
        } else if (dir === 'down') {
            aim += num; //part1 - depth += num;
        } else if (dir === 'up') {
            aim -= num; //part1 - depth -= num;
        } else {
            console.log('Invalid command');
        }
    }

    console.log(depth * horizontal);
}

console.time('dive');
readCommands();
console.timeEnd('dive');