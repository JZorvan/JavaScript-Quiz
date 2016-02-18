// GETTING READY FOR THE TREE

// Declare some empty variables to use in my click function
var userChar;
var userHeight;
var tree;

// Assign the button - get from DOM
var button = document.getElementById("button");
console.log("button", button);

// Button Click Function
button.addEventListener("click", function(event) {
  console.log("I clicked.");
  // Gets the user's character and assigns to variable
  userChar = document.getElementById("userChar").value;
  console.log("userChar", userChar);
  // Gets the user's height and assigns to variable after changing to a #
  userHeight = document.getElementById("userHeight").value;
  userHeight = parseInt(userHeight);
  console.log("userHeight", userHeight);
  // Assigns those variable to the object
  tree = {
  char: userChar,
  height: userHeight
  }
  // Yay, good job it all works so far
  console.log("", tree);
  finalTree(tree)
});

//  CAUTION: CRIME SCENE - DO NOT CROSS

var treeString;
var space = " "

// n + (n - 1)

// var finalTree = function() {
// for (i = 0; i <= tree.height; i++) {
//   var stringHolder = tree.char.repeat(i) + tree.char.repeat(i) + "\n";
//   stringHolder = stringHolder.substr(1);

//   }
//   console.log(stringHolder);
// }

var finalTree = function(myTree) {
console.log("myTree", myTree);


