import './index.css';

import {validSetting} from '../components/validSetting.js';  //импорт объекта для вадидации
import Card from '../components/Card.js';  //импорт класса Card
import PopupWithForm from '../components/PopupWithForm.js'; //импорт класса PopupWithForm
import PopupWithImage from '../components/PopupWithImage.js';  //импорт класса PopupWithImage
import PopupDelete from '../components/PopupDelete.js'  //импорт класса PopupDelete
import Section from '../components/Section.js';  //импорт класса Section
import UserInfo from '../components/UserInfo.js';  //импорт класса UserInfo
import FormValidator from '../components/FormValidator.js';  //импорт класса FormValidator
import Api from '../components/Api.js';  //импорт класса Api

let myId;
const apiId = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-48/',
  headers: {
    authorization: 'bf0486f9-3daf-4fe5-a38c-cc62044e9a6a',
    'Content-Type': 'application/json'
  }
};

const buttonAdd = document.querySelector('.profile__add');  //Ищем кнопку добавления фото
const popupAdd = document.querySelector('.popup_photo_add');  //Ищем попап добавить фото
const templateCard = '.template-card';  //Получаем шаблон

const buttonEdit = document.querySelector('.profile__edit');  //Ищем кнопку изменить
const popupInfo = document.querySelector('.popup_edit_info');  //Ищем попап редактирования
const formEditElement = popupInfo.querySelector('.popup__form_edit_info');  //Ищем форму в попапе редактирования
const profileNameInpute = formEditElement.querySelector('.popup__inpute_field_name');  //Получаем введённое имя пользователя
const jobInpute = formEditElement.querySelector('.popup__inpute_field_job');  //Получаем введённую работу пользователя

const popupAvatar = document.querySelector('.popup_edit_avatar');  //Ищем попап редактирования аватарки
const avatarEdit = document.querySelector('.profile__avatar');  //Ищем аватарку

const api = new Api(apiId);  //Задаём работу с Api
const getUserInfoPromise = api.getUserInfoApi();  //Получение инфо о юзере
const getInitialCards = api.getInitialCards();  //Запуск отрисовки начальных картинок

const popupPhoto = new PopupWithImage('.popup_photo_big');  //Задаём попап с фото
const popupAddForm = new PopupWithForm('.popup_photo_add', prependInSection);  //Задаём попап добавления фото

const section = new Section({renderer: createElement}, '.elements');  //Задаём блок section
const userProfile = new UserInfo({userNameSelector: '.profile__name', jobSelector: '.profile__job', userAvatarSelector: '.profile__photo'});  //Задаём имя, работу и аватарку
const popupProfileEdit = new PopupWithForm('.popup_edit_info', handleSubmitFormEdit);  //Задаём попап редактирования имя и работы
const popupEditAvatar = new PopupWithForm('.popup_edit_avatar', handleEditAvatar);  //Задаём попап изменения аватарки

const popupDelete = new PopupDelete('.popup_photo_del');  //Задаём попап удаления фото

const popupInfoValid = new FormValidator(validSetting, popupInfo);  //Валидация попапа Info
popupInfoValid.enableValidation();

const popupAddValid = new FormValidator(validSetting, popupAdd);  //Валидация попапа Add
popupAddValid.enableValidation();

const popupAvatarValid = new FormValidator(validSetting, popupAvatar);  //Валидация попапа изменения аватарки
popupAvatarValid.enableValidation()

getUserInfoPromise  //Получение инфо о юзере
  .then(res => {
    myId = res._id;
    userProfile.setUserInfo(res);
  })
  .catch(err => {  //Если что-то не так, по вывести ошибку в консоль
    console.log(err)
  });

getInitialCards  //Запуск отрисовки начальных картинок
  .then(res => {
    section.renderItems(res);
  })
  .catch(err => {  //Если что-то не так, по вывести ошибку в консоль
    console.log(err)
  });

Promise.all(([getUserInfoPromise, getInitialCards]))  //Запуск промисов параллельно и ожидание результата
  .then(res => {
    console.log(res);
  })
  .catch(err => {  //Если что-то не так, по вывести ошибку в консоль
    console.log(err)
  });

function showPhoto(name, link) { //Функция показа попапа фото
  popupPhoto.open(name, link);
};

function handleSubmitFormEdit(item) {  //Функция для отправки данных формы редактировать
  popupProfileEdit.onLoading(true, 'Сохранить');
  api.setUserInfoApi(item.name, item.job)  //Если всё хорошо, то сохранить инфо о пользователе и закрыть попап
    .then(res => {
      userProfile.setUserInfo(res);
      popupProfileEdit.close();
    })
    .catch((err) => {  //Если что-то не так, по вывести ошибку в консоль
      console.log(err)
    })
    .finally(() => {
      popupProfileEdit.onLoading(false, 'Сохранить');
    })

};

function handleEditAvatar(item) {  //Функция для изменения аватарки
  popupEditAvatar.onLoading(true, 'Сохранить');
  api.changeAvatar(item)  //Если всё хорошо, то изменить аватарку и закрыть попап
    .then(res => {
      userProfile.setUserInfo(res);
      popupEditAvatar.close();
    })
    .catch((err) => {  //Если что-то не так, по вывести ошибку в консоль
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.onLoading(false, 'Сохранить');
    })
}

function prependInSection(item) {  //Функция создания нового элемента
  popupAddForm.onLoading(true, 'Сохранить');
  api.addNewElement(item.title, item.url)  //Если всё хорошо, то создать новый элемент и закрыть попап
    .then(res => {
      section.addItem(createElement(res));
      popupAddForm.close();
    })
    .catch((err) => {  //Если что-то не так, по вывести ошибку в консоль
      console.log(err)
    })
    .finally(() => {
      this.onLoading(false, 'Сохранить');
    })
};

function createElement(item) {  //Функция создания нового элемента
  const element = new Card(item, templateCard, showPhoto, myId, () => {
    popupDelete.open(() =>
      api.deleteElement(element.getId())
        .then(() => {
          element.deleteElement();
          popupDelete.close();
        })
        .catch((err) => {  //Если что-то не так, по вывести ошибку в консоль
          console.log(err);
        }));
  }, () => {
    api.like(element.getId())  //Обработка установки лайков
      .then((res) => {
        element.likeElement();
        element.countLikes(res);
      })
      .catch((err => {  //Если что-то не так, по вывести ошибку в консоль
        console.log(err);
      }))
  }, () => {
    api.unlike(element.getId())  //Обработка снятия лайков
      .then((res) => {
        element.unLikeElement();
        element.countLikes(res)
      })
      .catch((err) => {  //Если что-то не так, по вывести ошибку в консоль
        console.log(err);
      })
  })
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
avatarEdit.addEventListener('click', () => {  //Слушатель нажатия изменения аватарки
  popupAvatarValid.resetFormError()
  popupEditAvatar.open()
})
popupEditAvatar.setEventListeners();  //Устанавливаем слушатели на изменение аватарки
popupDelete.setEventListeners();  //Устанавливаем слушатели на попап удаления фото
