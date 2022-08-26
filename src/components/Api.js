export default class Api {  //Экспорт класса Api
  constructor(apiId) {  //Вызов коструктора Api
    this._url = apiId.url;  //Задаём ссылку
    this._headers = apiId.headers;  //Задаём заголовок
  }

  _testConnection(res) {  //Тест соединения
    console.log(res)  //Вывести в консоль
    if (res.ok) {  //Если всё ок
      return res.json();  //То вывести json
    }
    return Promise.reject(`Ошибка: ${res.status}`);  //Если нет, то вывести ошибку
  }

  getUserInfoApi() {  //Получение инфо о юзере
    return fetch(`${this._url}users/me`, {  //Указываем адрес
      method: "GET",  //метод
      headers: this._headers  //и заголовок
    })
      .then(this._testConnection);
  }

  getInitialCards() {  //Загрузка начальных карточек
    return fetch(`${this._url}cards`, {
      method: "GET",  //метод
      headers: this._headers
    })
      .then(this._testConnection);
  }

  setUserInfoApi(name, job) {  //Установка имени юзера и работы
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job
      })
    })
      .then(this._testConnection);
  }

  addNewElement(title, url) {  //Добавление нового элемента
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: title,
        link: url
      })
    })
      .then(this._testConnection);
  }

  deleteElement(id) {  //Удаление элемента
    return fetch(`${this._url}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._testConnection);
  }

  like(id) {  //Установка лайка
    return fetch(`${this._url}cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._testConnection);
  }

  unlike(id) {  //Снятие лайка
    return fetch(`${this._url}cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._testConnection);
  }

  changeAvatar(item) {  //Смена аватара
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: item.url
      })
    })
      .then(this._testConnection);
  }
}

export const apiId = new Api({  //Экспорт идентификатора
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
  headers: {
    authorization: 'bf0486f9-3daf-4fe5-a38c-cc62044e9a6a',
    'Content-Type': 'application/json'
  }
});
