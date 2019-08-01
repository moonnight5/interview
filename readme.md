# q1.  js全局执行上下文为我们创建了两个东西：全局对象和this关键字
  new 的实现原理：
   1. 创建一个空对象，构造函数的this指向这个空对象
   2. 这个新对象被执行[原型]连接
   3. 执行构造函数，将属性或方法添加到this引用的对象上 
   4. 如果构造函数中没有返回其他对象，那么返回this，即创建的新对象。否则，返回构造函数返回的对象

# q2.  call,bind,apply
  1. b.call(a) 就相当于把b里面的作用域强行指到a里面去，第一个参数一定是this作用域要去到的地方，第二三四。。。个参数是该作用
     域里用到的值 
  2. b.apply(a) 就相当于把b里面的作用域强行指到a里面去，第一个参数一定是this作用域要去到的地方，第二三四。。。个参数是该作    用域里用到的值，但是需要用数组类型
  3. b.call() || b.apply() 此时this的作用域会指向window
  4. c = b.bind(a)
     c()
     bind()方法返回的是一个修改过的函数，所以该用函数该有的姿态去调用
     bind()方法接受的参数是按照形参的顺序进行的

# q3.  浅拷贝和深拷贝
  1. 数组解构：
        let [x,y] = [1,2]      x=1,y=2
  2. 对象解构：
        let {foo,bar} = {foo:'aaa',bar:'bbb'}    foo = 'aaa' , bar = 'bbb'
        另：(允许给赋值的变量重命名)
        let {foo:baz} = {foo:'abc'}           baz = 'abc'
  3. 浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和原对象互不影响，但是如果第一层的属性值是 # 复杂数
     据类型 # 那么新对象和原对象的属性值其指向的是同一块内存地址
  4. 深拷贝是将对象及值复制过来，两个对象修改其中任意一个的值，其中一个不会改变

# q4.  闭包
  闭包是指有权限访问另一个函数作用域中的变量的函数
   1. 能够访问函数定义是所在的词法作用域(阻止其被回收)
   2. 私有化变量
   3. 模拟块级作用域

# q5.  数组去重
  1. es6 里面的Set 方法 函数体：
     ```js
    function uniq(arr) {
      return [...new Set(arr)] 
    }
    ```
  2. 使用indexOf方法  查找下标，如果同样的值能找到下标就不放进新的数组
    ```js
    function uniq(arr) {
      let res = []
      for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
          res.push(arr[i])
        }
      }
      return res
    }
    ```
  3. includes
    ```js
    function uniq(arr){
      let result = []
      for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
          result.push(arr[i])
        }
      }
      return result
    }
    ```
  4. 使用map方法
    ```js
    function uniq(arr) {
      let map = new Map()
      let res = new Array()
      for ( let i = 0; i < arr.length; i++) {
        //map.has()返回一个bool值，用来表明map 中是否存在指定元素.
        if (map.has(arr[i])) {
          //吧arr[i]都push进去（key，value）
          map.set(arr[i],true)
        } else {
          map.set(arr[i],false)
          res.push(arr[i])
        }
      }
      return res
    }
    ```
  5. 使用reduce
    ```js
    function uniq(arr) {
      return arr.reduce((prev,cur) => 
        prev.includes(cur) ? prev : [...prev,cur],[]
      )
    }
    ```

# q6.  防抖节流函数原理

# q7.  __proto__ 和 prototype 关联
  __proto__是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__与其构造函数的prototype指向的是同一个对象
      
# q11. get 和 post 请求在缓存方面的区别
  get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存
  post不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存
  因此，get请求更适合于请求缓存
  ##自行补充其他区别

# q12. url长度限制
  http协议并没有限制URL的长度，是浏览器或者web浏览器做了URL长度的限制，并且只针对于请求做的限制
  IE :     2803
  Firefox: 65536
  Chrome:  8182
  Safari:  80000
  Opera:   190000

# q13. 前端事件流
  在DOM标准的事件模型中，事件流包括下面几个阶段：
   1. 事件捕获阶段
   2. 处于目标阶段
   3. 事件冒泡阶段
   addeventlistener 第三个参数，为true是捕获，false时是冒泡，默认是false （IE浏览器只支持事件冒泡）

# q14. 图片懒加载和预加载的区别
  预加载：提前加载图片，当用户需要查看图片时可直接从本地缓存中渲染
  懒加载：作为服务器的前端优化，减少请求或延迟请求
  懒加载对服务器有一定的缓解压力作用，而预加载则会增加服务器的压力

# q15 parseInt(string,radix)
  string
    要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用  ToString 抽象操作)。字符串开头的空白符将会被忽略。
  radix
    一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。比如参数"10"表示使用我们通常使用的十进制数值系统。始终指定此参数可以消除阅读该代码时的困惑并且保证转换结果可预测。当未指定基数时，不同的实现会产生不同的结果，通常将值默认为10。
  parseInt('2') 默认十进制 输出 2
  parseInt('2'，1) 输出NaN
  parseInt('4'，3) 输出NaN
  parseInt('4'，4) 输出NaN
  parseInt('4'，5) 输出4
  进制数不能小于2 小于2都是NaN
  如果传入的字符串里面的每位的最大数字大于或等于进制数，也会输出NaN


# q16 js中的各种位置
  clientHeight: 表示可视区域的高度，不包含border和滚动条
  offsetHeight：表示可视区域的高度，包含border和滚动条
  scrollHeight：表示所有区域的高度，包含因为滚动被隐藏的部分
  clientTop：表示边框border的厚度，在未指定的情况下一般为0
  scrollTop：表示滚动后被隐藏的高度，
  https://blog.csdn.net/qq_33036599/article/details/81224346

# q17 js拖拽功能的实现

