import {initialCards} from './initialCards.js';  //импорт массива
//import {Card} from './Card.js';  //импорт класса Card
import {FormValidator} from './FormValidator.js';  //импорт класса FormValidator

const validSetting = {  //Объект с необходимым для функции сброса ошибок
  formSelector: '.popup__form',
  inputSelector: '.popup__inpute',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__inpute_type_error',
  errorClass: 'popup__error_visible'
};

const buttonAdd = document.querySelector('.profile__add');  //Ищем кнопку добавления фото
const popupAdd = document.querySelector('.popup_photo_add');  //Ищем попап добавить фото
const formAddElement = popupAdd.querySelector('.popup__form_photo_add');  //Ищем форму в добавить фото
const placeTitle = formAddElement.querySelector('.popup__inpute_field_title');  //Получаем введённое название места
const placeLink = formAddElement.querySelector('.popup__inpute_field_link');  //Получаем введённую ссылку
const templateCard = document.querySelector('.template-card').content;  //Получаем шаблон
const elementsSection = document.querySelector('.elements');  //Получаем элемент

const buttonEdit = document.querySelector(".profile__edit");  //Ищем кнопку изменить
const popupInfo = document.querySelector('.popup_edit_info');  //Ищем попап редактирования
const formEditElement = popupInfo.querySelector('.popup__form_edit_info');  //Ищем форму в попапе редактирования
const profileName = document.querySelector('.profile__name');  //Ищем имя пользователя
const job = document.querySelector('.profile__job');  //Ищем работу пользователя
const profileNameInpute = formEditElement.querySelector('.popup__inpute_field_name');  //Получаем введённое имя пользователя
const jobInpute = formEditElement.querySelector('.popup__inpute_field_job');  //Получаем введённую работу пользователя

const popupPhoto = document.querySelector('.popup_photo_big');  //Ищем попап фото
const popupImage = popupPhoto.querySelector('.popup__image');  //Сюда изображение
const popupCaption = popupPhoto.querySelector('.popup__caption');  //Сюда описание

const closeButtons = document.querySelectorAll('.popup__close');  //Ищем все кнопки закрыть по универсальному селектору
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');  //Находим 1 раз ближайший к крестику попап
  button.addEventListener('click', () => closePopup(popup));  //Слушатель нажатия кнопки закрыть
});

function showPopup(popup) {  //Функция показа попапа
  popup.classList.add('popup_opened');  //Добавляем попапу класс видимости
  document.addEventListener('keydown', handleEscClose);  //Добавляем слушатель кнопки Esc
  document.addEventListener('mousedown', handleClickClose);  //Добавляем слушатель клика
};

function closePopup(popup) {  //Функция закрытия попапа
  popup.classList.remove('popup_opened');  //Убираем у попапа класс видимости
  document.removeEventListener('keydown', handleEscClose);  //Удаляем слушатель кнопки Esc
  document.removeEventListener('mousedown', handleClickClose);  //Удаляем слушатель клика
};

function handleClickClose(evt) {  //Функция закрытия попапа кликом
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);  //Если клик на попапе, то закрыть попап
  };
};

function handleEscClose(evt) {  //Функция закрытия попапа кнопкой Esc
  if (evt.key === "Escape") {
    const popup = document.querySelector('.popup_opened');  //Если нажата кнопка Esc при открытом попапе, то закрыть его
    closePopup(popup);
  };
};

function showAdd() {  //Функция показа добавления
  formAddElement.reset();  //Сброс значений формы
  showPopup(popupAdd);  //Вызов показа попапа
  resetFormError(validSetting, popupAdd);  //Сброс ошибок формы
};

function showInfo() {  //Функция показа редактирования
  showPopup(popupInfo);  //Вызываем функцию открытия попапа с параметром попапа редактирования
  profileNameInpute.value = profileName.textContent;  //Получаем со страницы имя пользователя
  jobInpute.value = job.textContent;  //Получаем со страницы работу пользователя
  resetFormError(validSetting, popupInfo);//Сбрасываем ошибки попапа инфо
};

function showPhoto(image, caption) { //Функция показа попапа фото
  popupImage.src = image;  //Выбор источника фото
  popupImage.alt = caption; //Выбор источника подписи
  popupCaption.textContent = caption;  //Выбор источника подписи
  showPopup(popupPhoto);  //Вызов функции показа попапа
};

function handleDeleteElement(evt) {  //Функция удаления фото
  evt.target.closest('.element').remove();  //Ищем и удаляем весь блок фото
};

function handleLikeElement(evt) {  //Функция лайков
  evt.target.classList.toggle('element__like_active');  //Добавляем лайку класс установленного
};

function handleSubmitFormEdit (evt) {  //Функция для отправки данных формы редактировать
  evt.preventDefault();  //Эта строчка отменяет стандартную отправку формы

  profileName.textContent = profileNameInpute.value;  //Получаем введённое имя пользователя
  job.textContent = jobInpute.value;  //Получаем введённую работу пользователя

  closePopup(popupInfo)  //После отправки данных закрываем форму
};

function prependInSection (title, link) {  //Функция создания нового элемента
  const newElement = createElement({name:title, link:link});  //Делаем новый элемент
  elementsSection.prepend(newElement);  //Вставляем новый элемент в секцию
};

function handleSubmitFormAdd (evt) {  //Функция добавления фото
  evt.preventDefault(); //Эта строчка отменяет стандартную отправку формы

  prependInSection(placeTitle.value, placeLink.value);  //Функция добавления фото на страницу

  closePopup(popupAdd);  //Закрываем попап
  formAddElement.reset();  //Сбрасываем значения формы
};

function createElement(item) {  //Функция создания нового элемента
  const element = templateCard.querySelector('.element').cloneNode(true);  //Создаём элемент
  const elementImage = element.querySelector('.element__image');  //Задаём картинку
  const elementTitle = element.querySelector('.element__title');  //Указываем название
  const elementLike = element.querySelector('.element__like');  //Добавляем кнопку лайк
  const elementDelete = element.querySelector('.element__delete');  //Добавляем кнопку удаления

  elementImage.src = item.link;  //Передаём адрес картинки в атрибут источник
  elementImage.alt = item.name;  //Передаём название картинки в атрибут альт
  elementTitle.textContent = item.name;  //Передаём название картинки в подпись

  elementLike.addEventListener('click', handleLikeElement);  //Слушатель нажатия кнопки лайк
  elementDelete.addEventListener('click', handleDeleteElement);  //Слушатель нажатия кнопки удалить
  elementImage.addEventListener('click', () => showPhoto(item.link, item.name));  //Слушатель нажатия кнопки вызова попапа фото

  return element;  //На выходе имеем готовый элемент
};

function renderList() {  //Функция отрисовки элемента
  initialCards.forEach(item => prependInSection(item.name, item.link));  //Получаем данные из массива
};

renderList();  //Запускаем функцию

buttonAdd.addEventListener('click', showAdd);  //Слушатель нажатия кнопки добавить фото
formAddElement.addEventListener('submit', handleSubmitFormAdd);  //Слушатель нажатия кнопки сохранить
buttonEdit.addEventListener('click', showInfo);  //Слушатель нажатия кнопки изменить
formEditElement.addEventListener('submit', handleSubmitFormEdit);  //Слушатель нажатия кнопки сохранить
