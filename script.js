"Use strict";

const buttonCreate = document.querySelector(".button-create");
const table = document.querySelector(".table-saved-person");
const tableTr = document.querySelector("tr");

// Получаем данные из форм
const heroName = document.querySelector(".form-name");
const heroAge = document.querySelector(".form-age");
const heroGenders = document.querySelectorAll(".gender-checkbox");
const heroRaces = document.querySelectorAll(".race-select");

let heroes = []; // массив объектов, где каждый объект - отдельный персонаж
let newHero;

let nameHero; // Имя героя
let ageHero; // Возраст героя
let genderHero; // Выбранный пол
let raceHero; // Выбранная раса

const start = () => {
  dataProcessing();
  createHero();
};

// Обрабатываем данные для передачи их в конструктор при создании нового героя
const dataProcessing = () => {
  // Получаем имя персонажа
  nameHero = heroName.value;
  // Получаем возраст персонажа
  ageHero = heroAge.value;
  // Получаем пол персонажа
  for (const gender of heroGenders) {
    if (gender.checked) {
      genderHero = gender.value;
    }
  }
  // Получаем расу персонажа
  heroRaces.forEach(function (race) {
    raceHero = race.options[race.selectedIndex].text;
  });
  console.log(nameHero, ageHero, genderHero, raceHero);
};

const createHero = () => {
  // Создаём нового героя
  newHero = new FantasyHero(
    nameHero, // Имя героя
    ageHero, // Возраст героя
    genderHero, // Выбранный пол
    raceHero // Выбранная раса
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
};

// Создаём исходный класс
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// Расширяем исходный класс до фентезийного персонажа
class FantasyHero extends Person {
  constructor(name, age, gender, race) {
    super(name, age, gender);
    this.race = race;
  }
}

buttonCreate.addEventListener("click", start);
