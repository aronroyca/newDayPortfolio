// console.log("connected");
// let sum = (a, b) => a + b;

// console.log(sum(5, 4));

// let divBy3 = (x) => {
//   if (!(x % 3)) {
//     return x / 3;
//   } else {
//     return "Sorry this number is not divisible by three.";
//   }
// };

// console.log(divBy3(5));
// console.log(divBy3(6));

// let factor = (a, b, c) => {
//   let factors = [];
//   let i = 1;
//   console.log(Math.min(a, b, c));
//   while (i <= Math.min(a, b, c)) {
//     if (a % i === 0 && b % i === 0 && c % i === 0) {
//       factors.push(i);
//     }
//     i++;
//   }
//   return factors;
// };

// console.log(factor(5, 10, 15));
// console.log(factor(9, 27, 30));

let sum3 = (x, y) => {
  if (x === y) {
    return x * 3;
  } else {
    return x + y;
  }
};

console.log(sum3(2, 3));
console.log(sum3(3, 3));
