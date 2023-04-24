const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCards = document.querySelector('.popup_type_cards');
const popupImage = document.querySelector('.popup_type_image');
const popupImageCard = document.querySelector('.popup__image-card');
const popupImageTitle = document.querySelector('.popup__image-title');

const buttonAddCard = document.querySelector('.profile__add-button');
const buttonAddClose = document.querySelector('.popup__cards-close-button');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonEditClose = document.querySelector('.popup__close-button');
const buttonImageClose = document.querySelector('.popup__image-close-button');

const templateElements = document.getElementById('template__elements');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

const formProfile = document.querySelector('.form_type_profile');
const formCards = document.querySelector('.form_type_cards');

const nameInput = formProfile.querySelector('.form__input_type_name');
const jobInput = formProfile.querySelector('.form__input_type_job');

const inputNameCard = formCards.querySelector('.form__input_type_title');
const inputLinkCard = formCards.querySelector('.form__input_type_link');
const formSubmit = document.querySelector('.form__submit');
const cardPlaces = document.querySelector('.places');

const buttonCardSubmit = document.querySelector('.form__submit_type_cards');
const buttonProfileSubmit = document.querySelector('.form__submit_type_profile');

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
  const buttonDeleteTrash = imageElement.querySelector('.place__trash'); 
  const buttonPlaceLike = imageElement.querySelector('.place__like');
 
  cardName.textContent = imageData.name; 
  cardImage.src = imageData.link; 
  cardImage.alt = imageData.name; 
 
  cardImage.addEventListener('click', () => {
    openPopup(popupImage)

    popupImageCard.src = imageData.link; 
    popupImageTitle.textContent = imageData.name; 
    popupImageCard.alt = imageData.name;
  });

  buttonDeleteTrash.addEventListener('click', () => {imageElement.remove()}); 
 
  buttonPlaceLike.addEventListener('click', (evt) => { 
    evt.target.classList.toggle('place__like_active'); 
  }); 
 
  return imageElement; 
}; 
 
function renderImageElement(imageElement) { 
  cardPlaces.prepend(imageElement); 
}; 
 
initialCards.forEach((cards) => { 
  const element = createImageElement(cards); 
  renderImageElement(element); 
}); 
 
function handleFormSubmit (event) { 
  event.preventDefault();
  nameProfile.textContent = nameInput.value; 
  jobProfile.textContent = jobInput.value; 
  closePopup(popupProfile); 
}; 

function handlEditCardsSubmit (event) {
  event.preventDefault();
  const name = inputNameCard.value; 
  const link = inputLinkCard.value; 
  const cardsData = { 
    name, 
    link 
  }; 
  
  renderImageElement(createImageElement(cardsData)); 
  event.target.reset();
  closePopup(popupCards); 
}; 

formProfile.addEventListener('submit', handleFormSubmit); 
formCards.addEventListener('submit', handlEditCardsSubmit); 
buttonAddCard.addEventListener('click', openCardPopup);
buttonEditProfile.addEventListener('click', openProfilePopup);
buttonEditClose.addEventListener('click', () => {closePopup(popupProfile)}); 
buttonAddClose.addEventListener('click', () => {closePopup(popupCards)}); 
buttonImageClose.addEventListener('click', () => {closePopup(popupImage)}); 

function openProfilePopup() {
  buttonProfileSubmit.classList.remove('form__submit_disable');
  buttonProfileSubmit.removeAttribute('disabled');
  nameInput.value = nameProfile.textContent; 
  jobInput.value = jobProfile.textContent; 
  openPopup(popupProfile);
}

function openCardPopup() {
  buttonCardSubmit.classList.add('form__submit_disable');
  buttonCardSubmit.setAttribute('disabled', true);
  openPopup(popupCards);
};

function closeByEscape(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

function closeByOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  };
};

function openPopup(popup) { 
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeByOverlay);
  document.addEventListener('keydown', closeByEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeByOverlay);
  document.removeEventListener('keydown', closeByEscape);
};