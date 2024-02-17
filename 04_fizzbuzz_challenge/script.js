// For Loop

// Solution - 1
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i + " FizzBuzz");
//     continue;
//   }
//   if (i % 3 == 0) {
//     console.log(i + " Fizz");
//   }
//   if (i % 5 == 0) {
//     console.log(i + " Buzz");
//   }
// }

// Solution - 2
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// While Loop

let i = 1;

while (i <= 100) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}
