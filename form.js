// Function that validate the data sent from the form
function validateForm() {

    let fname = document.contactForm.fname.value;
    let email = document.contactForm.email.value;
    let phone = document.contactForm.phone.value;
    let landline = document.contactForm.landline.value;

    // Regular Expressions
    let regexNum = /\d/;
    let regexEmail = /^\S+@\S+\.\S+$/;
    let regexTel = /^(\+?)(?:[0-9] ?){6,14}[0-9]$/;

    let controls = document.getElementsByClassName("required");
    let fnameC = document.getElementsByClassName("fnameC");
    let emailC = document.getElementsByClassName("emailC");
    let phoneC = document.getElementsByClassName("phoneC");
    let llC = document.getElementsByClassName("llC");

    let succes = true;

    // Validate that fields are not empty
    for(let i = 0; i < controls.length; i++) {
        if (controls[i].value == "") {
            succes = false;
            controls[i].parentNode.classList.add("error");
        }
        else {
            controls[i].parentNode.classList.remove("error");
        }
    }

    // Validate that the name does not contain digits.
    for(let i = 0; i < fnameC.length; i++) {
        if(regexNum.test(fname) == true || !fname){
            succes = false;
            fnameC[i].parentNode.classList.add("error");
        } else {
            fnameC[i].parentNode.classList.remove("error");
        }
    }

    // Validate email format
    for(let i = 0; i < emailC.length; i++) {
        if(regexEmail.test(email) == false) {
            succes = false;
            emailC[i].parentNode.classList.add("error");
        } else {
            emailC[i].parentNode.classList.remove("error");
        }
    }

    // Validate landline format
    for(let i = 0; i < llC.length; i++) {
        if(regexTel.test(landline) == false) {
            succes = false;
            llC[i].parentNode.classList.add("error");
        } else {
            llC[i].parentNode.classList.remove("error");
        }
    }

    // Validate phone format
    for(let i = 0; i < phoneC.length; i++) {
        if(regexTel.test(phone) == false) {
            succes = false;
            phoneC[i].parentNode.classList.add("error");
        } else {
            phoneC[i].parentNode.classList.remove("error");
        }
    }

    return succes;
}