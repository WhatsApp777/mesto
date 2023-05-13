import { openPopup } from './utilites.js';
import { popupImage } from './utilites.js';

class Card {

  constructor(data, templateSelector){
    this._name = data.name;
    this._title = data.link;
    this._template = templateSelector;
  }

  _getTemplate = () => {
    this._template = document.getElementById('template__elements').content;
    this._imageElement = this._template.cloneNode(true).children[0];
    return this._imageElement;
  }

  _deleteCard = () => {
    this._imageElement.remove();
  }

  _like = (evt) => {
    evt.target.classList.toggle('place__like_active');
  }

  _handleOpenPopup = () => {
    openPopup(popupImage);
    this._popupImageCard = document.querySelector('.popup__image-card');
    this._popupImageTitle = document.querySelector('.popup__image-title');

    this._popupImageCard.src = this._title; 
    this._popupImageTitle.textContent = this._name; 
    this._popupImageCard.alt = this._name;
  }

  _setEventListeners = () => {
    this._buttonDeleteTrash.addEventListener('click', () => {
      this._deleteCard();
    });
    this._buttonPlaceLike.addEventListener('click', (evt) => {
      this._like(evt);
    });
    this._buttonImage.addEventListener('click', () => {
      this._handleOpenPopup();
    })
  };

  generateCard = () => {
    this._cardElement = this._getTemplate();
    this._buttonDeleteTrash = this._imageElement.querySelector('.place__trash'); 
    this._buttonPlaceLike = this._imageElement.querySelector('.place__like');
    this._buttonImage = this._imageElement.querySelector('.place__img');
    this._cardName = this._imageElement.querySelector('.place__title'); 
    this._cardImage = this._imageElement.querySelector('.place__img');

    this._cardName.textContent = this._name; 
    this._cardImage.src = this._title; 
    this._cardImage.alt = this._name; 

    this._setEventListeners();
    return this._cardElement;
  }
}

export { Card };