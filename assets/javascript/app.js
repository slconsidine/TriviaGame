$(document).ready(function() {
    var questions = [
        {
            prompt: "What color are apples?",
            option1: "red",
            option2: "blue",
            answer: "a"
        },
        {
            prompt: "What color are bananas?",
            option1: "orange",
            option2: "yellow",
            answer: "b"
        },
        {
            prompt: "What color is the sky?",
            option1: "blue",
            option2: "green",
            answer: "a"
        }
    ];

    // counter setup
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    //timer setup
    var intervalId;
    var time = 30;

    // timer begins running at game start
    $("#start").on("click", run)
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
        function decrement() {
          time--;
          $("#time").text("00:" + time);
        }

    // hides all elements initially
    $("#question").toggle(false);
    $("#option1").toggle(false);
    $("#option2").toggle(false);
    $("#option3").toggle(false);
    $("#option4").toggle(false);
    $("#time").toggle(false);
    $("#correct").toggle(false);
    $("#incorrect").toggle(false);
    $("#unanswered").toggle(false);





// starting the game
    $("#start").click(function() {
        $("#question").toggle(true);
        $("#option1").toggle(true);
        $("#option2").toggle(true);
        $("#option3").toggle(true);
        $("#option4").toggle(true);
        $("#time").toggle(true);
        $("#correct").toggle(true);
        $("#incorrect").toggle(true);
        $("#unanswered").toggle(true);
    })



    // $("#question").text(questions[0].prompt);
















});

// PSEUDOCODE
// 1. Generate a question and begin timer
// 2. Generate answers to the question and notate which is correct
// 3. User clicks an answer before time is up
//      a. log whether this answer is correct or incorrect
// 4. Time runs out
//      a. log a 'no answer'
// 5. Repeat process for all questions and reset timer
// 6. At end of questions show total correct, incorrect, unanswered
