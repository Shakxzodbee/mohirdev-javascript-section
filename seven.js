let a = +prompt('sonni kiriting'); 

let yigindi = 0;
for (let i = 1; i < a; i++) {
  if (a % i === 0) {
    yigindi += i;
  }
}

let natija = yigindi === a;

console.log(natija);