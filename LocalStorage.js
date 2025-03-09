let name = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');


submit.addEventListener('click', function() {
    let user_info = []
    user_info.push({ name: name.value, surname: surname.value, email: email.value, password: password.value })
    localStorage.setItem('user_info', JSON.stringify(user_info))
})