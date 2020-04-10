// es5 类的写法
// let Animal = function (type) {
//   this.type = type
//   // this.eat = function () {
//   //   console.log('I am eating food')
//   // }
// }
//
// // let dog = new Animal('dog')
// // let monkey = new Animal('monkey')
// // console.log(dog)
// // console.log(monkey)
// // monkey.eat = function () {
// //   console.log('I am eating food monkey')
// // }
// // dog.eat()
// // monkey.eat()
// // 注意：eat写在函数体内，各自实例互不影响，只能改变自己的方法，违背了继承的原则，并且每个生成的对象都很大，因为每个对象下都会有声明的函数
//
// Animal.prototype.eat = function () {
//   console.log('I am eating food')
// }
//
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)
// // obj.constructor.prototype.fn 可以改变原型链上的方法，每个实例的fn都进行了改变
// monkey.constructor.prototype.eat = function () {
//   console.log('I am eating food monkey')
// }
// dog.eat()
// monkey.eat()

// es6 class
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     console.log('I am eating food')
//   }
// }
// let dog = new Animal('dog')
// console.log(dog)
// dog.eat()
//
// console.log(typeof Animal) // function

// es6 setter getter实现
// let _age = 4
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     console.log('I am eating food')
//   }
//   get age () {
//     return _age
//   }
//   set age (val) {
//     if (val < 7 && val > 4) {
//       _age = val
//     }
//   }
// }
// let dog = new Animal('dog')
// console.log(dog.age)
// dog.age = 5
// console.log(dog.age)
// console.log(dog._age) // undefined

// ========== static methods ==========
// es5实现方式
// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   Animal.walk() // 静态方法需要使用class.xxx调用
//   console.log('i am eating food')
// }
// Animal.walk = function () {
//   console.log('i am walking')
// }
// let dog = new Animal('dog')
// dog.eat()

// es6实现方式 static
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     Animal.walk()
//     console.log('I am eating food')
//   }
//   static walk () {
//     console.log('i am walking')
//   }
// }
// let dog = new Animal('dog')
// dog.eat()

// ======= 继承 =======
// es5实现方式
let Animal = function (type) {
  this.type = type
}
Animal.prototype.eat = function () {
  Animal.walk() // 静态方法需要使用class.xxx调用
  console.log('i am eating food')
}
Animal.walk = function () {
  console.log('i am walking')
}

let Dog = function () {
  // 初始化父类的构造函数
  Animal.call(this, 'dog')
}
Dog.prototype = Animal.prototype

let dog = new Dog('dog')
dog.eat()
