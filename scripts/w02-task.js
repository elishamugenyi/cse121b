/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

//declared and instastiate a fullname variable
const fullname = "Elisha Mugenyi";

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
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);




/* Step 5 - Array */
let favoriteFoods = ["Guacamole","Fish","sushi","steak","Gnut stew"];

//display my favoriteFoods
foodElement.innerHTML = `<br>${favoriteFoods}`;





