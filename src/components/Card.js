export class Card {  //Экспорт класса
  constructor(item, cardSelector, handleOpenImage, myId, handleDeleteElement, like, unlike) {  //Вызов коструктора создания карточки
    this._item = item;  //Задаём элемент
    this._title = item.title;  //Задаём заголовок
    this._link = item.link;  //Задаём ссылку
    this._likes = item.likes;  //Задаём лайк
    this._id = item._id;  //Задаём id
    this._cardSelector = cardSelector;  //Задаём карточку
    this._handleOpenImage = handleOpenImage;  //Задаём открытие картинки
    this._myId = myId;  //Задаём свой id
    this._ownerId = item.owner._id;  //Задаём id загрузившего картинку
    this._like = like;  //Задаём установку лайка
    this._unlike = unlike;  //Задаём снятие лайка
    this._handleDeleteElement = handleDeleteElement;  //Задаём удаление картинки
  }

  _getTemplate() {  //Получаем шаблон
    return document  //Возращаем документ
      .querySelector(this._cardSelector)  //Выбираем карточку
      .content.querySelector(".element")  //Ищем карточку
      .cloneNode(true);  //Клонируем
  }

  getId() {  //Получаем id
    return this._id;
  }

  handleLikeElement() {  //Функция лайков
    this._element.querySelector(".element__like")  //Ищем элемент лайка
    this._element.classList.add("element__like_active");  //Добавляем лайку класс установленного
  }

  handleUnLikeElement() {  //Функция отмены лайков
    this._element.querySelector(".element__like")  // Ищем элемент лайка
    this._element.classList.remove("element__like_active");  //Убираем у лайка класс установленного
  }

  _checkLikes() {  //Проверка лайка
    this._likes.forEach((like) => {  //Берём массив лайков
      if (like._id === this._myId) {  //Если id совпадают
        this._element.querySelector(".element__like")  //Ищем элемент лайка
        this._element.classList.add("element__like_active");  //Добавляем лайку класс установленного
      }
    });
  }

  countLikes(item) {  //Счётчик лайков
    this._element.querySelector(".element__like-counter").textContent = item.likes.length;
  }

  handleDeleteElement() {  //Функция удаления фото
    this._element.closest(".element").remove();  //Ищем и удаляем весь блок фото
    this._element = null;  //Для очистки памяти зануляем
  }

  _setEventListener() {  //Установка слушателей
    this._image.addEventListener("click", () => {  //При клике на фото
      this._handleOpenImage(this._title, this._link);  //Открыть большую картинку
    });

    if (this._ownerId === this._myId) {  //Если фото добавлено мной
      this._element.querySelector(".element__delete").addEventListener("click", () => {  //Тогда добавляем иконку удаления
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
    this._image = this._element.querySelector(".element__image");  //Задаём картинку
    this._element.querySelector(".element__title").textContent = this._title;  //Указываем название
    this._likeButton = this._element.querySelector(".element__like");  //Добавляем кнопку лайк
    if (this._ownerId !== this._myId) {  //Если id не совпадают
      this._element.querySelector(".element__delete").remove();  //то убрать иконку удаления
    }
    this._element.querySelector(".element__image").src = this._link;  //Передаём адрес картинки в атрибут источник
    this._element.querySelector(".element__image").alt = this._title;  //Передаём название картинки в атрибут альт
    this._setEventListener();  //Устанавливаем слушатели кнопок
    this.countLikes(this._item);  //Добавляем счётчик лайков
    this._checkLikes();  //Добавляем проверку лайков
    return this._element;  //На выходе имеем готовый элемент
  }
}
