class Person {
  constructor (name) {
    this.name = name;
  }

  greet () {
    console.log(`Hello ${this.name}`)
  }
}

const p = new Person("John")
p.greet()