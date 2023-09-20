let n = prompt('n sonni kiriting');
let n_str = String(n);
let isPalindrome = true;

for (let i = 0; i < Math.floor(n_str.length / 2); i++) {
  if (n_str[i] !== n_str[n_str.length - i - 1]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);