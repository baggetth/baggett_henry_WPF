/*
 Baggett_Henry_ Conditionals Assignment
 04/22/2015
 */


//alert("Test");

//Explain the propose 

alert("Hello, this process will determent if you are allowed to work on the network .");  

//Enter Last Name, First name 
var name = prompt("Began by Entering Last Name, First Name"); 

//console.log out name 
console.log(name);

  //Give the user an legal waring alert
 alert("WARNING "+name+"! Making False Statements Could Result in Criminal Charges."); 

//This position requires 10 years of experience 
alert("All our positions require a Minimum of 10 years Experience?"); 

//years of experience
var num1=prompt("Enter Years of Experience"); 
var num2=Number("9");  

if (num2<num1)
{ 
    alert("Your Years of Experience is 10 years or over, please proceed"); 
}
else if (num2>num1)
{
     alert("Your Years of Experience is Less then 10 years, sorry, however we have other jobs that don't require 10 years");
 } 
//question do we go to the office or not
var worlkPlace= prompt("Would you like to the office? Please answer yes or no:");

worlkPlace = worlkPlace.toLowerCase();

//question can be answered with yes or Yes
 while(worlkPlace !="yes" && worlkPlace!="Yes"){ 

      //reprompt if you don't use yes or no 
 worlkPlace =prompt("Only type in yes or no. If you would like to go to the office?");  } 