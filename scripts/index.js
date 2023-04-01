const popupCards = document.querySelector('.popup__cards');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = popupCards.querySelector('.popup__cards-close-button');

const popupProfile = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');

const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_type_name');
let jobInput = formElement.querySelector('.form__input_type_job');

let formCards = document.querySelector('.form__cards');
let placeName = formCards.querySelector('.form__cards-input_type_name');
let placeLink = formCards.querySelector('.form__cards-input_type_link');

let likePlace = document.querySelector('.place__like');
let likePlaceActive = document.querySelector('.place__like_active');

likePlace.addEventListener('click', () => {
  likePlace.getElementsByClassName('.place__like_active');
});

addButton.addEventListener('click', () => {
  popupCards.classList.add('popup_opened');
});

closeAddButton.addEventListener('click', () => {
  popupCards.classList.remove('popup_opened');
});

editButton.addEventListener('click', function popupOpen() {
  popupProfile.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

closeButton.addEventListener('click', popupClose);

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit); 

function popupClose() {
  popupProfile.classList.remove('popup_opened');
};




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
