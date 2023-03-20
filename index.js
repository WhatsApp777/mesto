const profileEditBottom = document.querySelector('.profile__editbottom');
const popupProfile = document.querySelector('.popup_type_profile');
const popupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#popup__name');
let dataInput = formElement.querySelector('#popup__data');

function openPopup() {
    popup.classList.add('popup_open');
  
  }
  profileEditBottom.addEventListener('click', openPopup);










  /*
  // функция закрыть попап
  function closePopup(popupName) {
    popupName.classList.remove('.popup_open');
  }
  
  // ===слушатели===
  // закрыть попапы
  popupClose.addEventListener('click', function () { closePopup(popupProfile); });
  
  // открыть попапы
  profileEditBottom.addEventListener('click', function () { openPopup(popupProfile); });
  
  // submit - заглушка
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
  
    console.log(nameInput.value);
    console.log(dataInput.value);
    
    closePopup(popupProfile);
  });
  




/*profileEditBottom.addEventListener('click', function oponPopup(){
    popup.classList.add('.popup_open')
});

/*profileEditBottom.addEventListener('click', () => {
    popup.classList.add('.popup_open');
});*/




/*const openPopup = (popup) => {
    popup.classList.add('.popup_open');
}
const closePopup = (popup) => {
    popup.classList.remove('.popup_open');
}


profileEditBottom.addEventListener('click', () => openPopup(popup));
popupClose.addEventListener('click', () => closePopup(popup));*/