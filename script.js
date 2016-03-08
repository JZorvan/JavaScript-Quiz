//FINAL VERSION

// GETTING READY FOR THE TREE

// Declare some empty variables to use in my click and tree functions
var userChar;
var userHeight;
var tree;
var space = " ";
var userHeight2;  
var charUp; 

// Assign the button - get from DOM
var button = document.getElementById("button");

// Button Click Function
button.addEventListener("click", function(event) {

  // Gets the user's character and assigns to variable
  userChar = document.getElementById("userChar").value;

  // Checks to see if the Character Field is blank and returns an alert
  if (userChar === "") {
    alert("Please enter a desired character for your tree.");
  }  
  
  // Gets the user's height and assigns to variable after changing to a #
  userHeight = document.getElementById("userHeight").value;

  // Checks to see if the Height Field is blank and returns an alert
  if (userHeight === "") {
    alert("Please enter a desired height for your tree.")
  }

  //Turns the height string into a numeric value
  userHeight = parseInt(userHeight);

  // Assigns those variable to the object
  tree = {
  char: userChar,
  height: userHeight
  }
  
  // Calls Tree Function
  finalTree(tree)
});

//  TREE MAKING FUNCTION

var finalTree = function(userTree) {
  userHeight2 = userTree.height - 1;  //<-- Amount of spaces to add in first line
  charUp = 1; //<-- Amount of times to repeat the charString in the first line
  for (i = 0; i < userTree.height; i++) {
    console.log(space.repeat(userHeight2) + userTree.char.repeat(charUp)); // 1st Line
    userHeight2--; // <-- Decrements the spaces by one each iteration
    charUp = charUp + 2; // <-- Increments the characterts by two each iteration
  }
}


