export default class Card {  //Экспорт класса
  constructor(item, selector, handleOpenImage, myId, handleDeleteElement, like, unlike) {  //Вызов коструктора создания карточки
    this._item = item;  //Задаём элемент
    this._name = item.name;  //Задаём заголовок
    this._link = item.link;  //Задаём ссылку
    this._likes = item.likes;  //Задаём лайк
    this._id = item._id;  //Задаём id
    this._selector = selector;  //Задаём карточку
    this._handleOpenImage = handleOpenImage;  //Задаём открытие картинки
    this._myId = myId;  //Задаём свой id
    this._ownerId = item.owner._id;  //Задаём id загрузившего картинку
    this._like = like;  //Задаём установку лайка
    this._unlike = unlike;  //Задаём снятие лайка
    this._handleDeleteElement = handleDeleteElement;  //Задаём удаление картинки
  }

  _getTemplate() {  //Получаем шаблон
    return document  //Возращаем документ
      .querySelector(this._selector)  //Выбираем карточку
      .content.querySelector(".element")  //Ищем карточку
      .cloneNode(true);  //Клонируем
  }

  getId() {  //Получаем id
    return this._id;
  }

  likeElement() {  //Функция лайков
      this._likeButton.classList.add("element__like_active");  //Добавляем лайку класс установленного
  }

  unLikeElement() {  //Функция отмены лайков
    this._likeButton.classList.remove("element__like_active");  //Убираем у лайка класс установленного
  }

  _checkLikes() {  //Проверка лайка
    this._likes.forEach((like) => {  //Берём массив лайков
      if (like._id === this._myId) {  //Если id совпадают
        this.likeElement();  //Добавляем лайку класс установленного
      }
    });
  }

  countLikes(item) {  //Счётчик лайков
    this._counterLikes.textContent = item.likes.length;
  }

  deleteElement() {  //Функция удаления фото
    this._element.closest(".element").remove();  //Ищем и удаляем весь блок фото
    this._element = null;  //Для очистки памяти зануляем
  }

  _setEventListener() {  //Установка слушателей
    this._image.addEventListener("click", () => {  //При клике на фото
      this._handleOpenImage(this._name, this._link);  //Открыть большую картинку
    });

    if (this._ownerId === this._myId) {  //Если фото добавлено мной
      this._deleteElement.addEventListener("click", () => {  //Тогда добавляем иконку удаления
        this._handleDeleteElement();
      });
    }

    this._likeButton.addEventListener("click", () => {  //При клике на лайк
      if (this._likeButton.classList.contains("element__like_active")) {  //Если лайк уже стоит
        this._unlike();  //то снять его
      } else {
        this._like();  //если не стоит, то поставить
      }
    });
  }

  generateCard() {  //Функция создания нового элемента
    this._element = this._getTemplate();  //Получаем шаблон
    this._counterLikes = this._element.querySelector(".element__like-counter");  //Задаём счётчик лайков
    this._deleteElement = this._element.querySelector(".element__delete");  //Задаём кнопку удаления
    this._title = this._element.querySelector(".element__title");  //Задаём название
    this._image = this._element.querySelector(".element__image");  //Задаём картинку
    this._title.textContent = this._name;  //Указываем название
    this._likeButton = this._element.querySelector(".element__like");  //Добавляем кнопку лайк
    if (this._ownerId !== this._myId) {  //Если id не совпадают
      this._deleteElement.remove();  //то убрать иконку удаления
    }
    this._image.src = this._link;  //Передаём адрес картинки в атрибут источник
    this._image.alt = this._name;  //Передаём название картинки в атрибут альт
    this._setEventListener();  //Устанавливаем слушатели кнопок
    this.countLikes(this._item);  //Добавляем счётчик лайков
    this._checkLikes();  //Добавляем проверку лайков
    return this._element;  //На выходе имеем готовый элемент
  }
}
