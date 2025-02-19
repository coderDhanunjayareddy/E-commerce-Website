document.getElementById('signup-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    const userData = {
        userid: userid,
        user: name,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3013/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            alert('User registered successfully');
        } else if (response.status === 409) {
            alert('User already exists');
        } else {
            alert('Error registering user');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});
