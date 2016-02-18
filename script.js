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

//  TREE MAKING FUNCTION

var charString;
var space = " ";
var userHeight2;  
var charUp; 
var finalTree = function(myTree) {
  userHeight2 = tree.height - 1;  //<-- Amount of spaces to add in first line
  charUp = 1; //<-- Amount of times to repeat the charString in the first line
  for (i = 0; i < tree.height; i++) {
    console.log(space.repeat(userHeight2) + tree.char.repeat(charUp)); // 1st Line
    userHeight2--; // <-- Decrements the spaces by one each iteration
    charUp = charUp + 2; // <-- Increments the characterts by two each iteration
  }
}


