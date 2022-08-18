export class FormValidator {  //Экспорт класса
  constructor(validSetting, form) {  //Вызов коструктора проверки валидности с параметрами из объекта в validSetting.js
    this._validSetting = validSetting;  //Задаём метод проверки валидности
    this._form = form;  //Задём метод поиска форм
    this._inputList = Array.from(  //Задаём метод поиска полей ввода
      this._form.querySelectorAll(this._validSetting.input)
      );
    this._buttonElement = this._form.querySelector(  //Задаём метод поиска кнопок
      this._validSetting.submitButton
    );
  }

  _showInputError(inputElement, errorMessage) {  //Показ ошибки
    const errorElement = this._form.querySelector(  //Ищем элемент с ошибкой
      `.${inputElement.name}-error`
    );
    inputElement.classList.add(this._validSetting.inputErrorClass);  //Добавляем ему класс ошибки
    errorElement.textContent = errorMessage;  //Текст ошибки
    errorElement.classList.add(this._validSetting.errorClass);  //Включаем показ ошибки
  }

  _hideInputError(inputElement) {  //Скрытие ошибки
    const errorElement = this._form.querySelector(  //Ищем элемент с ошибкой
      `.${inputElement.name}-error`
    );
    inputElement.classList.remove(this._validSetting.inputErrorClass);  //Удаляем у него класс ошибки
    errorElement.textContent = "";  //Сбрасываем текст
    errorElement.classList.remove(this._validSetting.errorClass);  //Выключаем показ ошибки
  }

  _checkInputValidity(inputElement) {  //Проверка корректности
    if (!inputElement.validity.valid) {  //Если невалидно
      this._showInputError(inputElement, inputElement.validationMessage);  //То показываем ошибку
    } else {
      this._hideInputError(inputElement);  //А если валидно, то скрываем
    }
  }

  _setEventListeners() {  //Установка слушателей
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {  //Проходимся по полям ввода
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);  //Добавляем слушатели на сам элемент
        this._toggleButtonState();  //И кнопку
      });
    });
  }

  enableValidation() {  //Включение валидации
    this._setEventListeners();
  }

  _toggleButtonState() {  //Переключение состояния кнопки
    if (this._hasInvalidInput()) {  //Если есть невалидное поле
      this._buttonElement.setAttribute("disabled", "");  //То отключаем кнопку
      this._buttonElement.classList.add(this._validSetting.inactiveButtonClass);  //И довавляем ей класс неактивности
    } else {  //Если такового поля не найдено
      this._buttonElement.removeAttribute("disabled");  //То включаем кнопку
      this._buttonElement.classList.remove(this._validSetting.inactiveButtonClass);  //И удаляем класс неактивности
    }
  }

  _hasInvalidInput() {  //Ищем невалидное поле
    return this._inputList.some((inputElement) => {  //Ищем среди полей ввода поле с ошибкой
      return !inputElement.validity.valid;  //Вернуть невалидно
    });
  }

  resetFormError() {  //Сброс ошибок
    this._toggleButtonState();  //Устанавливаем состояние кнопки
    this._inputList.forEach((inputElement) => {  //Ищем поля ввода
      this._hideInputError(inputElement);  //Скрываем показ ошибки
    });
  }
}
