function login(e) {
    e.preventDefault();
    
    // Retrieve form data
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    if (!email || !password) {
        document.body.innerHTML += `<div style="color:red;">Please provide both email and password.</div>`;
        return;
    }

    const loginDetails = {
        email: email,
        password: password
    };

    axios.post('http://localhost:3000/user/login', loginDetails)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userDetails', JSON.stringify(response.data.user));
                window.location.href = "../ExpenseTracker/index.html";
            } else {
                throw new Error('Failed to login');
            }
        })
        .catch(err => {
            // Display error message
            document.body.innerHTML += `<div style="color:red;">${err}</div>`;
        });
}

function forgotPassword() {
    window.location.href = "../ForgotPassword/index.html";
}

document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('forgotPasswordBtn').addEventListener('click', forgotPassword);
