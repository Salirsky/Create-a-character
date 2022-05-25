"use strict";

class First {
  hello() {
    console.log("Привет, я метод родителя!");
  }
}

class Second extends First {
  hello() {
    super.hello();
    console.log("А я наследуемый метод!");
  }
}

const one = new First();
one.hello();

const two = new Second();
two.hello();
