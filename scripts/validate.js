const config = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_disable',
    inputErrorClass: 'form__input_invalid',
    errorClass: 'form__error_visible'
};

function enableButton(button){
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled');
};
function disableButton(button){
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', true);
};
function hasValidInput(inputSelector){
    return inputSelector.every((input) => {
        return input.validity.valid;
    });
};
function toggleButtonValidity(inputSelector, formSelector){
    const buttonElement = formSelector.querySelector(config.submitButtonSelector);
    if (hasValidInput(inputSelector)){
        enableButton(buttonElement);
    } else {
        disableButton(buttonElement);
    }
};

function setEventListeners(formSelector){
    const inputSelector = formSelector.querySelectorAll(config.inputSelector);
    const inputsArray = Array.from(inputSelector);
    toggleButtonValidity(inputsArray, formSelector);
    inputsArray.forEach(function (input) {
        input.addEventListener('input', () => {
            checkInputValidity(input);
            toggleButtonValidity(inputsArray, formSelector);
        });
    });
};

function enableValidation(config){
    const formSelector = document.querySelectorAll(config.formSelector);
    const formArray = Array.from(formSelector);
    
    formArray.forEach(function(formSelector){
        setEventListeners(formSelector);
    });
};

function removeInputError(input, inputErrorClass){
    input.classList.remove(config.inputErrorClass);
    inputErrorClass.classList.remove(config.errorClass);
    inputErrorClass.textContent = '';
};
function showInputError(input, inputErrorClass){
    input.classList.add(config.inputErrorClass);
    inputErrorClass.classList.add(config.errorClass);
    inputErrorClass.textContent = input.validationMessage;
};
function checkInputValidity(input){
    const inputErrorClass = document.querySelector(`#error-${input.id}`);
    if (input.validity.valid) {
        removeInputError(input, inputErrorClass);
    } else {
        showInputError(input, inputErrorClass);
    };
};

enableValidation(config);