var readlineSync = require("readline-sync");

var score = 0; 

// input
var input = readlineSync.question("What is you name? ");

console.log("Welcome "+ input + " to the game!! \n");
console.log("I'll ask you 4 questions. Let's see how well you know Manoj :) \n");

function game(ques,ans)                   // function defintion
{
  var uAns = readlineSync.question(ques);

  if (ans.toUpperCase() === uAns.toUpperCase())   
  {
    console.log("right!");
    score+=1;    
    console.log("current score : " + score);
  }
  else{
    console.log("wrong!");
    console.log("current score : " + score);
  }
  console.log("-------------------")
}


// Calling function through ARRAY OF OBJECTS :

var arrayOfObjects = [ 
  // object1
  {
    question : "Where do I live? ",
    answer:"Mount Abu"
  } ,                   
  //object2
  {
    question : "Where do I work? ",
    answer : "Infosys"
  } ,
  //object3
  {
    question : "What is my favorite color? ",
    answer : "black"
  } ,
  //object4
  {
    question: "What is my birthday month? ",
    answer: "May"
  }
]                      // array declaration complete

// calling GAME function -- through FOR LOOP !

for (var j=0; j < arrayOfObjects.length ; j++)
{
  game(arrayOfObjects[j].question, arrayOfObjects[j].answer);        // fun call
}

console.log("YAY! You SCORED : " + score);

console.log("Check out the high scores below. If you want to be there, ping me and I'll update it. ")

console.log("Abhishek : 4 ");
console.log("Shreya : 3 ");