$(document).ready(function() {
  $(".btn").on("click", function() {
    $("#instructions").hide();
    $("#instructionsP").hide();
    $("#container-main").append(correct);
  });

});



var correct = 0;
var incorrect = 0;

/*
var question1 = {
  name: "firstquestion",
  options: ["Super Mario Bros 3", "Donkey Kong", "Mortal Kombat", "F-Zero"],
  answer: "Super Mario Bros 3",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question2 = {
    name: "secondquestion",
    options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
    answer: "Funky's Flights",
    wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question3 = {
  name: "thirdquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question4 = {
  name: "fourthquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question5 = {
  name: "fifthquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question6 = {
  name: "sixthquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question7 = {
  name: "seventhquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question8 = {
  name: "eighthquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question9 = {
  name: "ninthquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};

var question10 = {
  name: "tenthquestion",
  options: ["Funky's Flights", "Ape Aviation", "Monkey Movement", "Banana Boys Transportation"],
  answer: "Funky's Flights",
  wrong: ["Donkey Kong", "Mortal Kombat", "F-Zero",]
};


questions: 

1 What classic video game had a different game from the main game called "Battle Mode"? Super Mario Bro's 3, Donkey Kong, Mortal Kombat, F-Zero

2 What is the name of the "airport" that would let you travel to different lands in Donkey Kong? Funky's Flights, Ape Aviation, Monkey Movement, Banana Boys Transportation

3 What NBA Superstar was omitted from NBA Jam, while almost every other star was featured in the game? Michael Jordan, Shaq, Dikembe Mutumbo, Gary Payton

4 What is the only Super Nintendo game to be outdone by the N-64 version? Mario Kart, Indiana Jones, Sonic the Hedgehog, Double Dragon

5 What classic fighting game featured the characters Subzero, Liu Kang, and Scorpion? Mortal Kombat, Double Dragon, Street Fighter, Pit Fighter

6 What famous Disney movie allows you to play as the juvenile version of the main character in the early levels, then switches to a mature version in the end? The Lion King, Aladdin, Dumbo, Lilo & Stitch

7 What game allowed you to play all 3 versions of Super Mario Brothers? Super Mario All Stars, Super Mario King of Guidos, Super Smash Brothers, Mario Mania

8 What was the first Mega Man game made for Super Nintendo? Mega Man X, Mega Man Origins, Mega Man 1, Super Mega Man

9 What "Legendary" game featured Link as the main character set in magical world with rupees and swordfighting? Zelda, Castlevania, Harley's Humongous adventure, The First of the Mohicans

10 What totally tubular game allowed you to time travel through different levels and "shred" bad guys? Turtles in Time, Super Mario World, Donkey Kong, Pac Man


