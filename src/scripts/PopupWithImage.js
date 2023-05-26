import Popup from './Popup.js';
import { popupImageCard, popupImageTitle } from './index.js';

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageCard = popupImageCard;
        this._popupImageTitle = popupImageTitle;
    }

    open(name, title) {
        super.open();
        this._popupImageCard.src = title; 
        this._popupImageTitle.textContent = name; 
        this._popupImageCard.alt = name;
    }
}