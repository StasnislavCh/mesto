export default class Section {  //Экспорт класса Section
  constructor({renderer}, elementSelector) {  //Вызов конструктора секции
    this._renderer = renderer;  //Задаём отрисовку
    this._element = document.querySelector(elementSelector);  //Задаём элемент
  }

  renderItems(items) {  //Отрисовка элементов
    this._items = items;  //Задаём элементы
    this._items.forEach((data) => {
      this.addItem(this._renderer(data));  //Берём элементы из объекта и отрисовываем их на страницу
    });
  }

  addItem(item) {  //Добавление элементов
    this._element.prepend(item);  //Вставляем новый элемент в начало
  }
}
