//--------Complete four of the following problems--------

/*
Write 3 different functions that take input and return something via the console or an alert.
*/

// Function 1
function greeting(name)	{
	console.log("Hello " + name);
}
greeting(Amy); //-> Hello Amy

// Function 2
function squareNum(num)	{
	console.log(num * num);
}
squareNum(7); //-> 49

// Function 3
function why(input)	{
	alert("Why did you type " + input + "?")
}
why("kjasdfjdfljkfbj") //-> Why did you type kjasdfjdfljkfbj?

/*
Create a script with two variables assigned to two numbers. Add them together and output the result 
to the console. Now do the same with two strings.
*/

var num1 = 45;
var num2 = 30;

console.log(num1 + num2);

var string1 = "You're a fool";
var string2 = "John Snow";

console.log(string1 + " " + string2 + "!"); //-> You're a fool John Snow


/*
Create a multidimensional array related to a subject that interests you. Output two of the items in 
sub-arrays to the console.
*/

var philosophyBranches = [["Logic", "Epistemology", "Metaphysics", "Politics", "Ethics", 
"Aesthetics"], ["Ancient", "Modern", "Medieval"], ["Language", "Science", "Psychology"], 
["Analytic", "Continental"]];

console.log(philosophyBranches[0][2], philosophyBranches[2][1]); 

// Bonus Attempt:
console.log("My favorite two are: " + philosophyBranches[0][2] + " and the Philosophy of " 
	+ philosophyBranches[2][1]);

/*
Write a script that checks if a variable is less than 10. If it is, alert the user that their 
variable is less than 10. If it is not, using the console, let the user know that what the variable 
was and that it was greater than 10.
*/

var lessThan = function(num)	{

	if (num < 10)	{
		alert("Your variable is less than 10!");
	} else {
		console.log("Your variable (" + num + ") is greater than 10!")
	}
};
lessThan(65); //-> Your variable 65 is greater than 10!

/*
Try running the script and then changing the variable's value to see how this affects the program's
output.
*/

lessThan(8); //-> a pop up with: Your variable is less than 10!

/*
Write a similar program to check if a string stored in a variable is the same as another string.
*/

var string1 = "Hello";

var areWeTwins = function(string2)	{

	if (string2 == string1)	{
		console.log("My twin, there you are!");
	} else	{
		console.log("You don't look like me at all, dude!")
	}
};
areWeTwins("Hello"); //-> My twin, there you are!

/*
Declare a function that takes a name as an argument and tells the user what name they've entered. 
Try running it after it has been declared.
*/

function whoAreYou(name) {
	console.log("You have entered the name: " + name);
}
whoAreYou("Nahum"); //-> You have entered the name: Nahum

/*
Declare a function that takes no arguments but prints something to the console. Try running it 
after it has been declared.
*/

function printStuff() {
	console.log("I am printing stuff to the console!")
}
printStuff();

/* Additional Problem
Declare a function that depending upon which virtual 'door' was entered tells the user they've 
received a different 'prize' in an alert. After declaring the function, try running it with 
different options.
*/

