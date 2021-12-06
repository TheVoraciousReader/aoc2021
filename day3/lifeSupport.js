const fs = require('fs');
const bin = fs.readFileSync('input.txt', 'utf-8').split('\n').map(l => l.trim());

//part 2

function ratingValue(arr, pos, value) {
    const zero = [];
    const one = [];

    arr.forEach(elem => {
        elem[pos] == 0 ? zero.push(elem) : one.push(elem);
    });

    if (arr.length === 1) {
        return arr[0];
    } else {
        if (value === 0) {
            return ratingValue(zero.length <= one.length ? zero : one, pos + 1, value);
        }
        if (value === 1) {
            return ratingValue(zero.length <= one.length ? one : zero, pos + 1, value);
        }
    }
}

console.time('life support');
const oxygen = ratingValue(bin, 0, 0);
const co2 = ratingValue(bin, 0, 1);
const lifeSupport = parseInt(oxygen, 2) * parseInt(co2, 2);

console.timeEnd('life support');
console.log(lifeSupport);