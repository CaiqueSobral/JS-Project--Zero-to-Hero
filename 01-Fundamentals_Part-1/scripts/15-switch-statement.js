const day = "friday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Do the javascript course");
    console.log("Go to coding setup");
    break;
  case "tuesday":
    console.log("Watch to theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write some code");
    break;
  case "friday":
    console.log("Watch some videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Do the javascript course");
  console.log("Go to coding setup");
} else if (day === "tuesday") {
  console.log("Watch to theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write some code");
} else if (day === "friday") {
  console.log("Watch some videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}
