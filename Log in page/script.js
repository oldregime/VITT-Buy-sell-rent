function validateCredentials() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var validEmail = "123"; 
    var validPassword = "123";

    if (email === validEmail && password === validPassword) {
        // alert('Correct credentials. Redirecting to content...');
        return true;
    } else {
        alert('Sorry, incorrect credentials. Please try again.');
        return false;
    }
}