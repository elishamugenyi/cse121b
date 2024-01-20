/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

//declared and instastiate a fullname variable
const fullName = "Elisha Mugenyi";

//create variable for current year
let currentYear = new Date().getFullYear();

//create variable for image path
let profilePicture = "images/el.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);




/* Step 5 - Array */
let favoriteFoods = ["Guacamole","sushi","steak","Gnut stew"];

// Display the favorite foods array in the HTML element
foodElement.innerHTML = favoriteFoods.join('<br>');

// Declare and instantiate a variable to hold another single favorite food item
let newFavoriteFood = "fish";

// Add the value stored in this new variable to your favorite food array
favoriteFoods.push(newFavoriteFood);

// Display the updated favorite foods array in the HTML element
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Display the modified favorite foods array in the HTML element
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Display the final modified favorite foods array in the HTML element
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;





