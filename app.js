const firebaseConfig = {
    apiKey: "AIzaSyDbBxA9XbagwrgWGoB7OmXvMQdHqGHzJZo",
    authDomain: "fir-auth-aa688.firebaseapp.com",  
    databaseURL: "https://fir-auth-aa688-default-rtdb.firebaseio.com",
    projectId: "fir-auth-aa688",
    storageBucket: "fir-auth-aa688.firebasestorage.app",
    messagingSenderId: "967347999633",
    appId: "1:967347999633:web:1daefd6ea43513983a0030",
  };
  
  var app = firebase.initializeApp(firebaseConfig);
  




var questions = [
    {
      question: "Q1: HTML Stands for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Q2: CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Q3: Which tag is used for most large heading",
      option1: "<h6>",
      option2: "<h2>",
      option3: "<h1>",
      corrAnswer: "<h1>",
    },
    {
      question: "Q4: Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Q5: Any element assigned with id, can be get in css ",
      option1: "by # tag",
      option2: "by @ tag",
      option3: "by & tag",
      corrAnswer: "by # tag",
    },
    {
      question: "Q6: CSS can be used with ______ methods ",
      option1: "8",
      option2: "3",
      option3: "4",
      corrAnswer: "3",
    },
    {
      question: "Q7: In JS variable types are ____________ ",
      option1: "6",
      option2: "3",
      option3: "8",
      corrAnswer: "8",
    },
    {
      question: "Q8: In array we can use key name and value ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
      question: "Q9: toFixed() is used to define length of decimal ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "True",
    },
    {
      question: "Q10: push() method is used to add element in the start of array ",
      option1: "True",
      option2: "False",
      option3: "None of above",
      corrAnswer: "False",
    },
    {
        question: "Q11: Which symbol is used for comments in JavaScript?",
        option1: "//",
        option2: "/* */",
        option3: "None of above",
        corrAnswer: "//",
      },
      {
        question: "Q12: How do you declare a variable in JavaScript?",
        option1: "var myVar",
        option2: "variable myVar;",
        option3: "v myVar;",
        corrAnswer: "var myVar;",
      },
      {
        question: "Q13: Which method can be used to find the length of a string?",
        option1: "length()",
        option2: "stringLength()",
        option3: "size()",
        corrAnswer: "length()",
      },
      {
        question: "Q14: Which method adds a new element to the end of an array?",
        option1: "push()",
        option2: "pop()",
        option3: "append()",
        corrAnswer: "push()",
      },
      {
        question: "Q15: What will `console.log(typeof 'Hello');` output?",
        option1: "string",
        option2: "text",
        option3: "char",
        corrAnswer: "string",
      },
      

  ];
  var button = document.getElementById("btn");
  var question = document.getElementById("ques");
  var option1 = document.getElementById("opt1");
  var option2 = document.getElementById("opt2");
  var option3 = document.getElementById("opt3");
  var index = 0;
  var score = 0;
  
  
  function nextQuestion() {
    var options = document.getElementsByClassName("options");
  
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selectedOption = options[i].value;
        var getOption = questions[index - 1][`option${selectedOption}`];
        var corrAnswer = questions[index - 1]["corrAnswer"];
  
        if (getOption === corrAnswer) {
          score++;
        }
  
        console.log(getOption);
      }
  
      options[i].checked = false;
    }
    button.disabled = true;
  
    if (index > questions.length - 1) {
        var scorePercentage = (score / questions.length) * 100;
        var message = "Poor";
    
        if (scorePercentage >= 90) {
          message = "Excellent";
        } else if (scorePercentage >= 70) {
          message = "Good";
        } else if (scorePercentage >= 50) {
          message = "Average";
        }
    
        Swal.fire({
          title: `${message} Job!`,
          text: `Your score is ${scorePercentage.toFixed(2)}%`,
          icon: "success",
        });
      } else {
        question.innerText = questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
        index++;
      }
    }
  
  function clicked() {
    button.disabled = false;
  }

  nextQuestionQuestion();
  startTimer();