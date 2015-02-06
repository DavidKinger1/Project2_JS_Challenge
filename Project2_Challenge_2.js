// array of astronaught names
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

// Recieves an array and revearses lastname and firstname and sorts results
function alphabetizer(names) {
  var firstName, lastName, tempSwitch, sortNames = [], i;

  for (i = 0; i < names.length; i++) {
    tempSwitch = names[i].split(" ");
    lastName = tempSwitch[1];
    firstName = tempSwitch[0];
    sortNames[i] = lastName + ", " + firstName;
  }

// sort the array by last name
  sortNames.sort();
  return sortNames;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));