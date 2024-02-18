// Loop Over Arrays

const items = ["book", "table", "chair", "kite"];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// you can use 'let' too
// for (const item of items) {
//   console.log(item);
// }

const users = [{ name: "Furkan" }, { name: "Joe" }, { name: "Steve" }];

for (const user of users) {
  console.log(user.name);
}

// Loop Over Strings
const str = "Hello World";

for (const letter of str) {
  console.log(letter);
}

// Loop Over Maps
const map = new Map();

map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}
