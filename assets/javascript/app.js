$(document).ready(function() {

var questions = 
{
zero: 
{
question: "Who is Naruto's Rival?",
answers: ["Minato", "Rock Lee", "Sasuke", "Sakura"],
correct: "Sasuke"
},

one: 
{
question: "What is the first Pokemon Ash caught?",
answers: ["Pikachu", "Charmander", "Caterpie", "Bulbasaur"],
correct: "Caterpie"
},
    
    
three: 
{
question: "What's Goku's wife's name?",
answers: ["Cha Chi", "Chi Chi", "Cho Cha", "Chi Cha"],
correct: "Chi Chi"
},
    
four: 
{
question: "Who is the god of all Pokemon?",
answers: ["Jirachi", "Arceus", "Mew", "Celebi"],
correct: "Arceus"
},
    
five: 
{
question: "Whom did Kakashi get his eye from?",
answers: ["Madara", "Obito", "Sage of Six Paths", "Sauske"],
correct: "Obito"
},
    
six: 
{
question: "What jutsu is Naruto most proficient in?",
answers: ["Shadow Clone", "Rasengan", "Taijutsu ", "Transformation"],
correct: "Shadow Clone"
},
    
seven:
{
question: "Where is Goku when he transforms into a Super Saiyan for the first time?",
answers: ["Planet Vegeta", "Earth", "Planet Namek", "King Kai's Planet"],
correct: "Planet Namek"
},
    
eight: 
{
question: "What are the three types of starter Pokemon?",
answers: ["Psychic, Fighting and Ghost", "Dragon, Flying and Normal", "Grass, Fire and Water", "Electric, Ground and Posion"],
correct: "Grass, Fire and Water"
},
    
nine:
{
question: "Who does Cell absorb in order to achieve his second transformation?",
answers: ["Andriod 16", "Andriod 17", "Andriod 18", "Andriod 19"],
correct: "Andriod 18"
},
    
ten: 
{
question: "When Frieza is in his second form, what's his power level?",
answers: ["1,000,000", "1,500,000", "500,000", "100,000"],
correct: "1,000,000"
},
};
    
var rightDiv = $("<div class='rightAns'></div>");
var timerDiv = $("<div class='countdown'><h3></h3></div>");
var questionDiv = $("<div class='question'><h3></h3></div>");
var answerDiv = $("<div class='answers'></div>");
    
var keys = Object.keys(questions);
var key = keys[n];
var time = 30;
var n = 0;
    
function setup() 
{
$(".start").css("display", "none");
    
var correct = 0;
var incorrect = 0;
var timeout = 0;
n = 0;
key = keys[n];
    
var reset = function() 
{
time = 30;
$(".rightAns").empty();
$(".rightAns").remove();
$(".main").append(timerDiv);
$(".countdown h3").html("TIME REMAINING: " + time);
$(".main").append(questionDiv);
$(".main").append(answerDiv);
}
    
reset();
    
function showQA() {
$(".question h3").html(questions[key].question);
            
for (var i = 0; i < questions[key].answers.length; i++) 
{
$(".answers").append("<p class='answer'>" + questions[key].answers[i] + "<p>");
}
                
$(".answers p").on("click", function() {
var selected = $(this).text();
    
if (selected === questions[key].correct) 
{
clearInterval(counter);
$(timerDiv).remove();
$(questionDiv).remove();
$(".answers p").remove();
$(answerDiv).remove();
$(".main").append(rightDiv);
$(".rightAns").text("YOU'RE SO SMART!");
correct++;
} 

else 
{
clearInterval(counter);
$(timerDiv).remove();
$(questionDiv).remove();
$(".answers p").remove();
$(answerDiv).remove();
$(".main").append(rightDiv);
$(".rightAns").text("CONGRATULATIONS! YOU JUST PLAYED YOURSELF! Correct Answer: " + questions[key].correct);
incorrect++;
}

n++;
key = keys[n];
    
if (checkIfLast()) 
{
displayFinalScore();
}

else 
{
setTimeout(countReset, 3000);
setTimeout(reset, 3000);
setTimeout(showQA, 3000);
}
});
}
    
showQA();
    
var counter = setInterval(count, 1000);
    

function count() 
{
time--
$(".countdown h3").html("TIME REMAINING: " + time);
         
if (time < 1) {
clearInterval(counter);
$(timerDiv).remove();
$(questionDiv).remove();
$(".answers p").remove();
$(answerDiv).remove();
$(".main").append(rightDiv);
$(".rightAns").html("OUT OF TIME! THE CORRECT ANSWER WAS: " + questions[key].correct);
timeout++;
n++;
key = keys[n];
        
if (checkIfLast()) 
{
displayFinalScore();
}
else 
{
setTimeout(countReset, 3000);
setTimeout(reset, 3000);
setTimeout(showQA, 3000);
}
}
}

    
function checkIfLast() 
{
if (key === undefined) 
{
return true;
}
return false;
}
    

function countReset() 
{
counter = setInterval(count, 500);
}

function displayFinalScore() 

{
$(".rightAns").remove();
$(".start").css("margin-top", "30px");
$(".start").css("display", "inline");
$(".main").prepend("<h2>UNANSWERED: " + timeout + "</h2>");
$(".main").prepend("<h2>INCORRECT: " + incorrect + "</h2>");
$(".main").prepend("<h2>CORRECT: " + correct + "</h2>");
}
};
    
$(document).on("click", ".start", setup);
    
});