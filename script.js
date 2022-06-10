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

const start = () => {
  createHero();
};

const createHero = () => {
  // Создаём нового героя
  const newHero = new FantasyHero(
    // Передаём даннные, полученные из DOM, дальнейшее преобразование - в методах классов
    heroName,
    heroAge,
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
  // Обращение в конструкторе к полям через this фактически будет аналогично их определению, и в данном случае мы можем убрать определение полей:
  // name;
  // age;
  // gender;

  constructor(heroName, heroAge, heroGenders) {
    this.name = heroName.value;
    this.age = heroAge.value;
    // this.gender = heroGenders;
  }
  //Метод для добавления информации про пол персонажа:
  addGender(heroGenders) {
    for (const gender of heroGenders) {
      if (gender.checked) {
        this.heroGender = gender.value;
      }
    }
    console.log(`Привет! я ${this.heroGender}!`);
  }
}

// Расширяем исходный класс до фентезийного персонажа
class FantasyHero extends Person {
  constructor(name, age, gender, race) {
    super(name, age, gender);
    // this.race = race;
  }
  //Метод для добавления информации про расу персонажа:
  addRace(heroRaces) {
    heroRaces.forEach(function (race) {
      heroRace = race.options[race.selectedIndex].text;
      this.race = heroRace;
    });
  }
}

buttonCreate.addEventListener("click", start);
