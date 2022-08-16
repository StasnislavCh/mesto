export default class Popup { //Экспорт класса
  constructor(popupSelector) {  //Вызов коструктора попапа
    this._popup = document.querySelector(popupSelector);  //Задаём попап
    this._handleEscClose = this._handleEscClose.bind(this);  //Задаём закрытие по Esc
  }

  open() {  //Открываем попап
    this._popup.classList.add('popup_opened');  //Добавляем попапу класс видимости
    document.addEventListener('keydown', this._handleEscClose);  //Добавляем попапу слушатель кнопки Esc
  }

  close() {  //Закрываем попап
    this._popup.classList.remove('popup_opened');  //Удаляем у попапа класс видимости
    document.removeEventListener('keydown', this._handleEscClose);  //Удаляем у попапа слушатель кнопки Esc
  }

  _handleEscClose(evt) {  //Слушатель нажатия Esc
    if (evt.key === "Escape") {  //Если нажат Esc, то
      this.close();  //Закрыть попап
    }
  }

  setEventListeners() {  //Устанавливаем слушатели
    const closeButton = this._popup.querySelector('.popup__close');  //Ищем крестик
    this._popup.addEventListener("mousedown", (evt) => {  //Добавляем слушатель
      if (evt.target.classList.contains('popup') || evt.target === closeButton) {  //Если нажатие на попапе или крестике,
        this.close();  //то закрыть попап
      }
    });
  }
}
