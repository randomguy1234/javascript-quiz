//array of quiz questions
var questionBank= ["What key word do you use to declare a variable?", 
"How do you manipulate a html element using only JavaScript?",
"What will be printed to the console with the code: var x=3; if (x === '3') console.log('x is 3')?", 
"Which of the following are correct data types of JavaScript?",
"How do you make sure a button does whatever you want it to do?",
"What is a function?",
"Can you change the css properties of a html element using JavaScript?"];

//multiple choice answers bank array
var mCABank= 
[
    ["keyword", "variable", "store-thingy", "var"],
    ["just do it", "use querySelector and select the html class/id", "htmlElement = ...", "you can't change it at all"],
    ["nothing", "x === 3", "x is 3", "hello human"],
    ["number, boolean, string, null", "int, boolean, string, undefined", "object, text, empty", "big, small, tall, short"],
    ["it just does whatever it does", "click the button and see what happens", "make a wish on a star", "make an event listener for the button"],
    ["it is a social outing", "it is a method", "it is a math equation", "it is something dependent on factor(s)"],
    ["yes", "no", "maybe", "i don't know"]
];

//array of correct answers
var correctAnswers= ["var", "use querySelector and select the html class/id", "x is 3", "number, boolean, string, null",
 "make an event listener for the button", "it is a method", "yes"];

//variables for array index
var i= 0;
var j= 0;

//variable for score
var score= 0;


//variable for storing the highest score
var highScore= document.querySelector(".topScore");

//variable for showing the questions
var mainHeader= document.querySelector(".header");

//variable for the subtitle under the header
var subtitle= document.querySelector(".subtitle");

//variable start quiz button
var startButton= document.querySelector(".btn-start");

//variable for script tag in html
var link= document.querySelector(".linker");

//variable to store the initial page setup
var mainPage= document.querySelector(".main");

var backUpPage= mainPage;

var choice1= document.createElement("button");
var choice2= document.createElement("button");
var choice3= document.createElement("button");
var choice4= document.createElement("button");

//create div to center new buttons
var container= document.createElement("div");
    container.style.display= "flex";
    container.style.flexWrap= "wrap";
    container.style.justifyContent= "center";
    mainPage.appendChild(container);


//start the quiz
var askQuestion= function(){
    
    if (i !== questionBank.length)
    {
    //start the setup by removing unnecessary elements from the page
    highScore.remove();
    subtitle.remove();
    startButton.remove();
    
    //change header into question
    mainHeader.textContent= questionBank[i];
    
    
    //create buttons for multiple choice
    //var choice1= document.createElement("button");
    choice1.className= "option-1";
    choice1.style.fontSize= "30px";
    choice1.textContent= mCABank[i][0];
    container.appendChild(choice1);
    //console.log(mCABank[i][0]);

    
    choice2.className= "option-2";
    choice2.style.fontSize= "30px";
    choice2.textContent= mCABank[i][1];
    container.appendChild(choice2);
    //console.log(mCABank[i][1]);

    
    choice3.className= "option-3";
    choice3.style.fontSize= "30px";
    choice3.textContent= mCABank[i][2];
    container.appendChild(choice3);
    //console.log(mCABank[i][2]);

    
    choice4.className= "option-4";
    choice4.style.fontSize= "30px";
    choice4.textContent= mCABank[i][3];
    container.appendChild(choice4);
    //console.log(mCABank[i][3]);


    //answer question and check if correct, needs revision
    choice1.addEventListener("click",  function(){checkAnswer(choice1)});
    choice2.addEventListener("click",  function(){checkAnswer(choice2)});
    choice3.addEventListener("click",  function(){checkAnswer(choice3)});
    choice4.addEventListener("click",  function(){checkAnswer(choice4)});
    

    
    }
};

//function to check if answer is correct, needs revision
var checkAnswer= function(option){
    if(option === correctAnswers[i])
    {
        //increase score
        score += 7;
        console.log("correct answer");

    }
    else
    {
    //reduce time here
    console.log("wrong answer");
    }
    
    //ask next question
    container.removeChild(choice1);
    container.removeChild(choice2);
    container.removeChild(choice3);
    container.removeChild(choice4);
    i++;
    console.log(i);
    askQuestion();
};


startButton.addEventListener("click", askQuestion);