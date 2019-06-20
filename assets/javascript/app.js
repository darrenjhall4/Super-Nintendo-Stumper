var card = $("#main");

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      alert("Time's Up!");
      game.done(); //NEED DONE FUNCTION
    }
  },

  start: function() {

    $("#instructions").hide();
    $("#instructionsP").hide();
    timer = setInterval(game.countdown, 1000);

    $("#main").prepend(
      "<h3>Time Remaining: <span id='counter-number'>120</span> Seconds </h3>"
    );
    $("#initialbutton").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");

      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append(
          "<input type='radio' name='question-" +
            i +
            "'value-'" +
            questions[i].answers[j] +
            "" >
            " + questions[i].answers[j]);"
        );
      }
    }
    card.append("<button id='done'>Done</button>");
  }
};

$(document).on("click", "#initialbutton", function() {
  game.start();
});



/*




var question1 = {
  trivia: '1. What classic video game featured a completely separate game which allowed you to play in "Battle Mode"?',
  name: "firstquestion",
  options: ["Donkey Kong", "Mortal Kombat", "F-Zero", "Super Mario Bros 3"],
  answer: "Super Mario Bros 3",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question2 = {
    trivia: "2. What is the name of the airport that would let you travel to different lands in Donkey Kong? Funky's Flights, Ape Aviation, Monkey Movement, Banana Boys Transportation",
    name: "secondquestion",
    options: ["Ape Aviation", "Monkey Movement", "Funky's Flights", "Banana Boys Transportation"],
    answer: "Funky's Flights",
    wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question3 = {
  trivia: "3. What NBA Superstar was omitted from NBA Jam, while almost every other star was featured in the game?",
  name: "thirdquestion",
  options: ["Michael Jordan", "Shaq", "Dikembe Mutumbo", "Gary Payton"],
  answer: "Michael Jordan",
  wrong: ["Shaq", "Dikembe Mutumbo", "Gary Payton",]
};

var question4 = {
  trivia: "4. What is the only Super Nintendo game to be outdone by the N-64 version?",
  name: "fourthquestion",
  options: ["Indiana Jones", "Mario Kart", "Sonic the Hedgehog", "Double Dragon"],
  answer: "Mario Kart",
  wrong: ["Indiana Jones", "Sonic the Hedgehog", "Double Dragon"]
};

var question5 = {
  trivia: "5. What classic fighting game featured the characters Subzero, Liu Kang, and Scorpion?",
  name: "fifthquestion",
  options: ["Double Dragon", "Street Fighter", "Pit Fighter", "Mortal Kombat"],
  answer: "Mortal Kombat",
  wrong: ["Double Dragon", "Street Fighter", "Pit Fighter"]
};

var question6 = {
  trivia: "6 What game based on a famous Disney movie allows you to play as the juvenile version of the main character in the early levels, then switches to a mature version in the end?",
  name: "sixthquestion",
  options: ["Aladdin", "The Lion King", "Dumbo", "Lilo & Stitch"],
  answer: "The Lion King",
  wrong: ["Aladdin", "Dumbo", "Lilo & Stitch"]
};

var question7 = {
  trivia: "7. What game allowed you to play all 3 versions of Super Mario Brothers?",
  name: "seventhquestion",
  options: ["Super Mario All Stars", "Super Mario King of Guidos", "Super Smash Brothers", "Mario Paint"],
  answer: "Super Mario All Stars",
  wrong: ["Super Mario King of Guidos", "Super Smash Brothers", "Mario Paint"]
};

var question8 = {
  trivia: "8. What was the first Mega Man game made for Super Nintendo?",
  name: "eighthquestion",
  options: ["Mega Man Origins", "Mega Man 1", "Super Mega Man", "Mega Man X"],
  answer: "Mega Man X",
  wrong: ["Mega Man Origins", "Mega Man 1", "Super Mega Man"]
};

var question9 = {
  trivia: '9. What "Legendary" game featured Link as the main character set in magical world with rupees and swordfighting?',
  name: "ninthquestion",
  options: ["Castlevania", "Harley's Humongous Adventure", "Zelda", "The First of the Mohicans"],
  answer: "Zelda",
  wrong: ["Castlevania", "Harley's Humongous Adventure", "The First of the Mohicans"]
};

var question10 = {
  trivia: '10 What totally tubular game allowed you to time travel through different levels and "shred" bad guys?',
  name: "tenthquestion",
  options: [ "Super Mario World", "Turtles in Time", "Donkey Kong", "Pac Man"],
  answer: "Turtles in Time",
  wrong: ["Super Mario World", "Donkey Kong", "Pac Man"]
};


questions: 

1 What classic video game had a different game from the main game called "Battle Mode"? Super Mario Bro's 3, Donkey Kong, Mortal Kombat, F-Zero

2 What is the name of the "airport" that would let you travel to different lands in Donkey Kong? Funky's Flights, Ape Aviation, Monkey Movement, Banana Boys Transportation

3 What NBA Superstar was omitted from NBA Jam, while almost every other star was featured in the game? Michael Jordan, Shaq, Dikembe Mutumbo, Gary Payton

4 What is the only Super Nintendo game to be outdone by the N-64 version? Mario Kart, Indiana Jones, Sonic the Hedgehog, Double Dragon

5 What classic fighting game featured the characters Subzero, Liu Kang, and Scorpion? Mortal Kombat, Double Dragon, Street Fighter, Pit Fighter

6 What game based on a famous Disney movie allows you to play as the juvenile version of the main character in the early levels, then switches to a mature version in the end? The Lion King, Aladdin, Dumbo, Lilo & Stitch

7 What game allowed you to play all 3 versions of Super Mario Brothers? Super Mario All Stars, Super Mario King of Guidos, Super Smash Brothers, Mario Paint

8 What was the first Mega Man game made for Super Nintendo? Mega Man X, Mega Man Origins, Mega Man 1, Super Mega Man

9 What "Legendary" game featured Link as the main character set in magical world with rupees and swordfighting? Zelda, Castlevania, Harley's Humongous adventure, The First of the Mohicans

10 What totally tubular game allowed you to time travel through different levels and "shred" bad guys? Turtles in Time, Super Mario World, Donkey Kong, Pac Man
*/