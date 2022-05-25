"use strict";

const buttonCreate = document.querySelector(".button-create");

const raceSelect = document.getElementsByName("race-select");

const a = "Терентий";
const b = "90";
const c = "male";
const d = "Характер паскудный";
const e =
  "Все думали, там умер дед, но дед не умирал! Ему 90, он не помнит стоп-слово :D";
const f = "Скромное ничего";
const g = "Гипноз";
const h = "Пушистый хвост";

console.log(raceSelect);

class Person {
  constructor(name, age, gender, character, history, pockets) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.character = character;
    this.history = history;
    this.pockets = pockets;
  }
  // имя
  // возраст
  // пол
  // характер
  // история
  // карманцы
}

class RacePerson extends Person {
  constructor(name, age, gender, character, history, pockets, skill, look) {
    super(name, age, gender, character, history, pockets);
    this.skill = skill;
    this.look = look;
  }
  // Способность
  // Внешность
}

const person1 = new RacePerson(a, b, c, d, e, f, g, h);

console.log(Person);
console.log(RacePerson);
console.log(person1);

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
