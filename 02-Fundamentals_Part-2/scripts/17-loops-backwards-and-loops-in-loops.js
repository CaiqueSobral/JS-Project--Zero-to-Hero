"use strict";

const caique = [
  "Caique",
  "Sobral",
  2022 - 2001,
  "Programmer",
  ["Japa", "Kaue", "Marcos"],
];

for (let i = caique.length - 1; i >= 0; i--) {
  console.log(caique[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`-------- Exercise ${exercise}, repetition ${rep}`);
  }
}
