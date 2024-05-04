const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

    <style>
        /* Add your CSS styling here */
    </style>
</head>
<body>
    <form id="loginForm">
        <input type="email" id="email" placeholder="Enter your email" required>
        <input type="password" id="password" placeholder="Enter your password" required>
        <button type="submit">Submit</button>
    </form>

    <script>
        document.getElementById('loginForm').onsubmit = function(event) {
            event.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            // Hash the password using a strong hashing algorithm
            // Send the hashed password and email to the server
        };
