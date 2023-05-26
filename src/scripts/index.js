import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import '../pages/index.css';

export const popupProfile = document.querySelector('.popup_type_profile');
export const popupCards = document.querySelector('.popup_type_cards');
export const popupImage = document.querySelector('.popup_type_image');
export const buttonAddCard = document.querySelector('.profile__add-button');
export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const nameProfile = document.querySelector('.profile__title');
export const jobProfile = document.querySelector('.profile__subtitle');
export const formProfile = document.querySelector('.form_type_profile');
export const formCards = document.querySelector('.form_type_cards');
export const nameInput = formProfile.querySelector('.form__input_type_name');
export const jobInput = formProfile.querySelector('.form__input_type_job');
export const inputNameCard = formCards.querySelector('.form__input_type_title');
export const inputLinkCard = formCards.querySelector('.form__input_type_link');
export const cardPlaces = document.querySelector('.places');
export const popupImageCard = document.querySelector('.popup__image-card');
export const popupImageTitle = document.querySelector('.popup__image-title');

export const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disable',
  inputErrorClass: 'form__input_invalid',
  errorClass: 'form__error_visible'
};

const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, formCards);
cardValidator.enableValidation();

export const initialCards = [ 
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

const userInfo = new UserInfo(
  {
    name: '.profile__title',
    job: '.profile__subtitle'
  });

function handleProfileFormSubmit (data) { 
  userInfo.setUserInfo(data.profileName, data.profileJob);
  popupWithProfile.close();
}; 

 function handleCardFormSubmit (data) {
  const name = data.profileTitle;
  const link = data.profileLink; 
  const cardsData = { 
    name, 
    link 
  }; 
  cardSection.addItem(createCardElement(cardsData));
  cardValidator.disableButton(); 
};

buttonAddCard.addEventListener('click', openCardPopup); 
buttonEditProfile.addEventListener('click', openProfilePopup);

function openCardPopup() {
  popupWithCard.open();
};

function openProfilePopup() {
  profileValidator.enableButton();
  const {name, job} = userInfo.getUserInfo();
  nameInput.value = name; 
  jobInput.value = job; 
  popupWithProfile.open();
}

function createCardElement(card) {
  const template = document.getElementById('template__elements').content;
  const cardElement = new Card(card, template, handleCardClick);
  const cardIsReady = cardElement.generateCard();
  return cardIsReady;
};

function handleCardClick(name, link) {
  popupWithImage.open(name, link); 
}

const cardSection = new Section({
  items: initialCards,
  renderer: (card) => createCardElement(card),
}, '.places');

cardSection.renderer();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithCard = new PopupWithForm('.popup_type_cards', handleCardFormSubmit)
popupWithCard.setEventListeners();

const popupWithProfile = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit)
popupWithProfile.setEventListeners();