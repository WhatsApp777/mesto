const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');
const popupImage = document.querySelector('.popup_type_image');
const popupImageCard = document.querySelector('.popup__image-card');
const popupImageTitle = document.querySelector('.popup__image-title');

const addButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__cards-close-button');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const closeCardButton = popupImage.querySelector('.popup__image-close-button');

const templateElements = document.getElementById('template__elements');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

const formElement = document.querySelector('.form');
const formProfile = document.querySelector('.form_type_profile');
const formCards = document.querySelector('.form_type_cards');

const nameInput = formProfile.querySelector('.form__input_type_name');
const jobInput = formProfile.querySelector('.form__input_type_job');

const inputNameCard = formCards.querySelector('.form__input_type_title');
const inputLinkCard = formCards.querySelector('.form__input_type_link');

const editCardsForm = formElement.querySelector('.form__cards-submit'); 
const cardPlaces = document.querySelector('.places');

nameInput.value = nameProfile.textContent; 
jobInput.value = jobProfile.textContent; 

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
 
const createImageElement = (imageData) => { 
  const imageElement = templateElements.content.querySelector('.place').cloneNode(true); 
  const cardName = imageElement.querySelector('.place__title'); 
  const cardImage = imageElement.querySelector('.place__img'); 
  const closeImagePopup = document.querySelector('.popup__image-close-button'); 
  const deleteButton = imageElement.querySelector('.place__trash'); 
  const likeButton = imageElement.querySelector('.place__like'); 
 
  cardName.textContent = imageData.name; 
  cardImage.src = imageData.link; 
  cardImage.alt = imageData.name; 
 

  popupImageCard.src = imageData.link; 
  popupImageTitle.textContent = imageData.name; 
  popupImageCard.alt = imageData.name; 


  cardImage.addEventListener('click', () => {openPopup(popupImage)});
  closeImagePopup.addEventListener('click', () => {closePopup(popupImage)}); 
 
  deleteButton.addEventListener('click', () => { 
    imageElement.remove(); 
  }); 
 
  likeButton.addEventListener('click', function (evt) { 
    evt.target.classList.toggle('place__like_active'); 
  }); 
 
  return imageElement; 
}; 
 
const renderImageElement = (imageElement) => { 
  cardPlaces.prepend(imageElement); 
}; 
 
initialCards.forEach((cards) => { 
  const element = createImageElement(cards); 
  renderImageElement(element); 
}); 
 
function handleFormSubmit (evt) { 
  evt.preventDefault(); 
 
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value; 
 
  closePopup(popupProfile); 
}; 
 
function handlEditCardsSubmit (evt) { 
  evt.preventDefault(); 

  const name = inputNameCard.value; 
  const link = inputLinkCard.value; 
 
  const cardsData = { 
    name, 
    link 
  }; 
 
  renderImageElement(createImageElement(cardsData)); 
   
  closePopup(popupCards); 
}; 

formProfile.addEventListener('submit', handleFormSubmit); 
formCards.addEventListener('submit', handlEditCardsSubmit); 

addButton.addEventListener('click', () => {openPopup(popupCards)});
editButton.addEventListener('click', () => {openPopup(popupProfile)});

closeButton.addEventListener('click', () => {closePopup(popupProfile)}); 
closeAddButton.addEventListener('click', () => {closePopup(popupCards)}); 

function openPopup(popup) { 
  popup.classList.add('popup_opened'); 
}; 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};