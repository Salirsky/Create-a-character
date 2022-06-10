"use strict";

const buttonCreate = document.querySelector(".button-create");

const table = document.querySelector(".table-saved-person");
const tableTr = document.querySelector("tr");

// Получаем данные из форм

const heroName = document.querySelector(".form-name");
const heroAge = document.querySelector(".form-age");
const heroGenders = document.querySelectorAll(".gender-checkbox");
const heroRaces = document.querySelectorAll(".race-select");

let heroes = []; // массив объектов, где каждый объект - отдельный персонаж

let heroGender; // Выбранный пол
let heroRace; // Выбранная раса

//Метод для добавления информации про пол персонажа:
// const addGender = () => {
// for (const gender of heroGenders) {
//   if (gender.checked) {
//     heroGender = gender.value;
//   }
// }
// };

// console.log(heroRaces);

// Метод для добавления информации про расу персонажа:
// const addRace = () => {
// heroRaces.forEach(function (race) {
//   heroRace = race.options[race.selectedIndex].text;
// });

// При нажатии на кнопку "Создать!" :

const start = () => {
  // addRace();
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
  const newHero = new FantasyHero(
    heroName.value,
    heroAge.value,
    heroGenders,
    heroRaces
  );

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
  nodeTd[4].innerHTML = '<button class="button button-delete">Удалить</button>';

  console.log(heroes);
};

// Создаём исходный класс
class Person {
  constructor(name, age, heroGenders) {
    this.name = name;
    this.age = age;
    this.heroGenders = heroGenders;
  }
  //Метод для добавления информации про пол персонажа:
  addGender(heroGenders) {
    for (const gender of heroGenders) {
      if (gender.checked) {
        this.heroGender = gender.value;
        return this.heroGender;
      }
    }
    console.log(`Привет! я ${this.heroGender}!`);
  }
}

// Расширяем исходный класс до фентезийного персонажа
class FantasyHero extends Person {
  constructor(name, age, gender, race) {
    super(name, age, gender);
    this.race = race;
  }
  //Метод для добавления информации про расу персонажа:
  addRace(heroRaces) {
    heroRaces.forEach(function (race) {
      heroRace = race.options[race.selectedIndex].text;
    });
  }
}

buttonCreate.addEventListener("click", start);
