'use strict'

$(function() {
    addEvents();
});

function addEvents() {   
    const $fNameInput = $('#first-name');
    const $fNameAlert = $('#fName-error');
    const $lNameInput = $('#last-name');
    const $lNameAlert = $('#lName-error');
    const $genderSelect = $("#contact-form input[type='radio']");
    const $messageArea = $('#message-area');
    const $submitBtn = $('#submit-btn');
    let gender;

    $fNameInput.change(function() {
        validateName($fNameInput, $fNameAlert);
    });

    $lNameInput.change(function() {
        validateName($lNameInput, $lNameAlert);
    });
    
    $genderSelect.change(function() {
        validateGender();
    });
    
    $messageArea.change(function() {
        validateMessage();
    });

    function validateName(input, alert) {
        if(input.val().length < 3 || input.val().length >26 || !(/^[^0-9]+$/.test(input.val()))) {
            alert.css('visibility', 'visible');
            input.addClass('error-box');
            return false;
        }else {
            alert.css('visibility', 'hidden');
            input.removeClass('error-box');
            return true;
        }
    };

    function validateGender() {
        const $genderAlert = $('#gender-error');
        const $genderSelected = $("#contact-form input[type='radio']:checked");

        if($genderSelected.val()) {
            $genderAlert.css('visibility', 'hidden');
            gender = $genderSelected.val();
            return true;
        }else {
            $genderAlert.css('visibility', 'visible');
            return false;
        }
    };

    function validateMessage() {
        const $messageAlert = $('#message-error');

        if($messageArea.val().length < 1){
            $messageAlert.css('visibility', 'visible');
            $messageArea.addClass('error-box');
            return false;
        }else {
            $messageAlert.css('visibility', 'hidden');
            $messageArea.removeClass('error-box');
            return true;
        }
    };

    $submitBtn.click(function(){
        const $contactingPerson = $('#contacting-person');
        const $successMsg = $('.success-message');
        const checkfName = validateName($fNameInput, $fNameAlert);
        const checklName = validateName($lNameInput, $lNameAlert);
        const checkGender = validateGender();
        const checkMessage = validateMessage();

        if(checkfName && checklName && checkGender && checkMessage) {
            $contactingPerson.html($fNameInput.val());
            $successMsg.css('display', 'block');
            console.log(`First name: ${$fNameInput.val()}`);
            console.log(`Last name: ${$lNameInput.val()}`);
            console.log(`Gender: ${gender}`);
            console.log(`Message: ${$messageArea.val()}`);
        }else {
            $successMsg.css('display', 'none');
        }
    });
};