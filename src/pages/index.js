import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';
import { config } from '../utils/constants.js';
import {
    buttonAddCard,
    buttonEditProfile,
    formProfile,
    formCards,
    nameInput,
    jobInput,
    
} from '../utils/constants.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: 'dc5ffe71-d4a2-4ae4-8d8f-113b04708a8c',
    'Content-Type': 'application/json'
  }
});

api.getAppInfo() 
  .then((cardData, userInformation) => {
    cardSection.renderer(cardData);
    userInfo.setUserInfo(userInformation);
    userId = userInformation._id;
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  });

const userInfo = new UserInfo(
  {
    name: '.profile__title',
    job: '.profile__subtitle',
    avatar: '.profile__avatar'
  });

const cardSection = new Section({
  renderer: (cardData) => createCardElement(cardData),
}, '.places');



const profileValidator = new FormValidator(config, formProfile);
profileValidator.enableValidation();
const cardValidator = new FormValidator(config, formCards);
cardValidator.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupWithCard = new PopupWithForm('.popup_type_cards', handleCardFormSubmit);
popupWithCard.setEventListeners();

const popupWithProfile = new PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
popupWithProfile.setEventListeners();

const popupWithCardDelete = new PopupWithConfirmation()
popupWithCardDelete.setEventListeners();

const popupWithAvatarChaange = new PopupWithForm('popup_type_update-avatar', handleAvatarCgangeFormSubmit)
popupWithAvatarChaange.setEventListeners();


function handleAvatarCgangeFormSubmit (data) {

  
/*   api.changeAvatar(data)
    .then((data) => {
      avatar.src = data.avatar
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    }) */
}

function handleProfileFormSubmit (data) { 
  userInfo.setUserInfo(data.profileName, data.profileJob);
}; 

 function handleCardFormSubmit (data) {
  const name = data.profileTitle;
  const link = data.profileLink; 
  const cardsData = { 
    name, 
    link 
  }; 
  cardSection.addItem(createCardElement(cardsData));
};





buttonAddCard.addEventListener('click', openCardPopup); 
buttonEditProfile.addEventListener('click', openProfilePopup);

function openCardPopup() {
  cardValidator.disableButton(); 
  popupWithCard.open();
};

function openProfilePopup() {
  profileValidator.enableButton();
  const {name, job} = userInfo.getUserInfo();
  nameInput.value = name; 
  jobInput.value = job; 
  popupWithProfile.open();
};

function createCardElement(card) {
  const templateSelector = document.getElementById('template__elements').content;
  const cardElement = new Card({
    card, 
    templateSelector, 
    handleCardClick, 
    handleCardDeleteSubmit, 
    userId: userId, 
    api: api
    });
  const newCard = cardElement.generateCard();
  return newCard;
};

function handleCardClick(name, link) {
  popupWithImage.open(name, link); 
};

function handleCardDeleteSubmit(card, cardId) {
  popupWithCardDelete.open(card, cardId);
};



cardSection.renderer();