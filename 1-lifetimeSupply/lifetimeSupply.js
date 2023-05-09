// Exercise One - Computing a lifetime supply of your favorite snack!
//
// You just won a lifetime supply of your favorite snack.
//
// You are going to write a piece of code which will determine how much you
// will actually need to last the rest of your life.
//
// Step one:
//    Prompt the user for three things.
//    * The name of their favorite snack
//    * The number of items of that snack they would eat in a day
//    * Their current age.
//
//    Store each of these things in descriptively named variables.
//
// Step Two:
//    Calculate how many they would need to last them until they are 100!
//
//    Hint: There are 365 days in a year.  Multiply that by the number of years until they are 100 years
//    old (100 minus their current age). That will give you the total number of days.
//    Then multiply that by how many they would eat in a day.
//
//    Store that number in a variable.  That is how many they will eat in their lifetime.
//
// Step Three:
//    Print a sentence to the browser using document.write().
//
//    Your sentence should describe how many of their snack they will eat.  Something like this:
//
//    "Congratulations, you have won a lifetime supply of Snickers!<br>You will receive 2 Snickers 
//    per day, for a grand total of 51100 Snickers."
//
//    Concatenate together strings with your variables to form the message dynamically.
//
//    Then test out your program with different numbers and snack!
//
// 👇 WRITE YOUR CODE HERE 👇
let favoriteSnack = prompt("What is your favorite snack?");
let snacksPerDay = prompt("How many " + favoriteSnack + " do you eat in a day?");
let currentAge = prompt("What is your current age?");
//number of days until they turn 100 by subtracting their 

//current age from 100 and multiplying the result by 365 (the number of days in a year)
let daysUntil100 = (100 - currentAge) * 365;

//calculate the total number of snacks they would need to eat in their- 
//lifetime by multiplying daysUntil100 by the number of snacks- 
//they eat in a day.
let lifetimeSnacks = daysUntil100 * snacksPerDay;
//we can use the document.write() function in JavaScript to print a sentence-
// to the browser that describes how many snacks the user will eat in their lifetime. 
//We can concatenate together strings with our variables to form the message dynamically.
document.write("Congratulations, you have won a lifetime supply of " 
+ favoriteSnack + "!<br>You will receive " 
+ snacksPerDay 
+ " " + favoriteSnack + " per day, for a grand total of " 
+ lifetimeSnacks + " " + favoriteSnack + ".");