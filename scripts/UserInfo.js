export default class UserInfo {  //Экспорт класса UserInfo
  constructor({userNameSelector, jobSelector}) {  //Вызов конструктора инфо о пользователе
    this._userName = document.querySelector(userNameSelector);  //Задаём Имя
    this._job = document.querySelector(jobSelector);  //Задаём работу
  }

  getUserInfo() {  //Получение инфо
    return { //Вернуть Имя и работу
      name: this._userName.textContent, job: this._job.textContent
    };
  }

  setUserInfo(name, job) {  //Сохранение инфо
    this._userName.textContent = name;
    this._job.textContent = job;
  }
}
