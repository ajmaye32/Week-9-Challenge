"use strict";
class Person {
  name;
  job;
  age;

  constructor(name, job, age) {
    // were setting this objects fields
    this.name = name;
    this.job = job;
    this.age = age;
  }

  excercise() {
    console.log(`I do excercise`);
  }

  fetchjob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

var p1 = new Person("Anthony", "R2H", 21);

p1.excercise();
p1.fetchjob();

//

class Programmer extends Person {
  //   name;
  //   job;
  //   age;
  //   languages;
  //   busy;

  constructor(name, job, age, languages) {
    // super calls the parent
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completeTask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} cant accept anymore jobs right now`);
    } else {
      console.log(`${this.name} would love to take a new resposiblity`);
    }
  }

  learnLanguage(newLang) {
    this.languages.push(newLang);
  }

  listLanguages() {
    //   for(var x = 0; x<this.languages.length; x++){
    //             console.log(this.languages[x])

    console.log(this.languages);
  }


}


var p2 = new Programmer("Jordan", "Mechanic", 25, ["Javascript"]);

console.log(p2.busy);
p2.completeTask();
console.log(p2.busy);
p2.acceptNewTask();
console.log(p2.busy);
p2.completeTask();
p2.offerNewTask();
console.log(p2.languages);
p2.learnLanguage("mySQL");
p2.listLanguages();