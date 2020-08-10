const fNameInput = document.querySelector('#first-name');
const fNameAlert = document.querySelector('#fName-error');
const lNameInput = document.querySelector('#last-name');
const lNameAlert = document.querySelector('#lName-error');
const genderSelect = document.querySelectorAll(".genderSelect");
const messageArea = document.querySelector('#message-area');
const submitBtn = document.querySelector('#submit-btn');
const successMsg = document.querySelector('.success-message');
const successMsgClose = document.querySelector('#success-msg-close');
let gender;

fNameInput.addEventListener('change', function() {
    validateName(fNameInput, fNameAlert);
});

lNameInput.addEventListener('change', function() {
    validateName(lNameInput, lNameAlert);
});

genderSelect.forEach(function() {
    addEventListener('change', validateGender);
});

messageArea.addEventListener('change', validateMessage);

submitBtn.addEventListener('click', formValidation);

successMsgClose.addEventListener('click', function() {
    successMsg.style.display = 'none';
});

function validateName(input, validationMessage) {
    if(input.value.length < 3 || input.value.length >26 || !(/^[^0-9]+$/.test(input.value))) {
        validationMessage.style.visibility = 'visible';
        input.classList.add('error-box');
        return false;
    }else {
        validationMessage.style.visibility = 'hidden';
        input.classList.remove('error-box');
        return true;
    }
};

function validateGender() {
    const genderAlert = document.querySelector('#gender-error');
    const genderMaleSelected = document.querySelector("#male");
    const genderFemaleSelected = document.querySelector("#female");

    if(genderMaleSelected.checked || genderFemaleSelected.checked) {
        genderAlert.style.visibility = 'hidden';
        for(let i = 0; i < genderSelect.length; i++) {
            if(genderSelect[i].checked) {
                gender = genderSelect[i].value;
            }
        }
        return true;
    } else {
        genderAlert.style.visibility = 'visible';
        return false;
    }
};

function validateMessage() {
    const messageAlert = document.querySelector('#message-error');

    if(messageArea.value.length < 1){
        messageAlert.style.visibility = 'visible';
        messageArea.classList.add('error-box');
        return false;
    }else {
        messageAlert.style.visibility = 'hidden';
        messageArea.classList.remove('error-box');
        return true;
    }
};

function formValidation() {
    const contactingPerson = document.querySelector('#contacting-person');
    const checkfName = validateName(fNameInput, fNameAlert);
    const checklName = validateName(lNameInput, lNameAlert);
    const checkGender = validateGender();
    const checkMessage = validateMessage();

    if(checkfName && checklName && checkGender && checkMessage) {
        contactingPerson.innerHTML = fNameInput.value;
        successMsg.style.display = 'block';
        console.log(`First name: ${fNameInput.value}`);
        console.log(`Last name: ${lNameInput.value}`);
        console.log(`Gender: ${gender}`);
        console.log(`Message: ${messageArea.value}`);
    }else {
        successMsg.style.display = 'none';
    }
};
