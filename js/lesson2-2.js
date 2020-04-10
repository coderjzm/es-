const arr = [1, 2, 3, 4, 5]
// for循环
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue
  }
  // console.log(arr[i])
}

// forEach
// forEach不支持continue和break
arr.forEach(function (item) {
  // if (arr[i] === 2) {
  //   continue
  // }
  // console.log(item)
})

// every
// 默认return false 想要继续循环下去，需要return true
// 可以达到break continue的效果
arr.every(function (item) {
  // 跳过2
  if (item !== 2) {
    // console.log(item)
  }
  return true
})

// for in
// 遍历数组有瑕疵 index是字符串不是索引!!!  想把index转成数字可以选择 index * 1
// 会把数组的自定义属性给遍历出来
// 支持continue break 不支持return
// arr.a = 8
for (let index in arr) {
  if (index * 1 === 2) {
    continue
  }
  // console.log(index, arr[index])
}

// ========== es6 ==========

// for of
// arr.a = 8
for (let item of arr) {
  // console.log(item)
}

const Price = {
  A: [1.5, 2, 3, 4],
  B: [0.5, 0.8, 1],
  C: [100, 230, 500]
}

for (let key in Price) {
  // console.log(key, Price[key])
}

// ========= 第2小节 伪数组转数组 ========
// es5
// let args = [].slice.call(arguments) // collection转数组
// let imgs = [].slice.call(document.querySelectAll('img')) // NodeList转数组

// es6
// Array.from
// Array.from(arrayLike, mapFn, thisArg)
// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectAll('img'))
// 创建一个长度为5，值为1的数组
// let array = Array.from({ length: 5 }, function () {
//   return 1
// })
// console.log(array)
// 注意：伪数组的定义是：1、对象按照索引进行存储数据；2、具有length属性 例如:{0: 'a', 1: 'b', length: 2}

// ======== 第三小节 生成新数组 ========
// Array.prototype.of
// let array = Array.of(1, 2, 3, 4, 5)
// console.log(array)

// Array.prototype.fill
// Array.fill(value, start, end)
// let array = Array(5).fill(1)
// console.log(array)
let array = [1, 2, 3, 4, 5]
// array.fill(8, 2, 4)
// console.log(array) // [1, 2, 8, 8, 5]

// ======== 第四小节 查找 =======
// es5 filter
// let find = array.filter(function (item) {
//   return item === 0
// })
// console.log(find) // 返回所有符合条件的数据组成的数组，若没有查找到则返回[]

// es6 find
// let find = array.find(function (item) {
//   return item % 2 === 0
// })
// console.log(find) // 返回符合条件的第一个数据，若没有则返回undefined

// 注意filter和find的区别：filter会返回所有符合条件的数据，而find会找到第一个符合条件的，所以要注意使用场景

// findIndex
// let find = array.findIndex(function (item) {
//   return item === 0
// })
// console.log(find) // 返回第一个符合条件的数据的下标，没有则返回-1
