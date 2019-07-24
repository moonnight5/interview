// function Person (name) {
//   this.name = name
// }
// let p = new Person('wn')
// 1. p._proto_等于什么        (Person.prototype)
// 2. Person._proto_等于什么   (Function.prototype)
// 实例的隐式原型链(_proto_)等于其构造函数的显示原型链(prototype)
// -------------------------------------------------------------------------
// var foo = {},
//     F = function() {};

// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)   // valA
// console.log(foo.b)   // undefined
// console.log(F.a)     // valA
// --------------------------------------------------------------

// function Person (name) {
//   this.name = name
//   // return {}   // {}
//   return 666   // Person { name: 'wn' }
//   // return [1,2,3]    // [ 1, 2, 3 ]
// }
// let p = new Person('wn')
// console.log(p)
// 构造函数是不需要返回值的，使用new来创建对象时，如果return的是非对象类型，
// 会忽略返回值，如果return的是对象，则返回该对象(若return null也会忽略返回值)

// ---------------------------------------------------------------------------------
// function Person (name) {
//   this.name = name
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student

// let s = new Student('wn')
// let w = new Person('wn')
// console.log(s)    //  Student {}
// console.log(w)    //  Student { name: 'wn' }
// console.log(s instanceof Person)    //  true

// ---------------------------------------------------------------------------------------
// for (var i = 0; i < 10; i ++) {
//   setTimeout(() => {
//     console.log(i)   // 10个10
//   }, 0);
// }

// for (let i = 0; i < 10; i ++) {
//   setTimeout(() => {
//     console.log(i)   // 正常打印
//   }, 0);
// }
// // let 每次循环会生成一个封闭的作用域和settimeout绑定，var每次循环会覆盖掉上一次的作用域

// // 闭包
// for (var i = 0; i < 10; i ++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i)   
//     }, 0);
//   })(i)
// }

// -----------------------------------------------------------------------------------

// Array.prototype.method = function() {
//   console.log('wn')
// }

// var myArray = [1,2,3,4,5,6,7]
// for (let index of myArray) {
//   console.log(index)    // 1 2 3 4 5 6 7
// }
// var myArray = [1,2,3,4,5,6,7]
// myArray.name = 'wn'
// for (let index in myArray) {
//   console.log(myArray[index])    // 0 1 2 3 4 5 6
// } 

// for in
// 1. index 索引为字符串型的数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组内部顺序进行
// 3. 使用for in 会遍历数组所有可枚举属性，包括原型链，所以for in 更适合遍历对象

// for of
// for in 遍历的是数组的索引，for of 遍历的是数组的元素
// for of 遍历的只是数组内的元素，而不包括数组原型和索引

// ---------------------------------------------------------------------------------

let gArr = [1,2,[3,4],5,[2,7,[3,9]]]
let oArr = [1,2,3,4,5,2,7,3,9]

// function outputArr (arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(outputArr(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }
// let a = outputArr(gArr)
// console.log(a)

function outputArr (arr) {
  return arr.reduce(function(pre,item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  },[])
}
let a = outputArr(gArr)
console.log(a)