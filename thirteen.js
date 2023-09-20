function yigindisiTengaBolish(a, array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === a) {
                console.log(array[i], array[j]);
            }
        }
    }
}

// Test uchun massiv va a qiymatini beramiz
let massiv = [2, 4, 7, 5, 9, 3];
let a = 9;

// Natijani chiqaramiz
yigindisiTengaBolish(a, massiv);