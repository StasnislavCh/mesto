export class Card {  //Экспорт класса
  constructor(title, link, cardSelector, showPhoto) {  //Вызов коструктора создания карточки
    this._title = title;  //Задаём заголовок
    this._link = link;  //Задаём ссылку
    this._cardSelector = cardSelector;  //Задаём карточку
    this._showPhoto = showPhoto;  //Задаём слушатель показа попапа фото
  }

  _getTemplate() {  //Получаем шаблон
    return document  //Возращаем документ
      .querySelector(this._cardSelector)  //Выбираем карточку
      .content.querySelector(".element")  //Ищем карточку
      .cloneNode(true);  //Клонируем
  }

  _handleLikeElement() {  //Функция лайков
    this._like.classList.toggle("element__like_active");  //Добавляем лайку класс установленного
  }

  _handleDeleteElement() {  //Функция удаления фото
    this._element.remove();  //Ищем и удаляем весь блок фото
  }

  _setEventListener() {  //Функция слушателей кнопок
    this._delete.addEventListener("click", () => {  //Слушатель кнопки удалить
      this._handleDeleteElement();  //Удалить фото
    });
    this._like.addEventListener("click", () => {  //Слушатель кнопки лайк
      this._handleLikeElement();  //Лайк
    });
    this._image.addEventListener("click", () => {  //Слушатель щелчка по фото
      this._showPhoto(this._link, this._title);  //Открыть попап фото
    });
  }

  generateCard() {  //Функция создания нового элемента
    this._element = this._getTemplate();  //Получаем шаблон
    this._image = this._element.querySelector(".element__image");  //Задаём картинку
    this._element.querySelector(".element__title").textContent = this._title;  //Указываем название
    this._like = this._element.querySelector(".element__like");  //Добавляем кнопку лайк
    this._delete = this._element.querySelector(".element__delete");  //Добавляем кнопку удаления
    this._image.src = this._link;  //Передаём адрес картинки в атрибут источник
    this._image.alt = this._title;  //Передаём название картинки в атрибут альт
    this._setEventListener();  //Устанавливаем слушатели кнопок
    return this._element;  //На выходе имеем готовый элемент
  }
}
