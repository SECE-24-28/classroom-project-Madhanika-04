const questions=[{
    text:"How do you declare a function in JavaScript",
    options:["function myFunc() { }","func myFunc() { }","def myFunc() { }","method myFunc() { }"],
    correctIndex:0
},{
    text:"How do you call a function named greet?",
    options:["greet;","call greet();","greet();","function greet();"],
    correctIndex:2
},{
    text:"What is a parameter?",
    options:["A value returned by a function","A variable passed into a function","A function inside another function","A type of loop"],
    correctIndex:1
},{
    text:"What is an argument in JavaScript functions?",
    options:["The variable declared inside a function","The value passed when calling a function","A type of function","None of the above"],
    correctIndex:1
},{
    text:"What is a return statement used for?",
    options:["To stop a function","To call a function","To send a value back from a function","To declare a function"],
    correctIndex:2
},{
        text:"Which of these is an arrow function?",
        options:["function sum(a,b) { return a+b }","sum(a,b) => a+b","(a, b) => a + b","let sum(a,b): return a+b"],
    correctIndex:2
    },{
            text:"What is a callback function?",
            options:["A function that calls another function","A function passed as an argument to another function","A function inside an object","A function that returns a value"],
    correctIndex:1
        },{
                text:"What happens if a function does not have a return statement?",
                options:["Returns undefined","Returns null","Throws an error","Returns zero"],
    correctIndex:0
            },{
                    text:"Which of these is a function expression?",
                    options:["function myFunc() { }","let myFunc = function() { };","def myFunc() { }","function: myFunc() { }"],
    correctIndex:1
                },{
                        text:"Which of these is a self-invoking function?",
                    options:["function myFunc() { }()", `(function() { console.log("Hello"); })();`,"myFunc();",`function() { console.log("Hi"); }`],
    correctIndex:1}];

    let currentPageIndex=0;
    let score=0;
let selectedAns=null;
function loadQuestion (){
    document.getElementById("Q-No").innerText=`${currentPageIndex+1}/10`;
    const ques= questions[currentPageIndex];
    document.getElementById("question").innerText = ques.text;

   const op= document.getElementById("options");
   op.innerHTML = "";

   ques.options.forEach((option,index)=>{
   const btn = document.createElement("button");
   btn.innerText=option;
   btn.className = "op-btn";
   btn.onclick=()=>{
    selectedAns =index;
    document.querySelectorAll(".op-btn").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
   }
   op.appendChild(btn);
});
}

document.getElementById("nxt-btn").onclick = () => {
    if (selectedAns === null) {
        alert("Please give your answer");
        return;
    }
    if (selectedAns === questions[currentPageIndex].correctIndex) {
        score++;
    }
    currentPageIndex++;
    selectedAns = null;
    if (currentPageIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};



function showResult(){
   const total = 10;
    document.querySelector(".quiz-container").style.display = "none";
    document.querySelector(".result-box").style.display = "block";
    if (score <= total * 0.3) {
        document.body.className = "bg-low";
    } 
    else if (score <= total * 0.7) {
        document.body.className = "bg-medium"; 
    } 
    else {
        document.body.className = "bg-high";     
    }
    document.querySelector("#result").innerText =
        `Your Score: ${score} / ${total}`;
}

window.onload = function() {
    loadQuestion();
};

