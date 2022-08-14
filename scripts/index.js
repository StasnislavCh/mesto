import {initialCards} from './initialCards.js';  //импорт массива
import {validSetting} from './validSetting.js';  //импорт объекта для вадидации
import {Card} from './Card.js';  //импорт класса Card
import PopupWithForm from './PopupWithForm.js'; //импорт класса PopupWithForm
import PopupWithImage from './PopupWithImage.js';  //импорт класса PopupWithImage
import Section from './Section.js';  //импорт класса Section
import UserInfo from './UserInfo.js';  //импорт класса UserInfo
import {FormValidator} from './FormValidator.js';  //импорт класса FormValidator

const buttonAdd = document.querySelector('.profile__add');  //Ищем кнопку добавления фото
const popupAdd = document.querySelector('.popup_photo_add');  //Ищем попап добавить фото
const templateCard = '.template-card';  //Получаем шаблон

const buttonEdit = document.querySelector('.profile__edit');  //Ищем кнопку изменить
const popupInfo = document.querySelector('.popup_edit_info');  //Ищем попап редактирования
const formEditElement = popupInfo.querySelector('.popup__form_edit_info');  //Ищем форму в попапе редактирования
const profileNameInpute = formEditElement.querySelector('.popup__inpute_field_name');  //Получаем введённое имя пользователя
const jobInpute = formEditElement.querySelector('.popup__inpute_field_job');  //Получаем введённую работу пользователя

const popupPhoto = new PopupWithImage('.popup_photo_big');  //Задаём попап с фото
const popupAddForm = new PopupWithForm('.popup_photo_add', prependInSection);  //Задаём попап добавления фото

const section = new Section({items: initialCards, renderer: createElement}, '.elements');  //Задаём блок section
const userProfile = new UserInfo({userNameSelector: '.profile__name', jobSelector: '.profile__job'});  //Задаём имя и работу
const popupProfileEdit = new PopupWithForm('.popup_edit_info', handleSubmitFormEdit);  //Задаём попап редактирования имя и работы

const popupInfoValid = new FormValidator(validSetting, popupInfo);  //Валидация попапа Info
popupInfoValid.enableValidation();

const popupAddValid = new FormValidator(validSetting, popupAdd);  //Валидация попапа Add
popupAddValid.enableValidation();

function showPhoto(image, caption) { //Функция показа попапа фото
  popupPhoto.open(image, caption);
};

function handleSubmitFormEdit(item) {  //Функция для отправки данных формы редактировать
  const {name, job} = item;  //Задаём имя и работу
  userProfile.setUserInfo(name, job);  //Сохраняем имя и работу

  popupProfileEdit.close();  //После отправки данных закрываем форму
};

function prependInSection(item) {  //Функция создания нового элемента
  const element = createElement({name: item.photoTitle, link: item.photoLink}, '.elements');  //Задаём url и название
  section.addItem(element);  //Сохраняем url и название

  popupAddForm.close();  //После отправки данных закрываем форму
};

function createElement(item) {  //Функция создания нового элемента
  const element = new Card(  //Создаём элемент
    item.name,  //Получаем название
    item.link,  //Получаем ссылку
    templateCard,  //Получаем шаблон
    showPhoto  //Добавляем слушатель открытия
  );
  return element.generateCard();  //На выходе имеем готовый элемент
}

buttonAdd.addEventListener("click", () => {  //Слушатель нажатия кнопки добавить фото
  popupAddValid.resetFormError();  //Сбрасываем ошибки в форме
  popupAddForm.open();  //Открываем попап редактирования
});
popupAddForm.setEventListeners();  //Устанавливаем слушатели на форму попапа добавления фото
buttonEdit.addEventListener("click", () => {  //Слушатель нажатия кнопки изменить
  const {name, job} = userProfile.getUserInfo();
  profileNameInpute.value = name;
  jobInpute.value = job;
  popupProfileEdit.open();
  popupInfoValid.resetFormError();
});
popupProfileEdit.setEventListeners();  //Устанавливаем слушатели на форму попапа редактирования
popupPhoto.setEventListeners();  //Устанавливаем слушатели на попап фото
section.renderItems();  //Рендер блока Section из массива
