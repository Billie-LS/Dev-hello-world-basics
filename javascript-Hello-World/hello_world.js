/*  
Basic 'first Java Script program' that prints a greeting message to the console.
The function print() used to display/print to console the output, the string "Hello, World!"
this general code has been adapted from LaunchCode WebDev course starter code
*/

// Logging "Hello, World! 0" to the console using console.log()
console.log("Hello, World! 0");

// Logging "Hello, World! 1" to the console using console.info()
console.info("Hello, World! 1");

// Logging "Hello, World! 2" to the console using console.warn()
console.warn("Hello, World! 2");

// Logging "Hello, World! 3" to the console using console.error()
console.error("Hello, World! 3");

// Logging "Hello, World! 4" to the console using console.debug()
console.debug("Hello, World! 4");

// Writing "Hello, World! 5" to the standard output stream
process.stdout.write("Hello, World! 5");

// Writing a newline character to the standard output stream
process.stdout.write("\n");

/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:
*/

//    1. Change the message that is printed.
console.log("Goodbye, Folks!");

//  2. Figure out what the parentheses do. Will the code work without them? NO
console.log("Hello, World!");
//  3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? Is there a difference between using a single or a double quote (' vs. ")?
console.log("Hello, World!");
console.log("Hello, World!");
//    4. Remove the semi-colon, ;.
console.log("Hello, World!");
console.log("Hello, World!");
//    5. Print a number. (Bonus: Print two numbers added together).
console.log(2);
console.log(2 + 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);

//    6. Print multiple messages one after the other.
console.log("testing single quotes");
console.log("it worked!");

//    7. Print two messages on the same line.
console.log("testing message 1", "testing message 2");

//    8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
console.log('Quoth the Raven "Nevermore"');

//    9. Other. You choose!
console.log('Quoth the Raven "Nevermore"', " Hello, World!");
