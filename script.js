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

const table = document.querySelector(".table-saved-person");
const tableTr = document.querySelector("tr");

// Получаем данные из форм

const heroHameForm = document.getElementsByName("personName");
const heroAgeForm = document.getElementsByName("personAge");
const heroGenderForm = document.getElementsByClassName(".form-gender");
const heroRaceForm = document.getElementsByName("race-select");
const heroLookForm = document.getElementsByClassName(".form-look");

const heroCharacterForm = document.getElementsByClassName(".form-character");
const heroHistoryForm = document.getElementsByClassName(".form-history");
const heroSkillForm = document.getElementsByClassName(".form-skill");
const heroPocketsForm = document.getElementsByClassName(".form-pockets");

console.log(heroHameForm);
console.log(heroAgeForm);
console.log(heroGenderForm);
console.log(heroRaceForm);
console.log(heroLookForm);

console.log(heroCharacterForm);
console.log(heroHistoryForm);
console.log(heroSkillForm);
console.log(heroPocketsForm);

let heroes = []; // массив объектов, где каждый объект - отдельный персонаж

// Пример создаваемого персонажа, используется только сначала.
const a = "Терентий";
const b = "90";
const c = "Мужчина";
const d = "Характер паскудный";
const e =
  "Все думали, там умер дед, но дед не умирал! Ему 90, он не помнит стоп-слово :D";
const f = "Скромное ничего";
const g = "Гипноз";
const h = "Пушистый хвост";

// При нажатии на кнопку "Создать!" :

const start = () => {
  createHero();
  // createTr();
  // pushHeroToTable();
  // pushHeroToArr();

  // Создаём новый экземпляр класса FantasyHero
  // Создаём новую строку в таблице
  // Отправляем данные в таблицу
  // сохраняем экземпляр в массив heroes
};

const createHero = () => {
  // Создаём нового героя
  const newHero = new FantasyHero(a, b, c, d, e, f, g, h);
  // Отправляем нового героя в массив героев
  heroes.push(newHero);
  // Клонируем строку в таблице
  const cloneTr = tableTr.cloneNode(true);
  // Добавляем клон строки в таблицу
  table.append(cloneTr);
  const nodeTd = cloneTr.querySelectorAll("td");
  nodeTd[0].innerText = newHero.name;
  nodeTd[1].innerText = newHero.age;
  nodeTd[2].innerText = newHero.gender;
  nodeTd[3].innerText = newHero.race;
  nodeTd[4].innerText = newHero.look;
  nodeTd[5].innerText = newHero.character;
  nodeTd[6].innerText = newHero.history;
  nodeTd[7].innerText = newHero.skill;
  nodeTd[8].innerText = newHero.pockets;
  nodeTd[9].innerHTML = "<button>Удалить</button>";
};

// const createTr = () => {
// };

// Создаём исходный класс
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

// Расширяем исходный класс до фентезийного персонажа
class FantasyHero extends Person {
  constructor(name, age, gender, character, history, pockets, skill, look) {
    super(name, age, gender, character, history, pockets);
    this.skill = skill;
    this.look = look;
    this.race = "Человек";
    // Способность
    // Внешность
    // Раса
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

// Это кусок кода, наглядно демонструрующий работу наследования классов, и он пока побудет здесь.

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
