const readlineSync = require("readline-sync");

let score = 0; 

// input
const input = readlineSync.question("What is your name? ");

console.log(`Welcome ${input} to the game!! \n`);
console.log(`I'll ask you 5 questions. Let's see how well you know Manoj :) \n`);

let game = (ques,ans) =>                    // arrow function 
{
  let uAns = readlineSync.question(ques);

  if (ans.toUpperCase() === uAns.toUpperCase())   
  {
    console.log(`right!`);
    score+=1;    
    console.log(`current score : ${score}`);
  }
  else{
    console.log(`wrong!`);
    console.log(`current score : ${score}`);
  }
  console.log(`-------------------`);
}


// Calling function through ARRAY OF OBJECTS :

const arrayOfObjects = [ 
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
  },
  //object5
  {
    question: "Which sport do I love most? ",
    answer: "Football"
  }
]                      // array declaration complete

// calling GAME function -- through FOR LOOP !

for (let j=0; j < arrayOfObjects.length ; j++)
{
  game(arrayOfObjects[j].question, arrayOfObjects[j].answer);        // fun call
}

console.log(`YAY! You SCORED : ${score}`);

console.log(`Check out the high scores below. If you want to be there, ping me and I'll update it. `);

console.log(`Abhishek : 4 `);
console.log(`Shreya : 3 `);