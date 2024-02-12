    const fetchRandomUser = async () => {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            console.error('Failed to fetch random user:', response.statusText);
            return;
        }
        const data = await response.json();
        const user = data.results[0];

        const userContainer = document.getElementById('user-container');
        userContainer.innerHTML = `
            <img src="${user.picture.large}" alt="User Image">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>Email: ${user.email}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
        `;
    };

    document.getElementById('fetch-btn').addEventListener('click', fetchRandomUser);
