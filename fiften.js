function topEngKattaIkkinchi(array) {
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            secondMax = max;
            max = array[i];
        } else if (array[i] > secondMax && array[i] < max) {
            secondMax = array[i];
        }
    }
    return secondMax;
}
let massiv = [5, 2, 9, 1, 7, 3];
let result = topEngKattaIkkinchi(massiv);
console.log(result);