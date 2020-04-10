// let x = 3
// let y = 4
// let z = 8
// let obj = {
//   'x': x,
//   y,
//   [z]: 5,
//   hello () {
//     console.log('hello')
//   },
//   * hello2 () {
//     console.log('hello2')
//   }
// }
// console.log(obj)
// obj.hello()

// ====== Set ======
// let s = new Set()
// // let s = new Set([1, 2, 3, 4])
// // s.add('hello')
// // s.add('goodBye')
// s.add('hello').add('goodBye').add('hello')
// // s.delete('hello')
// // s.clear()
// console.log(s, s.size)
// console.log(s.has('hello'))
// console.log(s.keys())
// console.log(s.values())
// console.log(s.entries())
// s.forEach(item => {
//   console.log(item)
// })

// let map = new Map([[1, 2], [3, 4]])
let map = new Map()
map.set(1, 2)
map.set(3, 4)
map.set(1, 5)
// map.delete(1)
// map.clear()
// console.log(map.size)
// console.log(map.keys(), map.values(), map.entries())
// console.log(map.has(2)) // 注意查找的是索引值 返回true/false
// console.log(map.get(1)) // 注意查找的是索引值 返回索引值对应的数据