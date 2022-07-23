const showInputError = (formElement, inputElement, errorMessage, property) => {  //Функция показа ошибки
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);  //Ищем элемент с ошибкой
  inputElement.classList.add(property.inputErrorClass);  //Добавляем класс ошибки
  errorElement.textContent = errorMessage;  //Сообщение об ошибке
  errorElement.classList.add(property.errorClass);  //Добавляем класс ошибки
};

const hideInputError = (formElement, inputElement, property) => {  //Функция скрытия ошибки
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);  //Ищем класс ошибки
  inputElement.classList.remove(property.inputErrorClass);  //Удаляем класс ошибки
  errorElement.textContent = '';  //Удаляем сообщение
  errorElement.classList.remove(property.errorClass);  //Удаляем класс ошибки
};

const checkInputValidity = (formElement, inputElement, property) => {  //Функция проверки на валидность
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, property);  //Если не валидно, то показать ошибку
  } else {
    hideInputError(formElement, inputElement, property);  //Если валидно, не показывать ошибку
  };
};

const setEventListeners = (formElement, property) => {  //Функция установки слушателей
  const inputList = Array.from(formElement.querySelectorAll(property.inputSelector));  //Делаем массив из полей ввода
  const buttonElement = formElement.querySelector(property.submitButtonSelector);  //Ищем кнопки
  toggleButtonState(inputList, buttonElement, property);  //Устанавливаем состояние кнопки Сохранить
  inputList.forEach((inputElement) => {  //Проходимся по массиву полей
    inputElement.addEventListener('input', function () {  //Добавляем слушатель валидности
      checkInputValidity(formElement, inputElement, property);  //Проверка валидности
      toggleButtonState(inputList, buttonElement, property);  //Состояние кнопки
    });
  });
};

const enableValidation = (property) => {  //Функция включения валидации
  const formList = Array.from(document.querySelectorAll(property.formSelector));  //Делаем массив из форм
  formList.forEach((formElement) => {  //Проходимся по массиву форм
    formElement.addEventListener('submit', (evt) => {  //Функция добавления слушателей
      evt.preventDefault();  //Отмена стандартного действия
    });
    setEventListeners(formElement, property);  //Установка слушателей
  });
};

const toggleButtonState = (inputList, buttonElement, property) => {  //Функция включения/выключения кнопки
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', '');  //Если есть ошибка или поле пустое, то кнопка отключена
    buttonElement.classList.add(property.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');  //Если ошибок нет, то кнопка включена
    buttonElement.classList.remove(property.inactiveButtonClass);
  };
};

const hasInvalidInput = (inputList) => {  //Сборщик валидности полей
  return inputList.some((inputElement) => {  //Проходимся по полям ввода
    return !inputElement.validity.valid;  //Возвращаем валидно или нет
  });
};

const resetFormError = (property, popup) => {  //Функция для сброса ошибок в формах
  const formElement = popup.querySelector(property.formSelector);  //Ищем элементы формы
  const inputList = Array.from(formElement.querySelectorAll(property.inputSelector));  //Делаем массив из полей ввода
  const buttonElement = formElement.querySelector(property.submitButtonSelector);  //Ищем кнопки
  inputList.forEach(inputElement => hideInputError(formElement, inputElement, property));  //Скрываем ошибки
  toggleButtonState(inputList, buttonElement, property);  //Устанавливаем состояние кнопки
};

enableValidation({  //Объект с необходимым для проверки на валидность
  formSelector: '.popup__form',  //Форма
  inputSelector: '.popup__inpute',  //Поле ввода
  submitButtonSelector: '.popup__save',  //Кнопка Сохранить активна
  inactiveButtonClass: 'popup__save_disabled',  //Кнопка Сохранить неактивна
  inputErrorClass: 'popup__inpute_type_error',  //Выделение ошибки
  errorClass: 'popup__error_visible'  //Показ ошибки
});
