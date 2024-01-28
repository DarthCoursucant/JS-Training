const signupform = document.querySelector("form#signup");
signupform.addEventListener("submit", validateForm); 

const username = document.querySelector("input#username");
const password = document.querySelector("input#password");
const email = document.querySelector("input#email");
const email2 = document.querySelector("input#email2");
const tc = document.querySelector("input#tc");
const news = document.querySelector("input#news");
const promos = document.querySelector("input#promos");



function validateForm(event){
    event.preventDefault();
    //console.log(event);
    let sendit = false;  

    // Get all input from form elements
    let usernameValue = username.value;
    let passwordValue = password.value;
    let emailValue = email.value;
    let email2Value = email2.value;
    let tcChecked = tc.checked;
    let newsChecked = news.checked;
    let promosChecked = promos.checked;
    // Let's see what we got
    console.log(usernameValue, passwordValue, emailValue, email2Value, tcChecked, newsChecked, promosChecked); 

    // Validate Username
    // - needs to be at least 6 characters long

    // Validate Password
    // - needs to be at least 8 characters long
    // - needs to contain at least one digit
    // - needs to contain at least one lower case letter
    // - needs to contain at least one upper case letter

    // Validate Email x 2
    // - needs to be a valid email 
    // - retype needs to be the same as the other E-mail

    // Validate T&C
    // - needs to be checked

    // Valdate news and promos
    // - at least one of which needs to be checked

    if (sendit) signupform.submit();

}
