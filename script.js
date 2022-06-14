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
// const heroSkills = document.querySelectorAll(".form-skill input");

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

  switch (raceHero) {
    case "Человек":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value="Некромантия" class="skill-checkbox"> Некромантия </div><div><input tabindex="5" type="radio" name="skill" value="Магия снов" class="skill-checkbox"> Магия снов </div><div><input tabindex="5" type="radio" name="skill" value="Владение тенями" class="skill-checkbox"> Владение тенями </div>';
      break;
    case "Гном":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value="Управление металлами" class="skill-checkbox"> Управление металлами </div><div><input tabindex="5" type="radio" name="skill" value="Хождение по стенам и потолку" class="skill-checkbox"> Хождение по стенам и потолку </div><div><input tabindex="5" type="radio" name="skill" value="Сопротивляемость магии" class="skill-checkbox"> Сопротивляемость магии </div>';
      break;
    case "Оборотень":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value="Регенерация" class="skill-checkbox"> Регенерация</div><div><input tabindex="5" type="radio" name="skill" value="Управление животными" class="skill-checkbox"> Управление животными </div><div><input tabindex="5" type="radio" name="skill" value="Анимагия" class="skill-checkbox"> Анимагия </div>';
      break;
    case "Вампир":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value="Управление огнём" class="skill-checkbox"> Управление огнём</div><div><input tabindex="5" type="radio" name="skill" value="Чтение мыслей" class="skill-checkbox"> Чтение мыслей </div><div><input tabindex="5" type="radio" name="skill" value="Прохождение сквозь стены и предметы" class="skill-checkbox"> Прохождение сквозь стены и предметы </div>';
      break;
    case "Эльф":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value="Управление растениями" class="skill-checkbox"> Управление растениями</div><div><input tabindex="5" type="radio" name="skill" value="Управление животными" class="skill-checkbox"> Управление животными </div><div><input tabindex="5" type="radio" name="skill" value="Целительство" class="skill-checkbox"> Целительство </div>';
      break;
    case "Живой гриб":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value="Создание иллюзий" class="skill-checkbox"> Создание иллюзий</div><div><input tabindex="5" type="radio" name="skill" value="Невидимость" class="skill-checkbox"> Невидимость </div><div><input tabindex="5" type="radio" name="skill" value="Гипноз" class="skill-checkbox"> Гипноз </div>';
      break;
    default:
      console.log("чё?");
  }
  console.log(heroSkills);
};

const findRace = () => {
  heroRaces.forEach(function (race) {
    raceHero = race.options[race.selectedIndex].text;
  });
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

  // console.log(newHero);
  newHero.logger();
  // newHero.addLog();
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
  constructor(name, age, gender, race, skill) {
    super(name, age, gender);
    this.race = race;
    this.skill = skill;
  }
  logger() {
    console.log(this.race);
  }
  // addLog() {
  //   switch (this.race) {
  //     case "Человек":
  //       console.log("и кошка");
  //       break;
  //     case "Гном":
  //       console.log("Король под горой");
  //       break;
  //     case "Оборотень":
  //       console.log("Среди тёмных подворотен");
  //       break;
  //     case "Вампир":
  //       console.log("устроил пир");
  //       break;
  //     case "Эльф":
  //       console.log("из Лориэна");
  //       break;
  //     case "Живой гриб":
  //       console.log("Ленин?");
  //       break;
  //     default:
  //       console.log("чё?");
  //   }
  // }
}

init();
