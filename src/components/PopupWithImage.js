import Popup from "./Popup.js";  //Импорт класса Popup
export default class PopupWithImage extends Popup {  //Экспорт класса PopupWithImage с Popup
  constructor(popupSelector) {  //Вызов коструктора попапа
    super(popupSelector);  //Вызов родительского конструктора

    this._image = this._popup.querySelector('.popup__image');  //Задаём картинку
    this._caption = this._popup.querySelector('.popup__caption');  //Задаём описание
  }

  open(title, link) {  //Открываем попап
    super.open();  //Вызов родительского конструктора

    this._image.src = link;  //Задаём картинку
    this._image.alt = title;  //Задаём alt
    this._caption.textContent = title;  //Задаём описание
  }
}
