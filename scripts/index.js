const popup = document.querySelector(".popup"); //Ищем попап
const buttonEdit = document.querySelector(".profile__edit");  //Ищем кнопку изменить
const formElement = document.querySelector('.popup__form');  //Ищем форму в попапе
const buttonClose = document.querySelector('.popup__close');  //Ищем кнопку закрытия попапа
let profileName = document.querySelector('.profile__name');  //Ищем имя пользователя
let job = document.querySelector('.profile__job');  //Ищем работу пользователя
let profileNameInpute = formElement.querySelector('.popup__inpute_name');  //Получаем введённое имя пользователя
let jobInpute = formElement.querySelector('.popup__inpute_job');  //Получаем введённую работу пользователя

//функция открытия попапа
function showInfo() {
  popup.classList.add('popup_opened');  //Добавляем попапу класс для видимости

  profileNameInpute.value = profileName.textContent;  //Получаем со страницы имя пользователя
  jobInpute.value = job.textContent;  //Получаем со страницы работу пользователя
}

//фунция закрытия попапа
function closeInfo() {
  popup.classList.remove('popup_opened'); //Удаляем класс видимости попапа
}

//функция для откправки данных формы
function submitFormHandler (evt) { //Учту, но прежнее название было взято из задания на работу, там написано именно так, как было
  evt.preventDefault();  // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = profileNameInpute.value;  //Получаем введённое имя пользователя
  job.textContent = jobInpute.value;  //Получаем введённую работу пользователя

  closeInfo()  //После отправки данных закрываем форму
}

buttonEdit.addEventListener("click", showInfo);  //Слушатель нажатия кнопки изменить
buttonClose.addEventListener("click", closeInfo)  //Слушатель нажания кнопки закрыть
formElement.addEventListener('submit', submitFormHandler);  //Слушатель нажатия кнопки сохранить
