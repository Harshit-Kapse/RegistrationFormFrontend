const form = document.getElementById('form-id');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submit = document.getElementById('btn');

form.addEventListener('submit', (obj) => {
    // below line will ensure that if we click sumbit button then it will not get refreshed.
    obj.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required.');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address.');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be atleast 8 characters.');
    } else if(passwordValue.length > 15) {
        setError(password, 'Password should contain less than 15 charaters.');
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password.');
    } else if(confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'Password doesn\'t match');
    } else {
        setSuccess(confirmPassword);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = "";

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (emailValue) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(emailValue);
}