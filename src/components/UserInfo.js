export default class UserInfo {  //Экспорт класса UserInfo
  constructor({userNameSelector, jobSelector, userAvatarSelector}) {  //Вызов конструктора инфо о пользователе
    this._userName = document.querySelector(userNameSelector);  //Задаём Имя
    this._job = document.querySelector(jobSelector);  //Задаём работу
    this._userAvatar = document.querySelector(userAvatarSelector);  //Задаём аватар
  }

  getUserInfo() {  //Получение инфо
    return { //Вернуть Имя и работу
      name: this._userName.textContent, job: this._job.textContent
    };
  }

  setUserInfo(item) {  //Сохранение инфо
    this._userName.textContent = item.name;
    this._job.textContent = item.job;
    this._userAvatar.src = item.avatar;
  }
}
