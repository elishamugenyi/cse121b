/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Elisha Mugenyi",
    photo: "images/el.jpg",
    favoriteFoods: ['Rice','Pudding','chapati','pork'],
    hobbies: ['Gyming','Football','Programming'],
    placesLived: []
};

// Add the newPlace object to the placesLived array
myProfile.placesLived.push(
    {
        place: "Wakiso, kajjansi",
        length: "20 years"
    },
    {
        place: "Lweza",
        length: "3 years"
    },
    {
        place: "Ntinda",
        length: "5 years"
    }
);



/* Populate Profile Object with placesLive objects */



// Access the DOM elements and assign values from the myProfile object
document.getElementById("name").textContent = myProfile.name; // Assign name
document.getElementById("photo").src = myProfile.photo; // Assign photo src
document.getElementById("photo").alt = myProfile.name; // Assign photo alt

// Iterate over favoriteFoods and append each item to the ul with ID of favorite-foods
myProfile.favoriteFoods.forEach(food => {
    const li = document.createElement("li"); // Create <li> element
    li.textContent = food; // Assign food as text content
    document.getElementById("favorite-foods").appendChild(li); // Append <li> to <ul>
});

// Repeat the process for hobbies
myProfile.hobbies.forEach(hobby => {
    const li = document.createElement("li"); // Create <li> element
    li.textContent = hobby; // Assign hobby as text content
    document.getElementById("hobbies").appendChild(li); // Append <li> to <ul>
});

// Iterate over placesLived and create <dt> and <dd> elements for each item
myProfile.placesLived.forEach(place => {
    const dt = document.createElement("dt"); // Create <dt> element
    dt.textContent = place.place; // Assign place name as text content of <dt>
    const dd = document.createElement("dd"); // Create <dd> element
    dd.textContent = place.length; // Assign place length as text content of <dd>
    const dl = document.getElementById("places-lived"); // Get <dl> element
    dl.appendChild(dt); // Append <dt> to <dl>
    dl.appendChild(dd); // Append <dd> to <dl>
});
