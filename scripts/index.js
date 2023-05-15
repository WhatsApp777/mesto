import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './utilites.js'

const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelectorAll('.popup__close-button');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const formProfile = document.querySelector('.form_type_profile');
const formCards = document.querySelector('.form_type_cards');
const nameInput = formProfile.querySelector('.form__input_type_name');
const jobInput = formProfile.querySelector('.form__input_type_job');
const inputNameCard = formCards.querySelector('.form__input_type_title');
const inputLinkCard = formCards.querySelector('.form__input_type_link');
const cardPlaces = document.querySelector('.places');

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disable',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__error_visible'
};

const profileValidator = new FormValidator(config, formProfile);
const cardValidator = new FormValidator(config, formCards);
const profileSubmitEnable = new FormValidator(config, formProfile);
const cardSubmitEnable = new FormValidator(config, formCards);

const initialCards = [ 
  { 
    name: 'Архыз', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' 
  }, 
  { 
    name: 'Челябинская область', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' 
  }, 
  { 
    name: 'Иваново', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' 
  }, 
  { 
    name: 'Камчатка', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' 
  }, 
  { 
    name: 'Холмогорский район', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' 
  }, 
  { 
    name: 'Байкал', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' 
  } 
]; 

const formsArray = Array.from(document.querySelectorAll('.form'));

formsArray.forEach((formElement) => {
    profileValidator.enableValidation(formElement);
    cardValidator.enableValidation(formElement);
});

function handleProfileFormSubmit (event) { 
  event.preventDefault();
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value; 
  closePopup(popupProfile); 
}; 

 function handleCardFormSubmit (event) {
  event.preventDefault();
  const name = inputNameCard.value; 
  const link = inputLinkCard.value; 
  const cardsData = { 
    name, 
    link 
  }; 
  
  cardPlaces.prepend(createCardElement(cardsData));
  event.target.reset();
  closePopup(popupCards); 
};

formProfile.addEventListener('submit', handleProfileFormSubmit); 
formCards.addEventListener('submit', handleCardFormSubmit); 
buttonAddCard.addEventListener('click', openCardPopup);
buttonEditProfile.addEventListener('click', openProfilePopup);

popupCloseButton.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {closePopup(popup)});
});

function openProfilePopup() {
  profileSubmitEnable.enableButton();
  nameInput.value = nameProfile.textContent; 
  jobInput.value = jobProfile.textContent; 
  openPopup(popupProfile);
}

function openCardPopup() {
  cardSubmitEnable.disableButton();
  openPopup(popupCards);
};

function createCardElement(card) {
  const cardElement = new Card(card, '#template__elements');
  const cardIsReady = cardElement.generateCard();
  return cardIsReady;
};

initialCards.forEach((card) => {
  cardPlaces.prepend(createCardElement(card));
});