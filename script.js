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

let heroes = []; // массив объектов, где каждый объект - отдельный персонаж
let newHero;

let nameHero; // Имя героя
let ageHero; // Возраст героя
let genderHero; // Выбранный пол
let raceHero; // Выбранная раса

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
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value=""> Некромантия </div><div><input tabindex="5" type="radio" name="skill" value=""> Магия снов </div><div><input tabindex="5" type="radio" name="skill" value=""> Владение тенями </div>';
      break;
    case "Гном":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value=""> Управление металлами </div><div><input tabindex="5" type="radio" name="skill" value=""> Хождение по стенам и потолку </div><div><input tabindex="5" type="radio" name="skill" value=""> Сопротивляемость магии </div>';
      break;
    case "Оборотень":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value=""> Регенерация</div><div><input tabindex="5" type="radio" name="skill" value=""> Управление животными </div><div><input tabindex="5" type="radio" name="skill" value=""> Анимагия </div>';
      break;
    case "Вампир":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value=""> Управление огнём</div><div><input tabindex="5" type="radio" name="skill" value=""> Чтение мыслей </div><div><input tabindex="5" type="radio" name="skill" value=""> Прохождение сквозь стены и предметы </div>';
      break;
    case "Эльф":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value=""> Управление растениями</div><div><input tabindex="5" type="radio" name="skill" value=""> Управление животными </div><div><input tabindex="5" type="radio" name="skill" value=""> Целительство </div>';
      break;
    case "Живой гриб":
      formSkill.innerHTML =
        '<p>Способность</p><div><input tabindex="5" checked type="radio" name="skill" value=""> Создание иллюзий</div><div><input tabindex="5" type="radio" name="skill" value=""> Невидимость </div><div><input tabindex="5" type="radio" name="skill" value=""> Гипноз </div>';
      break;
    default:
      console.log("чё?");
  }
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
  //
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

  // console.log(newHero);
  newHero.logger();
  newHero.addLog();
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
  logger() {
    console.log(this.race);
  }
  addLog() {
    switch (this.race) {
      case "Человек":
        console.log("и кошка");
        break;
      case "Гном":
        console.log("Король под горой");
        break;
      case "Оборотень":
        console.log("Среди тёмных подворотен");
        break;
      case "Вампир":
        console.log("устроил пир");
        break;
      case "Эльф":
        console.log("из Лориэна");
        break;
      case "Живой гриб":
        console.log("Ленин?");
        break;
      default:
        console.log("чё?");
    }
  }
}

init();
