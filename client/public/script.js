const userData = {};
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const birthDate = document.getElementById('birth-date');
const email = document.getElementById('email');
const confirmPassword = document.getElementById('confirm-password').value;
const regBtn = document.getElementById('reg-button');
const form = document.getElementById('form')


//Form data post to api using axios 
form.onsubmit = (event) => {
    event.preventDefault;

    userData.name = name.value;
    userData.surname = surname.value;
    userData.birthDate = birthDate.value;
    userData.email = email.value;
    userData.password = password.value;
    
    axios.post('http://127.0.0.1:3000/users/add', userData)
};

//Password confirmation 
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm-password");

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

//customs checkboxes control
const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById('checkbox2')

checkbox1.addEventListener('click', () => {
    checkbox1.innerText = checkbox1.innerText=='check_box'? 'check_box_outline_blank' : 'check_box'
})

checkbox2.addEventListener('click', () => {
    checkbox2.innerText = checkbox2.innerText=='check_box'? 'check_box_outline_blank' : 'check_box'
})



