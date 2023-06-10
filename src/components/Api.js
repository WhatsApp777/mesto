export default class Api {
    constructor(options){
        this._url = options.url;
        this._headers = options.headers;
        this._authorization = options.headers.authorization; //token
    }

    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
            metod: 'GET',
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    getInitialCards(){
        return fetch(`${this._url}/cards`, {
            metod: 'GET',
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    getAppInfo(){
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }

    editProfile(name, about){
        return fetch(`${this._url}/users/me`, {
            metod: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
        .then(this._handleResponse);
    }

    editCard(name, link){
        return fetch(`${this._url}/cards`, {
            metod: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._handleResponse);
    }

    deleteCard(cardId){
        return fetch(`${this._url}/cards/${cardId}`, {
            metod: 'DELETE',
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    like(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            metod: 'PUT',
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    deleteLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            metod: 'DELETE',
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    removeLike(cardId){
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            metod: 'DELETE',
            headers: this._headers
        })
        .then(this._handleResponse);
    }

    changeAvatar(url){
        return fetch(`${this._url}/users/me/avatar`, {
            metod: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: url
            })
        })
        .then(this._handleResponse);
    }

    _handleResponse(res){
        if(res.ok){
            res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
}