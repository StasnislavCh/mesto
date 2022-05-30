const popup = document.querySelector(".popup");
const buttonEdit = document.querySelector(".profile__edit");
const formElement = document.querySelector('.popup__form')
const buttonClose = document.querySelector('.popup__close')
let profileName = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let profileNameInpute = formElement.querySelector('.popup__inpute_name');
let jobInpute = formElement.querySelector('.popup__inpute_job');

function showInfo() {
  popup.classList.add('popup_opened');

  profileNameInpute.value = profileName.textContent;
  jobInpute.value = job.textContent;
}

buttonEdit.addEventListener("click", showInfo);

function closeInfo() {
  popup.classList.remove('popup_opened')
}

buttonClose.addEventListener("click", closeInfo)

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = profileNameInpute.value;
  job.textContent = jobInpute.value;

  closeInfo()
}

formElement.addEventListener('submit', formSubmitHandler);
