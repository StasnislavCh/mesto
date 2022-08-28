import Popup from './Popup.js';  //Импорт класса Popup
export default class PopupWithForm extends Popup {  //Экспорт класса PopupWithForm с Popup
  constructor(popupSection, handleFormSubmit) {  //Вызов коструктора попапа
    super(popupSection);  //Вызов родительского конструктора

    this._form = this._popup.querySelector('.popup__form');  //Задаём форму
    this._inputs = [...this._form.querySelectorAll('.popup__inpute')];  //Задаём поле ввода
    this._values = {};  //Задаём данные
    this._handleFormSubmit = handleFormSubmit;  //Задаём отправку
    this._saveButton = this._popup.querySelector('.popup__save');  //Ищем кнопку сохранить
  }

  _getInputValues() {  //Получаем введённые данные
    this._inputs.forEach((input) => {  //Берём их из массива полей
      this._values[input.name] = input.value;
    });
    return this._values;  //Возвращаем значение
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {  //Устанавливаем слушатели
    super.setEventListeners();  //Вызов родительского конструктора

    this._form.addEventListener('submit', (evt) => {  //Добавляем слушатель
      evt.preventDefault();  //Отменяем стандартное действие
      this._handleFormSubmit(this._getInputValues());  //При отправке данных сначала получаем их
    });
  }

  close() {  //Закрываем попап
    super.close();  //Вызов родительского конструктора

    this._form.reset();  //Сбрасываем значения формы
  }

  onLoading(loading, message) {  //Улучшение UX
  this._saveButton  //Ищем кнопку сохранить
    if (loading) {
      this._saveButton.textContent = 'Сохранение...';  //Пока идёт загрузка, изменяем текст
    } else {
      this._saveButton.textContent = message;
    }
  }
}
