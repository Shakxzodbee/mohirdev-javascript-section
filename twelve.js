function nechtaSoniBor(n, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            count++;
        }
    }
    return count;
}
let massiv = [1, 2, 3, 4, 1, 2, 1, 2];
let n = 1;

console.log(nechtaSoniBor(n, massiv));