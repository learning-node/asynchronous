/***
If you have repeated console logs (such as from a setInterval), you can end the functionality by pressing
CTRL + C
***/

/**
 CHALLENGE 1: Complete the below function so you can invoke it with one argument (a wait time in milliseconds)
 and have it console log "Hello" after that many milliseconds.
 */
function delayedGreet(waitTime) {
  setTimeout(() => {

  });
}
// Uncomment the below line to test your work.
// delayedGreet(1000); // Should console.log "Hello" after 1 second.

/**
 CHALLENGE 2: Complete the below function so you can invoke it with one argument (a wait time in milliseconds)
 and have it console log "Hello" once every interval of that many milliseconds. Press CTRL + C to stop the
 console.logs when you are done.
 */
function greetRepeatedly(waitTime) {
  setInterval(() => {

  });
}
// Uncomment the below line to test your work.
// greetRepeatedly(1000); // Should console.log "Hello" once every 1 second.

/**
 CHALLENGE 3: Complete the below function so that the promise will resolve to the input given to the function,
 after "waitTime" milliseconds.
 */
function getLater(input, waitTime) {
  return new Promise((resolve, reject) => {

  });
}
// Uncomment the below line to test your work.
// getLater("Jerry", 1000).then(data => console.log(data)); // Should console.log "Jerry" after 1 second.

/**
 CHALLENGE 4: Complete the below function so that it will use getLater() from above, give it the same arguments
 that getCappedLater was given, and then return a capitalized version of whatever the promise from getLater()
 returns.
 */
 function getCappedLater(input, waitTime) {

 }
// Uncomment the below line to test your work.
// getCappedLater("george", 1000).then(data => console.log(data)); // Should console.log "GEORGE" after 1 second.
