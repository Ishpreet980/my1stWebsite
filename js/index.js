function validateForm(){
    var name = document.forms["contact-form"]["name"];
    var email = document.forms["contact-form"]["email"];
    var addr = document.forms["contact-form"]["address"];
    var city = document.forms["contact-form"]["city"];
    var postalCode = document.forms["contact-form"]["postal"];
    var purpose = document.getElementsByName('purpose');
    var message = document.forms["contact-form"]["message"];
    var pph = document.forms["contact-form"]['pph'];
    var postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/;
    var rateRegex = /^[1-9]\d*(\.\d+)?$/;

    if(name.value == ""){
        alert("Name must be filled.");
        name.focus();
        return false;
    }
    if(email.value == ""){
        alert("Email must be filled.");
        email.focus();
        return false;
    }
    if(address.value == ""){
        alert("Address must be filled.");
        address.focus();
        return false;
    }
    if(city.value == ""){
        alert("City must be filled.");
        city.focus();
        return false;
    }
    if(postalCode.value == ""){
        alert("Postal code must be filled.");
        postalCode.focus();
        return false;
    }
    else if(!postalCodeRegex.test(postalCode.value)){
        alert("Postal code is not valid");
        postalCode.focus();
        return false;
    }
    if(displayRadioValue(purpose)== ''){
        alert("Select one from what is this about.");
        document.getElementById('radio-container').focus();
        return false;
    }
    else if(displayRadioValue(purpose)=='hiring'){
        if(pph.value == ""){
            alert("Please enter an hourly rate");
            pph.focus();
            return false;
        }
        else if(!rateRegex.test(pph.value)){
            alert("Please enter a valid hourly rate");
            pph.focus();
            return false;
        }
    }
    if(message.value == ""){
        alert("Please leave me a message");
        message.focus();
        return false;
    }
    
}



function handleChange(id) {
    var radioBtn = document.getElementById(id).value;
    let pph = document.getElementById('pph');
    if(radioBtn=='hiring'){
        if(pph.classList.contains('hidden')){
            pph.classList.remove('hidden');
        }
    }
    else{
        if(!pph.classList.contains('hidden')){
            pph.classList.add('hidden');
        }
    }
    
}

function displayRadioValue(purpose) {
    let result = "";
    for(i = 0; i < purpose.length; i++) {
        if(purpose[i].checked)
        result = purpose[i].value 
    }
    return result;
}