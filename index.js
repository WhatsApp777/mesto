const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popupProfile = document.querySelector('.popup_type_profile');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('#profile-name');
let jobInput = formElement.querySelector('#profile-job');


editButton.addEventListener('click', function () {
  openPopup(popupProfile)
});
closeButton.addEventListener('click', function () { 
  closePopup(popupProfile); 
});

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const name =  nameInput.value;
  nameProfile.textContent = name;
  const job = jobInput.value;
  jobProfile.textContent = job;
  closePopup(popupProfile);
});