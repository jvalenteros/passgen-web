function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    // init empty string for chars
    let chars = '';
    
    // append uppercase letters if selected
    if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // append lowercase letters if selected
    if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    
    // append numbers if selected
    if (numbers) chars += '0123456789';
    
    // append symbols if selected
    if (symbols) chars += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

    if (chars === '') {
        alert('At least one character type');
        return;
    }

    // ranomly select chars from the string based on the length
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const passwordInput = document.getElementById('password');
    passwordInput.value = password;
    
    // triggers the pulse animation
    passwordInput.classList.add('animate-pulse');
    setTimeout(() => {
        passwordInput.classList.remove('animate-pulse');
    }, 300);
}

document.getElementById('generate').addEventListener('click', generatePassword);

// password on page load
document.addEventListener('DOMContentLoaded', generatePassword);