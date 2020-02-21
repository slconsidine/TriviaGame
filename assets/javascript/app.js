$(document).ready(function() {
    // all questions for trivia game
    var questions = [
        {
            // question 1
            prompt: "What year did the Eagles win the Super Bowl?",
            options: ["1974", "2018", "2004", "1995"],
            answer: "2018"
        },
        {
            // question 2
            prompt: "What year were the Philadelphia Eagles founded?",
            options: ["1933", "1942", "1923", "1930"],
            answer: "1933"
        },
        {
            // question 3
            prompt: "Which quarterback has the most passing yards for a season?",
            options: ["Donovan McNabb", "Ron Jaworski", "Carson Wentz", "Nick Foles"],
            answer: "Carson Wentz"
        },
        {
            // question 4
            prompt: "Which Eagles player holds the record for most rushing yards in a season?",
            options: ["LeSean McCoy", "Brian Westbrook", "Duce Staley", "Wilbert Montgomery"],
            answer: "LeSean McCoy"
        },
        {
            // question 5
            prompt: "Which Eagle holds the record for most regular season games played?",
            options: ["David Akers", "Brian Dawkins", "Harold Carmichael", "Jon Dorenbos"],
            answer: "David Akers"
        },
        {
            // question 6
            prompt: "What was Brian Dawkins' nickname?",
            options: ["Wolverine", "Weapon X", "The Minister of Defense", "Freak"],
            answer: "Weapon X"
        },
        {
            // question 7
            prompt: "Famous Eagle Brian Dawkins played college football at...",
            options: ["LSU", "Alabama", "Ohio State", "Clemson"],
            answer: "Clemson"
        },
        {
            // question 8
            prompt: "Current Eagles QB Carson Wentz attended college at...",
            options: ["South Dakota State", "Ohio State", "North Dakota State", "Penn State"],
            answer: "North Dakota State"
        },
        {
            // question 9
            prompt: "Which Eagle is the all-time leader in sacks?",
            options: ["Brandon Graham", "Reggie White", "Seth Joyner", "Trent Cole"],
            answer: "Reggie White"
        },
        {
            // question 10
            prompt: "What franchise is considered the biggest rival to the Eagles?",
            options: ["Pittsburgh Steelers", "New Orleans Saints", "Dallas Cowboys", "Houston Texans"],
            answer: "Dallas Cowboys"
        },
        {
            // question 11
            prompt: "When the Eagles ran the Philly Special in the 2018 Super Bowl, who caught the pass for a touchdown?",
            options: ["Corey Clement", "Trey Burton", "Nick Foles", "Alshon Jeffery"],
            answer: "Nick Foles"
        },
        {
            // question 12
            prompt: "What year did the Eagles first appear in the Super Bowl?",
            options: ["2018", "1980", "2004", "1982"],
            answer: "1980"
        },
        {
            // question 13
            prompt: "What was the final score of the 2018 Super Bowl game?",
            options: ["42-40", "42-27", "30-27", "41-33"],
            answer: "41-33"
        },
        {
            // question 14
            prompt: "Which Eagle holds the record for most scrimmage yards in their rookie season?",
            options: ["LeSean McCoy", "DeSean Jackson", "Jordan Matthews", "Miles Sanders"],
            answer: "Miles Sanders"
        },
        {
            // question 15
            prompt: "During the Miracle at the Meadowlands in 2010, which Eagle returned a kickoff for a touchdown to win the game?",
            options: ["DeSean Jackson", "LeSean McCoy", "Brian Dawkins", "Tom Coughlin"],
            answer: "DeSean Jackson"
        },
        {
            // question 16
            prompt: "What is Carson Wentz's jersey number?",
            options: ["18", "11", "9", "5"],
            answer: "11"
        },
        {
            // question 17
            prompt: "Which Eagle dressed up like a Mummer for the Super Bowl parade?",
            options: ["Fletcher Cox", "Carson Wentz", "Jason Kelce", "Lane Johnson"],
            answer: "Jason Kelce"
        },
        {
            // question 18
            prompt: "In the 2008 draft, the Eagles selected who with their first pick at 47th overall?",
            options: ["Michael McGlynn", "Bryan Smith", "DeSean Jackson", "Trevor Laws"],
            answer: "Trevor Laws"
        },
        {
            // question 19
            prompt: "Current head coach Doug Pederson used to play for the Eagles at which position?",
            options: ["RB", "QB", "DE", "TE"],
            answer: "QB"
        },
        {
            // question 20
            prompt: "Which Eagle recorded a sack, fumble recovery, interception, and touchdown in the same game?",
            options: ["Trent Cole", "Mike Patterson", "Brian Dawkins", "Malcolm Jenkins"],
            answer: "Brian Dawkins"
        },
        {
            // question 21
            prompt: "What is the name of the color on the Eagles home jerseys?",
            options: ["Midnight Green", "Eagles Green", "Dark Green", "Forest Green"],
            answer: "Midnight Green"
        },
        {
            // question 22
            prompt: "Who is the Eagles all-time leading receiver?",
            options: ["DeSean Jackson", "Harold Carmichael", "Zach Ertz", "Brian Westbrook"],
            answer: "Harold Carmichael"
        },
        {
            // question 23
            prompt: "Which Eagles player has the most receptions in a single season?",
            options: ["Brian Westbrook", "Zach Ertz", "Jordan Matthews", "DeSean Jackson"],
            answer: "Zach Ertz"
        },
        {
            // question 24
            prompt: "Longtime Eagles kicker David Akers made how many field goals during his 16 season career?",
            options: ["386", "447", "324", "403"],
            answer: "386"
        },
        {
            // question 25
            prompt: "Carson Wentz was drafted at what pick overall in the 2016 draft?",
            options: ["1st", "2nd", "3rd", "4th"],
            answer: "2nd"
        },

    ];

    var selected = []; 
    var questionsTotal = 8;
    var questionsAsked = 0;

    // randomize questions
    var randomPrompt = Math.floor(Math.random() * questions.length);
    console.log(randomPrompt);
    // pushes questions that were already asked to an array so they are not asked again
    selected.push(randomPrompt);
    console.log(questions[randomPrompt].prompt)

    // counter setup
    var correct;
    var incorrect;
    var unanswered;
    correct = 0;
        $("#correct").text(correct);
    incorrect = 0;
        $("#incorrect").text(incorrect);
    unanswered = 0;
        $("#unanswered").text(unanswered);

    // starting question and options filled in 
    var setUp = function() {
        $("#question").text(questions[randomPrompt].prompt);
        $("#option1").text(questions[randomPrompt].options[0]);
        $("#option2").text(questions[randomPrompt].options[1]);
        $("#option3").text(questions[randomPrompt].options[2]);
        $("#option4").text(questions[randomPrompt].options[3]);
        // adds question to the already asked counter
        questionsAsked++;
        // enables all buttons
        $(".option1").attr("disabled", false);
        $(".option2").attr("disabled", false);
        $(".option3").attr("disabled", false);
        $(".option4").attr("disabled", false);
        // clears correct answer and hides it on start
        $("#correct-answer").text("");
        $("#correct-answer").hide();
    };

    // shows the correct answer
    var showCorrect = function() {
        $("#correct-answer").show();
        $("#correct-answer").text("The correct answer is... " + questions[randomPrompt].answer);
    };
 
    //timer setup
    var intervalId;
    var time = 30;
    $("#time").text("00:" + time);

    $("#start").on("click", run)
    // timer is running
    function run() {
        $("#start").toggle(false);
        $("#newGame").toggle(false);
        $("#next").toggle(true);
        $(".time").toggle(true);
        time = 30;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        };
        function decrement() {
            time--;
            $("#time").text("00:" + time);
            if (time < 10) {
                $("#time").text("00:0" + time);
            };
            // timer hits 0 before question gets answered
            if (time === 0) {
            clearInterval(intervalId);
            $("#next").attr("disabled", false);
            $("#time").text("Time's up!");
            unanswered++;
            $("#unanswered").text(unanswered);
            showCorrect();
            };
        };

    // questions/options are populated
    setUp();

    // disables all option buttons so they can't be clicked again after an answer is selected
    var notEnabled = function() {
        $(".option1").attr("disabled", true);
        $(".option2").attr("disabled", true);
        $(".option3").attr("disabled", true);
        $(".option4").attr("disabled", true);
    }

    // disables the next question button
    var nextOff = function() {
        $("#next").attr("disabled", true);
    };
    
    // user clicks an answer
    $(".option1").click(function() {
        // stops timer
        clearInterval(intervalId);
        // disables button
        notEnabled();
        // enables the next question button
        $("#next").attr("disabled", false);
        // determines if answer is correct or not
        if (questions[randomPrompt].options[0] === questions[randomPrompt].answer) {
            // adds to correct counter
            correct++;
            $("#correct").text(correct);
        } else {
            // adds to incorrect counter
            incorrect++;
            $("#incorrect").text(incorrect);
        }
        // displays the correct answer
        showCorrect();
    });

    // user clicks an answer    
    $(".option2").click(function() {
        // stops timer
        clearInterval(intervalId);
        // disables button
        notEnabled();
        // enables the next question button
        $("#next").attr("disabled", false);
        // determines if answer is correct or not
        if (questions[randomPrompt].options[1] === questions[randomPrompt].answer) {
            // adds to correct counter
            correct++;
            $("#correct").text(correct);
        } else {
            // adds to incorrect counter
            incorrect++;
            $("#incorrect").text(incorrect);
        }
        // displays the correct answer
        showCorrect();
    });

    // user clicks an answer    
    $(".option3").click(function() {
        // stops timer
        clearInterval(intervalId);
        // disables button
        notEnabled();
        // enables the next question button
        $("#next").attr("disabled", false);
        // determines if answer is correct or not
        if (questions[randomPrompt].options[2] === questions[randomPrompt].answer) {
            // adds to correct counter
            correct++;
            $("#correct").text(correct);
        } else {
            // adds to incorrect counter
            incorrect++;
            $("#incorrect").text(incorrect);
        }
        // displays the correct answer
        showCorrect();
    });

    // user clicks an answer    
    $(".option4").click(function() {
        // stops timer
        clearInterval(intervalId);
        // disables button
        notEnabled();
        // enables the next question button
        $("#next").attr("disabled", false);
        // determines if answer is correct or not
        if (questions[randomPrompt].options[3] === questions[randomPrompt].answer) {
            // adds to correct counter
            correct++;
            $("#correct").text(correct);
        } else {
            // adds to incorrect counter
            incorrect++;
            $("#incorrect").text(incorrect);
        }
        // displays the correct answer
        showCorrect();
    });

    // user clicks the next question button
    $("#next").click(function() {
        // generates a new question if the total has not been reached
        if (questionsAsked < questionsTotal) {
            randomPrompt = Math.floor(Math.random() * questions.length);
            while (selected.includes(randomPrompt)) {
                randomPrompt = Math.floor(Math.random() * questions.length);
            }
            selected.push(randomPrompt);
            setUp ();
            run ();
            nextOff();
        // when total questions to ask has been reached it ends the game and shows the results
        } else {
            $("#correct-answer").toggle(false);
            $("#question").toggle(false);
            $(".option1").toggle(false);
            $(".option2").toggle(false);
            $(".option3").toggle(false);
            $(".option4").toggle(false);
            $("#next").toggle(false)
            $(".time").toggle(false);
            $("#final").toggle(true);
            $("#final").text("Here's how you did!");
            $("#newGame").toggle(true);
        }
    });
    
    // new game is selected and all things are reset
    $("#newGame").click(function() {
        $("#question").toggle(true);
        $(".option1").toggle(true);
        $(".option2").toggle(true);
        $(".option3").toggle(true);
        $(".option4").toggle(true);
        $("#final").toggle(false);
        correct = 0;
        $("#correct").text(correct);
        incorrect = 0;
        $("#incorrect").text(incorrect);
        unanswered = 0;
        $("#unanswered").text(unanswered);
        selected = [];
        questionsAsked = 0;
        randomPrompt = Math.floor(Math.random() * questions.length);
        selected.push(randomPrompt);
        setUp();
        run();
    });

    // hides all elements initially
    $("#question").toggle(false);
    $(".option1").toggle(false);
    $(".option2").toggle(false);
    $(".option3").toggle(false);
    $(".option4").toggle(false);
    $("#correct").toggle(false);
    $("#incorrect").toggle(false);
    $("#unanswered").toggle(false);
    $("#next").toggle(false);
    $("#newGame").toggle(false);    
    $(".hide").toggle(false);

    // starting the game
    $("#start").click(function() {
        $("#question").toggle(true);
        $(".option1").toggle(true);
        $(".option2").toggle(true);
        $(".option3").toggle(true);
        $(".option4").toggle(true);
        $("#correct").toggle(true);
        $("#incorrect").toggle(true);
        $("#unanswered").toggle(true);
        $("#next").toggle(true);
        $("#newGame").toggle(false);
        $(".hide").toggle(true);
    });
});

