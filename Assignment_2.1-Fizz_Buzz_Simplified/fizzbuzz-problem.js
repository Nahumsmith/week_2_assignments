var fizzBuzz = function(num) {
	
	if ((num % 3 == 0) && (num % 5 == 0)) {
		console.log("FizzBuzz")
	} else if (num % 3 == 0) {
		console.log("Fizz")
	} else if (num % 5 == 0) {
		console.log("Buzz")	
	} else {
		console.log("BLAH!")
	}
}
fizzBuzz(30); //-> returns FizzBuzz
fizzBuzz(9); //-> returns Fizz
fizzBuzz(10); //-> returns Buzz
fizzBuzz(32); //-> returns Blah!
