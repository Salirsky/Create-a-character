"Use strict";

const raceSelect = document.getElementById("race-select");
const formSkill = document.querySelector(".form-skill");

const buttonCreate = document.querySelector(".button-create");

const table = document.querySelector(".table-saved-person");
const tableTr = document.querySelector("tr");

// Получаем данные из форм
const heroName = document.querySelector(".form-name");
const heroAge = document.querySelector(".form-age");
const heroGenders = document.querySelectorAll(".gender-checkbox");
const heroRaces = document.querySelectorAll(".race-select");
const heroSkills = document.querySelectorAll(".skill-checkbox");
const heroSkillsBlocks = document.querySelectorAll(".form-skill div");

let heroes = []; // массив объектов, где каждый объект - отдельный персонаж
let newHero;

let nameHero; // Имя героя
let ageHero; // Возраст героя
let genderHero; // Выбранный пол
let raceHero; // Выбранная раса
let skillHero; // Выбранная способность

const init = () => {
  // Выбираем расу, и запускаем функцию changeSkills
  raceSelect.addEventListener("change", changeSkills);
  // Нажимаем кнопку "Создать", и запускаем Старт
  buttonCreate.addEventListener("click", start);
};

const changeSkills = () => {
  findRace();
  addRemoveSkills();
};

// Получаем значение выбранной расы
const findRace = () => {
  heroRaces.forEach(function (race) {
    raceHero = race.options[race.selectedIndex].text;
  });
};

// Добавим/уберём способности в зависимости от выбранной расы
const addRemoveSkills = () => {
  switch (raceHero) {
    case "Человек":
      // Перечисляем все способности:
      heroSkillsBlocks.forEach(function (skill) {
        //Если способность содержит класс "для людей"
        if (skill.classList.contains("skill-for-humans")) {
          // Убираем класс .hidden
          skill.classList.remove("hidden");
        } else {
          // Добавляем остальным способностям класс .hidden
          skill.classList.add("hidden");
        }
      });
      break;
    case "Гном":
      heroSkillsBlocks.forEach(function (skill) {
        if (skill.classList.contains("skill-for-dwarfs")) {
          skill.classList.remove("hidden");
        } else {
          skill.classList.add("hidden");
        }
      });
      break;
    case "Оборотень":
      heroSkillsBlocks.forEach(function (skill) {
        if (skill.classList.contains("skill-for-werewolfs")) {
          skill.classList.remove("hidden");
        } else {
          skill.classList.add("hidden");
        }
      });
      break;
    case "Вампир":
      heroSkillsBlocks.forEach(function (skill) {
        if (skill.classList.contains("skill-for-vampires")) {
          skill.classList.remove("hidden");
        } else {
          skill.classList.add("hidden");
        }
      });
      break;
    case "Эльф":
      heroSkillsBlocks.forEach(function (skill) {
        if (skill.classList.contains("skill-for-elfs")) {
          skill.classList.remove("hidden");
        } else {
          skill.classList.add("hidden");
        }
      });
      break;
    case "Живой гриб":
      heroSkillsBlocks.forEach(function (skill) {
        if (skill.classList.contains("skill-for-mushrooms")) {
          skill.classList.remove("hidden");
        } else {
          skill.classList.add("hidden");
        }
      });
      break;
    default:
      console.log("чё?");
  }
  // console.log(heroSkillsBlocks);
};

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
  findRace();
  // Получаем способность персонажа
  for (const skill of heroSkills) {
    if (skill.checked) {
      skillHero = skill.value;
    }
  }
};

const createHero = () => {
  // Создаём нового героя
  newHero = new FantasyHero(
    nameHero, // Имя героя
    ageHero, // Возраст героя
    genderHero, // Выбранный пол
    raceHero, // Выбранная раса
    skillHero // Выбранная способность
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
  nodeTd[4].innerText = newHero.skill;
  nodeTd[5].innerHTML = '<button class="button button-delete">Удалить</button>';
};

// Создаём исходный класс
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  // Добавить геттеры и сеттеры
  // Добавить методы
}
// Расширяем исходный класс до фентезийного персонажа
class FantasyHero extends Person {
  constructor(name, age, gender, race, skill) {
    super(name, age, gender);
    this.race = race;
    this.skill = skill;
  }
  // Добавить геттеры и сеттеры
  // Добавить методы
}

init();
