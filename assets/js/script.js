var startBtnEl = document.getElementById("button");
var questionsAreaEL = document.getElementById("question-wrapper");
var timerEl = document.getElementById("timer");
var dotContainerEl = document.getElementById("dot-wrapper");

var time = 120;
var score = 0;
var questionValue = 5;


// Set create array of questions
var questions = [
    {
        q: "Question 1: What is NOT a data type?",
        a1: {k: 1, s: "Bit"},
        a2: {k: 2, s: "String"},
        a3: {k: 3, s: "Boolean"},
        a4: {k: 4, s: "Integer"},
        answer: 1
    },
    {
        q: "Question 2: What is a type of loop?",
        a1: {k: 1, s: "Why"},
        a2: {k: 2, s: "Does"},
        a3: {k: 3, s: "For"},
        a4: {k: 4, s: "Where"},
        answer: 3
    },
    {
        q: "Question 3: What is NOT a programming Language",
        a1: {k: 1, s: "C#"},
        a2: {k: 2, s: "Rush"},
        a3: {k: 3, s: "Rust"},
        a4: {k: 4, s: "Javascript"},
        answer: 2
    },
    {
        q: "Question 4: A loop that never ends is called ______?",
        a1: {k: 1, s: "Hwile loop"},
        a2: {k: 2, s: "Recursive loop"},
        a3: {k: 3, s: "For loop"},
        a4: {k: 4, s: "Infinite loop"},
        answer: 4
    },
    {
        q: "Question 5: What is the correct way to declare a variable",
        a1: {k: 1, s: "var variableName = 1"},
        a2: {k: 2, s: "1 = variableName"},
        a3: {k: 3, s: "variableName: 1"},
        a4: {k: 4, s: "1/variableName"},
        answer: 1
    },
    {
        q: "Question 6: When there is a issue in the code there is a _____ in your code?",
        a1: {k: 1, s: "dog"},
        a2: {k: 2, s: "bird"},
        a3: {k: 3, s: "rat"},
        a4: {k: 4, s: "bug"},
        answer: 4
    },
    {
        q: "Question 7: What is it called to find and fix an error in your code?",
        a1: {k: 1, s: "Decoding"},
        a2: {k: 2, s: "Duffing"},
        a3: {k: 3, s: "Debugging"},
        a4: {k: 4, s: "Fixxering"},
        answer: 3
    },
    {
        q: "Question 8: What can store multiple points of data?",
        a1: {k: 1, s: "String"},
        a2: {k: 2, s: "Array"},
        a3: {k: 3, s: "Integer"},
        a4: {k: 4, s: "Boolean"},
        answer: 2
    },
    {
        q: "Question 9: What is used to style Web pages",
        a1: {k: 1, s: "CSS"},
        a2: {k: 2, s: "C#"},
        a3: {k: 3, s: "C++"},
        a4: {k: 4, s: "Javascript"},
        answer: 1
    },
    {
        q: "Question 10: To store information we have to create a _____?",
        a1: {k: 1, s: "RAM"},
        a2: {k: 2, s: "Mem"},
        a3: {k: 3, s: "Variable"},
        a4: {k: 4, s: "Data type"},
        answer: 3
    },

]

// check answer
function answerCheck (i){
    console.log(i+1);

    // create eventlistner
    if (i < questions.length ){
        var dot = document.getElementById(`d${i.toString()}`);
        dot.setAttribute("style","background-color: #e7e0e7")
        displayQuestion(i);
        var answer1 = document.getElementById("1");
        var answer2 = document.getElementById("2");
        var answer3 = document.getElementById("3");
        var answer4 = document.getElementById("4");
        answer1.addEventListener("click",function(){
            console.log("choice 1 selected");
            if(questions[i].answer === 1){
                console.log("correct");
                score += 5;
                i++;
                answerCheck(i);
            }else{
                console.log("incorrect");
                time -= 5;
                i++;
                answerCheck(i);
            }
        })
        answer2.addEventListener("click",function(){
            console.log("choice 2 selected");
            if(questions[i].answer === 2){
                console.log("correct");
                score += 5;
                i++;
                answerCheck(i);
            }else{
                console.log("incorrect");
                time -= 5;
                i++;
                answerCheck(i);
            }
        })
        answer3.addEventListener("click",function(){
            console.log("choice 3 selected");
            if(questions[i].answer === 3){
                console.log("correct");
                score += 5;
                i++;
                answerCheck(i);
            }else{
                console.log("incorrect");
                time -= 5;
                i++;
                answerCheck(i);
            }
        })
        answer4.addEventListener("click",function(){
            console.log("choice 4 selected");
            if(questions[i].answer === 4){
                console.log("correct");
                score += 5;
                i++;
                answerCheck(i);
            }else{
                console.log("incorrect");
                time -= 5;
                i++;
                answerCheck(i);
            }
        })
    }else{
        console.log("end of questions");
        dotContainerEl.innerHTML = "";
        timerEl.innerHTML = "0";
        time = 0;
    }
}

// TODO: display question
function displayQuestion (index){
    questionsAreaEL.innerHTML = "";

    var questionEl = document.createElement("h1")
    var questionOptionsEl = document.createElement("ul");
    var choice1El = document.createElement("li");
    var choice2El = document.createElement("li");
    var choice3El = document.createElement("li");
    var choice4El = document.createElement("li");
    choice1El.setAttribute("id","1");
    choice2El.setAttribute("id","2");
    choice3El.setAttribute("id","3");
    choice4El.setAttribute("id","4");

    questionEl.innerHTML = questions[index].q;
    choice1El.innerHTML = questions[index].a1.s;
    choice2El.innerHTML = questions[index].a2.s;
    choice3El.innerHTML = questions[index].a3.s;
    choice4El.innerHTML = questions[index].a4.s;

    questionsAreaEL.appendChild(questionEl)
    questionsAreaEL.appendChild(questionOptionsEl);
    questionOptionsEl.appendChild(choice1El);
    questionOptionsEl.appendChild(choice2El);
    questionOptionsEl.appendChild(choice3El);
    questionOptionsEl.appendChild(choice4El);
}

function displayScoreInput(score){
    questionsAreaEL.innerHTML = "";

    var scoreTitleEl = document.createElement("h1");
    var inputLableEl = document.createElement("label");
    var textInputEl = document.createElement("input");
    var scoreBtnEl = document.createElement("button");

    scoreTitleEl.innerHTML = "Score: " + score.toString();
    inputLableEl.innerHTML = "Enter your name";
    scoreBtnEl.innerHTML = "Submit";
    inputLableEl.setAttribute("for","score");
    textInputEl.setAttribute("type","text");
    textInputEl.setAttribute("id", "score");
    textInputEl.setAttribute("name","score");
    scoreBtnEl.setAttribute("class", "main")
    scoreBtnEl.setAttribute("id", "score-btn");

    questionsAreaEL.appendChild(scoreTitleEl);
    questionsAreaEL.appendChild(inputLableEl);
    questionsAreaEL.appendChild(textInputEl);
    questionsAreaEL.appendChild(scoreBtnEl);
}

function submitScore(){
    var jsonData = localStorage.getItem("localKey");
    var oldLocalData = JSON.parse(jsonData);
    console.log(oldLocalData);

    if(oldLocalData != null){
        console.log("local data is not null");
        var localScore = oldLocalData.scoreValue;
    }else{
        console.log("local data is null");
    }

    var scoreSubmitBtnEl = document.getElementById("score-btn");
    scoreSubmitBtnEl.addEventListener("click",function(){
        if(score > localScore || oldLocalData === null){
            var scoreInput = document.getElementById("score").value;
            var localData = {name: scoreInput, scoreValue: score};
            localStorage.setItem("localKey", JSON.stringify(localData));
            console.log("data stored");
            location.reload();
        }else{
            location.reload();
        }
    })
}

// main loop function
var mainLoop = function(){

    dotContainerEl.setAttribute("style", "display: flex;")
    
    var startTimer = setInterval(function() {

        console.log(time);
        var timeValue = time.toString();
        timerEl.innerHTML = timeValue;
        time--;
   
        if (time < 0){
            timerEl.innerHTML = "0"
            clearInterval(startTimer);
            displayScoreInput(score);
            submitScore();
            console.log("timer has ended");
        }
    }, 1000);

    if (0 < questions.length){
        console.log("timer is running");
        answerCheck(0);
    }
}


// event listners
startBtnEl.addEventListener("click",mainLoop);