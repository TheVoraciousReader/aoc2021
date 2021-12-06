const fs = require('fs');
const bin = fs.readFileSync('input.txt', 'utf-8').split('\n').map(l => l.trim());

//part 1
console.time('binary diagnostic');
const len = 12;
const c = new Array(bin.length);
c.fill(0, 0, c.length);

bin.forEach(elem => {
    elem.split('').forEach((bit, k) => {
        c[k] += parseInt(bit);
    });
});

const res = (c.map(count => { return (bin.length / 2) < count ? 1 : 0; })).splice(0, len); //if count > half, max

const gamma = parseInt(res.join(''), 2);
const epsilon = parseInt(res.map(x => x === 1 ? 0 : 1).join(''), 2); //flip bits
console.timeEnd('binary diagnostic');

console.log(gamma * epsilon);


