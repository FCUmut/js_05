let i = 0;

while (i <= 20) {
  console.log("Number " + i);
  i++;
}

// Common rule for using either a while or a for loop is:
// use the for loop when you know the number of times you want to loop to run and use the while loop when the number of times the loop will run is unknown

//------------------

// this will pass 20 to 21 because "do" will run the code even when condition is not met for i and then it will stop repeating after 'while' can not match the condition
do {
  console.log("Number " + i);
  i++;
} while (i <= 20);
