"use strict";

const friends = ["Kaue", "Marcos", "Japa"];

// ADD TO THE END OF THE ARRAY
friends.push("Kassino");
console.log(friends);

// ADD TO THE START OF THE ARRAY
friends.unshift("Ferdinando");
console.log(friends);

//REMOVE THE LAST ELEMENT OF THE ARRAY
friends.pop();
console.log(friends);

// REMOVE THE FIRST ELEMENT OF THE ARRAY
friends.shift();
console.log(friends);

console.log(friends.indexOf("Japa"));
console.log(friends.indexOf("Kassino")); // -1 COZ THERE'S NO KASSINO IN THE ARRAY

console.log(friends.includes("Japa")); // RETURN TRUE IF THE ELEMENT EXISTS
console.log(friends.includes("Kassino")); // RETURN FALSE IF THE ELEMENT DOES NOT EXISTS

if (friends.includes("Japa")) {
  console.log("You have a friend called Japa");
}
