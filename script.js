var questions = [
    {
        question: "Inside which HTML element do you put JavaScript?",
        choices: ["a.) <js>", "b.) <javascript>", "c.) <script>", "d.) <head>"],
        answer: "c.) <script>"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a.) booleans", "b.) numbers and strings", "c.) other arrays", "d.) all of the above"],
        answer: "c.) other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a.) strings", "b.) booleans", "c.) alerts", "d.) numbers"],
        answer: "c.) alerts"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a.) curly brackets", "b.) quotes", "c.) parenthesis", "d.) commas"],
        answer: "b.) quotes"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a.) function myFunction()", "b.) myFunction()", "c.) call myFunction[]", "d.) function=()"],
        answer: "a.) function myFunction()"
    }
];

var index = 0;
var time = 60;
var timer;

function startTimer() {
    timer = setInterval(function () {
        if (time > 0) {
            time--;
            document.getElementById("timer").innerText = time;
        }
    }, 1000);
}

function displayQuestion() {
    document.getElementById("question").innerText = questions[index].question;
    document.getElementById("q1").innerText = questions[index].choices[0];
    document.getElementById("q2").innerText = questions[index].choices[1];
    document.getElementById("q3").innerText = questions[index].choices[2];
    document.getElementById("q4").innerText = questions[index].choices[3];
}

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start-area").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    displayQuestion();
    startTimer();
});

document.getElementById("quiz-section").addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        if (event.target.innerText !== questions[index].answer) {
            // Deduct time here
            time -= 10;
        }
        index++;
        if (index >= questions.length) {
            var score = {
                score: time,
                initials: prompt("Enter your initials to save your score!")
            };
            localStorage.setItem("High-Score", JSON.stringify(score));
            clearInterval(timer);

            // Show congratulatory message
            showCongratulatoryMessage();

            return;
        }
        displayQuestion();
    }
});

function showCongratulatoryMessage() {
    var congratulatoryMessage = document.createElement("p");
    congratulatoryMessage.innerText = "Congratulations! You've completed the quiz!";
    congratulatoryMessage.style.color = "#4caf50";
    congratulatoryMessage.style.fontWeight = "bold";
    congratulatoryMessage.style.marginTop = "20px";

    document.getElementById("quiz-section").appendChild(congratulatoryMessage);
}
