import {initialCards} from './initialCards.js';  //импорт массива

const buttonAdd = document.querySelector('.profile__add');  //Ищем кнопку добавления фото
const popupAdd = document.querySelector('.popup_photo_add');  //Ищем попап добавить фото
const popupAddClose = popupAdd.querySelector('.popup__close_photo_add');  //Ищем кнопку закрыть в добавить фото
const formAddElement = popupAdd.querySelector('.popup__form_photo_add');  //Ищем форму в добавить фото
const placeTitle = formAddElement.querySelector('.popup__inpute_field_title');  //Получаем введённое название места
const placeLink = formAddElement.querySelector('.popup__inpute_field_link');  //Получаем введённую ссылку
const templateCard = document.querySelector('.template-card').content;  //Получаем шаблон
const elementsSection = document.querySelector('.elements');  //Получаем элемент

const buttonEdit = document.querySelector(".profile__edit");  //Ищем кнопку изменить
const popupInfo = document.querySelector('.popup_edit_info');  //Ищем попап редактирования
const popupEditClose = popupInfo.querySelector('.popup__close_edit_info');  //Ищем кнопку закрытия в попапе редактирования
const formEditElement = popupInfo.querySelector('.popup__form_edit_info');  //Ищем форму в попапе редактирования
const profileName = document.querySelector('.profile__name');  //Ищем имя пользователя
const job = document.querySelector('.profile__job');  //Ищем работу пользователя
const profileNameInpute = formEditElement.querySelector('.popup__inpute_field_name');  //Получаем введённое имя пользователя
const jobInpute = formEditElement.querySelector('.popup__inpute_field_job');  //Получаем введённую работу пользователя

const popupPhoto = document.querySelector('.popup_photo_big');  //Ищем попап фото
const popupImage = popupPhoto.querySelector('.popup__image');  //Сюда изображение
const popupCaption = popupPhoto.querySelector('.popup__caption');  //Сюда описание
const popupPhotoClose = popupPhoto.querySelector('.popup__close_photo_big');  //Ищем кнопку закрыть фото

function showPopup(popup) {  //Функция показа попапа
  popup.classList.add('popup_opened');  //Добавляем попапу класс видимости
}

function closePopup(popup) {  //Функция закрытия попапа
  popup.classList.remove('popup_opened');  //Убираем у попапа класс видимости
}

function showInfo() {  //Функция показа редактирования
  showPopup(popupInfo);  //Вызываем функцию открытия попапа с параметром попапа редактирования
  profileNameInpute.value = profileName.textContent;  //Получаем со страницы имя пользователя
  jobInpute.value = job.textContent;  //Получаем со страницы работу пользователя
}

function showPhoto (image, caption) { //Функция показа попапа фото
  popupImage.src = image;  //Выбор источника фото
  popupImage.alt = caption; //Выбор источника подписи
  popupCaption.textContent = caption;  //Выбор источника подписи

  showPopup(popupPhoto);  //Вызов функции показа попапа
}

function deleteElementHandler (evt) {  //Функция удаления фото
  evt.target.closest('.element').remove();  //Ищем и удаляем весь блок фото
}

function likeElementHandler (evt) {  //Функция лайков
  evt.target.classList.toggle('element__like_active');  //Добавляем лайку класс установленного
}

function submitFormEditHandler (evt) {  //Функция для отправки данных формы редактировать
  evt.preventDefault();  //Эта строчка отменяет стандартную отправку формы

  profileName.textContent = profileNameInpute.value;  //Получаем введённое имя пользователя
  job.textContent = jobInpute.value;  //Получаем введённую работу пользователя

  closePopup(popupInfo)  //После отправки данных закрываем форму
}

function prependInSection (title, link) {  //Функция создания нового элемента
  const newElement = createElement({name:title, link:link});  //Делаем новый элемент
  elementsSection.prepend(newElement);  //Вставляем новый элемент в секцию
}

function submitFormAddHandler(evt) {  //Функция добавления фото
  evt.preventDefault(); //Эта строчка отменяет стандартную отправку формы

  prependInSection(placeTitle.value, placeLink.value);  //Функция добавления фото на страницу

  closePopup(popupAdd);  //Закрываем попап
  formAddElement.reset();  //Сбрасываем значения формы
}

function createElement(item) {  //Функция создания нового элемента
  const element = templateCard.querySelector('.element').cloneNode(true);  //Создаём элемент
  const elementImage = element.querySelector('.element__image');  //Задаём картинку
  const elementTitle = element.querySelector('.element__title');  //Указываем название
  const elementLike = element.querySelector('.element__like');  //Добавляем кнопку лайк
  const elementDelete = element.querySelector('.element__delete');  //Добавляем кнопку удаления

  elementImage.src = item.link;  //Передаём адрес картинки в атрибут источник
  elementImage.alt = item.name;  //Передаём название картинки в атрибут альт
  elementTitle.textContent = item.name;  //Передаём название картинки в подпись

  elementLike.addEventListener('click', likeElementHandler);  //Слушатель нажатия кнопки лайк
  elementDelete.addEventListener('click', deleteElementHandler);  //Слушатель нажатия кнопки удалить
  elementImage.addEventListener('click', () => showPhoto(item.link, item.name));  //Слушатель нажатия кнопки вызова попапа фото

  return element;  //На выходе имеем готовый элемент
}

function renderList() {  //Функция отрисовки элемента
  initialCards.forEach(item => prependInSection(item.name, item.link));  //Получаем данные из массива
}

renderList();  //Запускаем функцию

buttonAdd.addEventListener('click', () => showPopup(popupAdd));  //Слушатель нажатия кнопки добавить фото
popupAddClose.addEventListener('click', () => closePopup(popupAdd));  //Слушатель нажания кнопки закрыть в добавить фото
formAddElement.addEventListener('submit', submitFormAddHandler);  //Слушатель нажатия кнопки сохранить
buttonEdit.addEventListener('click', showInfo);  //Слушатель нажатия кнопки изменить
popupEditClose.addEventListener('click', () => closePopup(popupInfo));  //Слушатель нажания кнопки закрыть редактирование
formEditElement.addEventListener('submit', submitFormEditHandler);  //Слушатель нажатия кнопки сохранить
popupPhotoClose.addEventListener('click', () => closePopup(popupPhoto));  //Слушатель нажания кнопки закрыть фото
