/*
 Henry Baggett
 SDI Section 01
 Week 4 Function Assignment
 4/30/2015
 */


//go to the beach or not
var beach= prompt("Would you like to go to the beach today? Please answer yes or no:");

beach = beach.toLowerCase();

//answered with yes or No
while(beach !="yes" && beach!="no"){


    //reprompt if you don't use yes or no
    beach =prompt("Only type in yes or no. If you would like to go to the beach?");
}

alert("I'm only if it above 21 centigrade, what temperate is it?");

//fahrenheit to centigrade (C = 5/7, F - 32)

var degFahren = prompt("I'm not sure, lets see, the temperate in fahrenheit is",70);
var degCent;

degCent = 5/9 * (degFahren - 32);

alert(degCent);

alert("Let's hope there's room on the beach \n\n How much room do you think we will need?");


//Function - Anonymus Function

var calcArea = function(width, height){
    //code the function runs
    var area = width * height;
    return area;
}

var a = calcArea(20, 30);


alert(a);//printout

