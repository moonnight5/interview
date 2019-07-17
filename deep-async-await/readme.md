## async
async 函数就是 Generator 函数的语法糖

## generate 函数
```js
   function* test() {
      let a = yield 1
      console.log(a)
      let b = yield 2
      console.log(b)
      let c = yield 3
      console.log(c)
    }
    // 惰性的
    // test();
    // 生成一个对象 {next}
    // 调用next一步一步执行
    var g = test();
    // g.next()
    // g.next()
    // g.next()
```
通过g.next()一步一步调用，每一步调用执行到yield关键词
通过传参 做可做为上一个yield语句的返回值


##
{
  test: /\.js$/
  use: ['babel-loader]
}