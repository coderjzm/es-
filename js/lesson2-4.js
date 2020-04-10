let test = {
  name: 'test',
  say: function () {
    console.log(this.name)
  }
}
test.say() // test

let test2 = {
  name: 'test',
  say: () => {
    console.log(this.name)
  }
}
test2.say() // es6的箭头函数this是在定义时就确定好的，而es5是在使用时才知道this指向谁
