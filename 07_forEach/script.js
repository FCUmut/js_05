// loops take function as argument and this is called callback function, in that callback function we can pass in variable for each element for an array but for each just loops through and doesnt return anything

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// console.log(socials.__proto__); // with proto you can see any properties and forEach is one of the high order array methods

// Normal Version
// socials.forEach(function (item) {
//   console.log(item);
// });

// Shorther Version
// socials.forEach((item) => console.log(item));

// Another Version
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);
