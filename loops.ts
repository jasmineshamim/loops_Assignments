//1. Creating a Lesson Plan(Using for loop )
// Step 1: Create a blank array
var myWork: {name: string, status: boolean }[] = []
// Step 2: Use a  for loop to create lessons
for (var i = 1; i <= 10; i++) {
    // Creating an object representing a lesson
    var lesson = {
        name: `lesson${i}`,
        status: (i % 2 === 0) ? true : false // Ternary operator ka istemal status ko set karne ke liye
    };
 // Step 3: Add the lesson to the array
    myWork.push(lesson);
};
// Step 4: Print the result
console.log("List of Lessons:");
console.log(myWork);




// 2. GUESSING GAME USING A WHILE LOOP
// Step 1: Create a variable to store the maximum value
var maxValue = 10;
// Step 2: Generate a random number:
var randomNum = Math.floor(Math.random() * maxValue) + 1;
console.log(randomNum);

// Step 3: Track the guess status
let correctGuess: boolean = false;

// Step 4: Use an array to store a series of predefined guesses.
let preGuesses: number[] = [2, 3, 6, 7];

// Step 4: Use a while loop to iterate over the predefined guesses until the correct guess is made.
let index: number = 0;
while (!correctGuess && index < preGuesses.length) {
    // Get the current guess
    const currentGuess: number = preGuesses[index];

    // Check if the current guess is correct
    if (currentGuess === randomNum) {
        correctGuess = true; // Set correctGuess to true if the guess is correct
        console.log("Congratulations! You guessed the correct number.");
    } else if (currentGuess < randomNum) {
        console.log("Too low. Try again.");
    } else {
        console.log("Too high. Try again.");
    }

    index++;
};





// 3. Counter Incrementer (Using do while loop )
// step:1 Create a variable counter and initialize it to 0.
let counter: number = 0;
const step: number = 1;

// Do...while loop
do {
    // Counter ko console par print karo
    console.log("Counter:", counter);

    // Counter ko step ke mutabiq barhao
    counter += step;

    // Loop ko rokne ke liye condition check karo
} while (counter < 100); // Counter 100 ya us se zyada tak chalega




// 4. Exploring Objects with for...in Loop
// step:1 Create a simple object with three items:
let myobject = {
    item1: "sugar",
    item2: "milk",
    item3: "water",
};

// Using a for...in loop to get properties' names and values from the object
for (let property in myobject) {
    // Print property name and its corresponding value to the console
    console.log("Property:", property);
    console.log("Corresponding value:", myobject[property]);
};





// 5. Exploring Arrays with Loops(Using loop )
// step:1 Create an empty array:
let myArray: number[] = [];
// Run a loop 10 times
for (let i = 0; i < 10; i++) {
    // Add incrementing value (starting from 1) to the array
    myArray.push(i + 1);
};
console.log(myArray);

// step:2 Using a for loop to iterate through the array elements
for (let i = 0; i < myArray.length; i++) {
    // Output each array element along with its index into the console
    console.log("Index:", i, "Value:", myArray[i]);
};
// step:3 Using a for...of loop to iterate through the array elements
for (const element of myArray) {
    // Output each array element directly into the console
    console.log(element);
};