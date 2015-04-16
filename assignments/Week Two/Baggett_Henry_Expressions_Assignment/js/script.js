/*
 Baggett_Henry_ Expressions Assignment
 04/16/2015
 */


// Determined  the average temperature in centigrade to determent in it's warm enough to go outside

alert("The temperature for 5 days are 76, 80, 77, 67 and 74 Degrees in centigrade at 4 PM");// temperatures in fahrenheit

var Temp1 = 76; // temperature 1
 var Temp2 = 80;  // temperature 2
var Temp3 = 77;  // temperature 3
var Temp4 = 67;  // temperature 4
var Temp5 = 74; // temperature 5

var total = (Temp1 + Temp2 + Temp3 + Temp4 + Temp5)/5;  //temperatures total and divided by 5

alert("The average temperature will be "  +total+ " degrees fahrenheit" );  //user is informed as to the average in fahrenheit

var degFahren = prompt("Enter the degrees in fahrenheit",50);  //user enters temperature in fahrenheit

var degCent; 

 degCent = 5/9 * (degFahren - 32);  // formula to change fahrenheit to centigrade
alert("The average temperature in centigrade is " + degCent + " centigrade");    //outputs the temperature in centigrade

var Cels1 = prompt("Enter enter temperature in celsius");  // prompts user to enter temperature in centigrade
var Cels2 = Number("21");  // temperature that determent's if user goes out or not

if (Cels1<Cels2)  // less then 21 celsius
{ 
    alert("Stay inside");  //if temp is below 21 celsius go inside
} 
else if (Cels1>Cels2) // Greater then 21 celsius
     
{ 
    alert("Go outside and have a great day");   // if temp is over 21 celsius go outside

}