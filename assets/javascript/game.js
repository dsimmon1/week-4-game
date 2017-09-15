$(document).ready(function() {

$("#micheal").attr("character-score", 180);
$("#andy").attr("character-score", 100);
$("#jim").attr("character-score", 120);
$("#dwight").attr("character-score", 150);
mscore = ($("#micheal").attr("character-score"));
mscore = parseInt(mscore);
$("#mscore").text(mscore);
dscore = ($("#dwight").attr("character-score"));
dscore = parseInt(dscore);
$("#dscore").text(dscore);
ascore = ($("#andy").attr("character-score"));
ascore = parseInt(ascore);
$("#ascore").text(ascore);
jscore = ($("#jim").attr("character-score"));
jscore = parseInt(jscore);
$("#jscore").text(jscore);
var dattackpower = 20;
var attackpower = 5;
var mattackpower = 25;
var jattackpower = 8; 
var buttonClick = 0;

//make a new value for each element and have it be equal to character name and that specific character;s name

$("#dwight").on("click", function() {
        $("#micheal").appendTo(".attackcharacter");
        $("#andy").appendTo(".attackcharacter");
        $("#jim").appendTo(".attackcharacter");
        $(this).appendTo(".currentcharacter");
        $("#micheal").css("background", "red");
        $("#andy").css("background", "red");
        $("#jim").css("background", "red");
        $(".attackcharacter").css("display", "flex");

    $("#jim").on("click", function() {
        $("#jim").appendTo(".defender");

        $("#attack").on("click", function() {
buttonClick++;
console.log(buttonClick);
jscore -= dattackpower * buttonClick;
dscore -= jattackpower;
$("#jscore").text(jscore);
$("#dscore").text(dscore);
$(".status").text("You attacked Jim for " + dattackpower * buttonClick + ".");

    if (jscore <= 0) {
        console.log("I'm at 0!");
        $("#jim").remove();
        $(".status").text("");
    }
});
 });
 });



/*var characters = [$("#micheal","#andy","#jim")];/*



/*for (var i = 0; i < characters.length; i++) {
	characters.on("click", function() {
     $(this).appendTo(".defender").css("background","purple");
   });
}
*/ });