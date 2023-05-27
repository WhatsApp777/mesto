import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, title) {
        super.open();
        this._popupImageCard.src = title; 
        this._popupImageTitle.textContent = name; 
        this._popupImageCard.alt = name;
    }
}