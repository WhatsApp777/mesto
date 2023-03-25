const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popupProfile = document.querySelector('.popup');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_name');
let jobInput = formElement.querySelector('.form__input_job');

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