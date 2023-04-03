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

const formCards = document.querySelector('.form__cards');
const editCardsForm = formCards.querySelector('.form__cards-submit');

let likePlace = document.querySelector('.place__like');
let likePlaceActive = document.querySelector('.place__like_active');

const templateElements = document.getElementById('template__elements');
const cardPlaces = document.querySelector('.places');



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
  const imageElement = templateElements.content
  .querySelector('.place').cloneNode(true);

  const cardName = imageElement.querySelector('.place__title');
  const cardImage = imageElement.querySelector('.place__img');

  cardName.textContent = imageData.name;
  cardImage.src = imageData.link;
  cardImage.alt = imageData.name;

  const deleteButton = imageElement.querySelector('.place__trash');
  const likeButton = imageElement.querySelector('.place__like');

  deleteButton.addEventListener('click', () => {
    imageElement.remove();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('.place__like_active');
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

addButton.addEventListener('click', () => {
  popupCards.classList.add('popup_opened');
});

closeAddButton.addEventListener('click', closeCardPopup);

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
};

function handlEditCardsSubmit (evt) {
  evt.preventDefault();

  const inputNameCard = formCards.querySelector('.form__cards_type_name');
  const inputLinkCard = formCards.querySelector('.form__cards_type_link');

  const name = inputNameCard.value;
  const link = inputLinkCard.value;

  const cardsData = {
      name,
      link
  };

  renderImageElement(createImageElement(cardsData));
  closeCardPopup ();
};

formCards.addEventListener('submit', handlEditCardsSubmit);

formElement.addEventListener('submit', handleFormSubmit); 

function popupClose() {
  popupProfile.classList.remove('popup_opened');
};

function closeCardPopup () {
  popupCards.classList.remove('popup_opened');
};


