"use strict";

// Использовать наследование (главный класс - Person, наследуемый - RacePerson)
// Каждый класс должен содержать конструктор, геттеры и сеттеры, а также методы, которые нужны в нём по смыслу.
//Базовый класс должен состоять из минимум 4 свойств различных типов.
// Каждый класс - наследник должен расширять базовый класс и включать два или более дополнительных свойства.

// Сверстать страницу. На странице должна быть форма и таблица.

//  При Сохранении данных из формы создаем объект на основе выбранного класса-наследника. Записываем каждую сущность в единый массив.

// Данные из объектов в массиве должны сохраняться в localstorage и выводиться на страницу в таблице

// При обновлении страницы данные должны сохраняться

//При нажатии кнопки "Удалить" данный объект должен быть удален из массива данных, со страницы и с localstorage. Для удаления использовать метод класса!

const buttonCreate = document.querySelector(".button-create");

const raceSelect = document.getElementsByName("race-select");

const table = document.querySelector(".table-saved-person");

// const string = document.get

let heroes = []; // массив объектов, где каждый объект - отдельный персонаж

const a = "Терентий";
const b = "90";
const c = "male";
const d = "Характер паскудный";
const e =
  "Все думали, там умер дед, но дед не умирал! Ему 90, он не помнит стоп-слово :D";
const f = "Скромное ничего";
const g = "Гипноз";
const h = "Пушистый хвост";

// При нажатии на кнопку "Создать!" :

const start = () => {
  createHero();
  createTr();
  // pushHeroToTable();
  // pushHeroToArr();

  // Создаём новый экземпляр класса FantasyHero
  // Создаём новую строку в таблице
  // Отправляем данные в таблицу
  // сохраняем экземпляр в массив heroes
};

const createHero = () => {
  const hero1 = new FantasyHero(a, b, c, d, e, f, g, h);
  console.log(heroes);
  console.log("Cоздан новый герой!");
};

const createTr = () => {
  console.log("Тут будет новая строка таблицы!");
  const tr = document.createElement("tr");
  tr.innerHTML =
    "<td>Имя</td>  <td>Возраст</td>  <td>Пол</td>  <td>Раса</td>  <td>Внешние особенности</td>  <td>Характер</td>  <td>История</td>  <td>Способность</td>  <td>Содержимое карманов</td>  <td><button>Удалить</button></td>";
  table.append(tr);
  const nodeTd = tr.querySelectorAll("td");
  // const td1 = nodeTd.querySelector("td")[0];
  // const td2 = arrTd.querySelector("td")[1];
  // const td3 = arrTd.querySelector("td")[2];
  // const td4 = arrTd.querySelector("td")[3];
  // const td5 = arrTd.querySelector("td")[4];
  // const td6 = arrTd.querySelector("td")[5];
  // const td7 = arrTd.querySelector("td")[6];
  // const td8 = arrTd.querySelector("td")[7];
  // const td9 = arrTd.querySelector("td")[8];
  console.log(nodeTd);
  console.log(nodeTd[0]);
};

class Person {
  constructor(name, age, gender, character, history, pockets) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.character = character;
    this.history = history;
    this.pockets = pockets;
    // имя
    // возраст
    // пол
    // характер
    // история
    // карманцы
  }
}

class FantasyHero extends Person {
  constructor(name, age, gender, character, history, pockets, skill, look) {
    super(name, age, gender, character, history, pockets);
    this.skill = skill;
    this.look = look;
    // Способность
    // Внешность
  }

  // heroes.push({}); // это не сработает, но идея - пушить в массив методом этого класса

  // При создании каждого нового экземпляра класса FantasyHero этот экземпляр должен:
  // записываться в массив объектов;
  // записываться в таблицу, создавая в ней новую колонку (или строку)
  // сохраняться в localstorage

  // Также здесь должен быть метод для удаления экземпляра
  // - Из таблицы
  // - Из localstorage
}

buttonCreate.addEventListener("click", start);

// console.log(Person);
// console.log(FantasyHero);
// console.log(hero1);

//---------------------------------------------------------

// class First {
//   hello() {
//     console.log("Привет, я метод родителя!");
//   }
// }

// class Second extends First {
//   hello() {
//     super.hello();
//     console.log("А я наследуемый метод!");
//   }
// }

// const one = new First();
// one.hello();

// const two = new Second();
// two.hello();
