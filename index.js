var readlineSync = require('readline-sync');
var score = 0

var welcome = readlineSync.question("Hey! What's your name? ")
console.log("Welcome to the quiz " + welcome);
console.log("Let's play a short quiz on Aish Lohiya")
function play(question, answer){
  var quiz = readlineSync.question(question) 
    if (quiz === answer) {
      console.log("You are right")
      score = score + 1
    } else { 
      console.log("You are wrong")
      score = score - 1
    }
  console.log("Your score is: " + score);
}

var questions = [
  {
    question: "Which school did aish study in? ",
    answer: "vidhyashram international school"
  },
  {
    question: "Is aish a foodie? ",
    answer: "yes"
  },
  {
    question: "Which sport aish likes the most? ",
    answer: "badminton"
  },
  {
    question: "Has aish lived in Mumbai? ",
    answer: "yes"
  },
  {
    question: "Which month is the birthday of aish? ",
    answer: "february"
  }
]

for (var i=0; i<questions.length; i++){
  var quizQuestions = (questions[i])
  play (quizQuestions.question, quizQuestions.answer)
}
console.log("-----------");
console.log("If you think yours is the highest score, ping me")
console.log("High score is ");
console.log("Romit: 3");
console.log("Kabir: 2");
