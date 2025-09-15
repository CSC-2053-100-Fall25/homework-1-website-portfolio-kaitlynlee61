let myName = "Jay Wright";
const birthYear = 1961;
var city = "Churchville";

console.log("Name:", myName);
console.log("Birth Year:", birthYear);
console.log("City:", city);

myName = "Andy Reid";
city = "Los Angeles";

console.log("Updated Name:", myName);
console.log("Updated City:", city);

// Try to reassign the constant
// Uncomment the line below to see what happens
// birthYear = 1995;

// Example 1: Block scope with let vs var
if (true) {
 let blockLet = "I am block-scoped (let)";
 var blockVar = "I am function-scoped (var)";
 console.log("Inside block - let:", blockLet);
 console.log("Inside block - var:", blockVar);
}
//console.log(blockLet); // Uncomment this line to see the error!
// console.log("Outside block - var:", blockVar); // Still accessible

let age = 22;
let isStudent = true;
let hobbies = ["reading", "coding", "jogging"];
let address = {
 street: "742 Evergreen Terrace",
 city: "Springfield",
 state: "PA"
};

console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);

let newAge = age;
let newAddress = address;
newAge = 30;
newAddress.city = "Philadelphia";

console.log("Original Age:", age); // Expect: 25
console.log("New Age:", newAge); // Expect: 30
console.log("Original Address:", address); // Expect city to be "Philadelphia"
console.log("New Address:", newAddress);

// Select the h2 element by its id
// const welcomeMessage = document.getElementById('welcome-message');
// console.log(welcomeMessage.textContent);
// Modify the text content
// welcomeMessage.textContent = 'Pumpkin Spice is simply the best flavor, this cannot be argued!';
// Select the paragraph and button
// const description = document.getElementById('description');
// const button = document.getElementById('change-text');
// Add an event listener to change the text when the button is clicked
// button.addEventListener('click', function() {
// description.textContent = 'You just clicked the button, and this text changed!';
// });

// Select the "Add Major" button
const addMajorButton = document.getElementById('add-major');
// Add an event listener to add a new paragraph with the student's major
addMajorButton.addEventListener('click', function() {
 // Create a new paragraph element
 const majorElement = document.createElement('p');
 majorElement.textContent = 'Major: Statistics'; // Replace with your actual major
 // Append the new element to the body (or a specific section of the page)
 document.body.appendChild(majorElement);
});

// Task 4: Dynamic artist List (following Lab 3 pattern)
 const addArtistButton = document.getElementById('add-artist');
 addArtistButton.addEventListener('click', function() {

 const interest = prompt("Enter one of your artists:");
 if (interest && interest.trim() !== '') {
 // Create new paragraph element (same as Lab 3)
 const artistElement = document.createElement('p');
 artistElement.textContent = '• ' + interest;
 // Style it a bit
 artistElement.style.backgroundColor = '#f0f8ff';
 artistElement.style.padding = '5px';
 artistElement.style.margin = '5px 0';
 artistElement.style.borderRadius = '3px';
 // Append to container (same concept as Lab 3)
 const container = document.getElementById('artists-container');
 container.appendChild(artistElement);
 }
 });