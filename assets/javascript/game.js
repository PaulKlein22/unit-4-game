var randomnumber;
var win = 0;
var lose = 0;
var totalscore = 0;

var startGame = function (){
$(".container").empty();
randomnumber = Math.floor(Math.random() * (120 - 19)) + 19;
$("#targetscore").html('Target Score: ' + randomnumber);

for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', "random": random
        });
    $(".container").append(crystal);
    }
    $("#totalscore").html("Total Score: " +  totalscore);
}

startGame();

$(document).on('click', ".crystal", function (){
    var num = parseInt($(this).attr('random'));
    totalscore += num;
    $("#totalscore").html("Total Score: " +  totalscore);

    if(totalscore > randomnumber){
        lose++;
        $("#losses").html("Losses: " + lose);
        totalscore = 0;
        startGame();
    } else if(totalscore === randomnumber){
        win++;
        $("#wins").html("Wins: " + win);
        totalscore = 0;
        startGame();
    }
});

//make crystal divs squares, not rectangles
//add crystal images into the crystal divs
//the value of each crystal is not showing once it is clicked on
// extra: make the New Game Button reset the game
// extra: make a message span that displays "You Win" or "You Lose"