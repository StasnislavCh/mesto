import Popup from "./Popup.js";  //Импорт класса Popup
export default class PopupDelete extends Popup {  //Экспорт класса PopupDelete с Popup
  constructor(popupSelector) {
    super(popupSelector);  //Вызов родительского конструктора

    this._form = this._popup.querySelector('.popup__form_photo_del');  //Задаём форму удаления
  }

  open(deleteElement) {
    super.open();  //Вызов родительского конструктора
    this._deleteElement = deleteElement;
  }

  _handleDeleteElement = (evt) => {  //Удаление картинки
    evt.preventDefault();
    this._deleteElement();
  }

  setEventListeners() {  //Установка слушателей
    super.setEventListeners();  //Вызов родительского конструктора
    this._form.addEventListener('submit', this._handleDeleteElement)  //При отправке формы удаляем картинку
  }
}
