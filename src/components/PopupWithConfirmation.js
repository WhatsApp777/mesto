import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleCardDeleteSubmit) {
        super(popupSelector);
        this._handleCardDeleteSubmit = handleCardDeleteSubmit;
        this._form = this._popup.querySelector('.form');
    }

    open(card, cardId) {
        this._card = card;
        this._cardId = cardId;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleCardDeleteSubmit(this._card, this._cardId);
            this.close();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}