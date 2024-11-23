function sayWelcome(userName, currentDay) {
  return;
  "Hello, " + userName + "! Have a nice day " + currentDay + "!";
}

//const result = sayWelcome("Andrey", "Monday");
//console.log(result);

//console.log(sayWelcome('Andrey', 'Monday'));

const personName = "Denis";
const day = "Monday";
const result = sayWelcome(personName, day);
console.log(result);

function multi(a, b) {
  if (a > b) {
    return (a + b) * 2;
  }
  if (a < b) {
    return (a + b) * 3;
  }
  if (!b) {
    return console.log("error");
  }
}
console.log(multi(3, 2));
console.log(multi(2, 3));
multi(3);

function min(first, second) {
  let min;
  if (first < second) {
    min = first;
  } else {
    min = second;
  }
  return min;
}

console.log(min(100, 40));
console.log(min(30, 50));
