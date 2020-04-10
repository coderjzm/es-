// console.log(123)
//
// var abc = 1234 // 全局对象 不能被删除 delete abc => false
//
// abcd = 2345 // 全局属性 可以被删除 delete abcd => true
//
// function test () {
//   ab = 45 // 全局属性 同上述的abcd
// }

// test()

// 没有用var定义的变量，不管是否在函数内部 都是属于全局属性 可以用window.xxx访问，其中qindow.可以省略

// function test2 () {
//   var a = 3
//   if (a === 3) {
//     var b = 4
//     let c = 5 // 块级作用域
//   }
//   console.log(b)
//   // console.log(c)
//   return a + 4
// }
//
// console.log(test2())

// window.a = 3
// function test () {
//   console.log(this.a)
// }
// test()
// test.bind({ a: 100 })()

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 0)
// }
