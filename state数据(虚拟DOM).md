1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成新真实的DOM，来替换原始的DOM

缺陷：
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第一次的DOM，非常耗性能

1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
6. 新的DOM(DoucumentFragment) 和原始的DOM 做对比，找差异
7. 找出input框发生了变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

缺陷：
性能的提升并不明显

// react数据视图更新原理
1. state 数据
2. JSX 模板

3. 数据 + 模板结合 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实的DOM)
<div id='abc'><span>hello world</span></div>
4. 用虚拟DOM的结构生成真实的DOM，来显示
['div', {id: 'abc'}, ['span',{}, 'hello worle']]
5. state 发生变化
6. 数据 + 模板 生成新的虚拟DOM 
['div', {id: 'abc'}, ['span',{}, 'bye bye']]
7. 比较原始的虚拟DOM和新的虚拟DOM的区别，找到区别是span中的内容（Diff , diffrence算法）
同层比对的


8. 直接操作DOM 改变span中的内容

优点：
1. 性能提升了。
2. 它使得跨端应用得以实现。 React Native



react 自身性能的优化方案
1.this作用域修改放在构造函数中绑定
2. setState内置性能提升机制它是个异步的函数可以把多次的数据改变结合到一次这样降低虚拟DOM的匹配频率
3.react底层的虚拟DOM概念，还有同层比对，key值来提升虚拟DOM比对的速度来提升性能
4.借助shouldComponentUpdate生命周期


安装npm install axios

Redux使用
React Components(比喻借书的人)
ActionCreaturs(爱啃亏圈死)(比喻你说的要借什么书)
Store (比喻为图书馆的管理员)
Reducers(睿丢色死)(比喻记录本)

Redux中间件的原理
中间件指的是Action 和Store 之间

Redux-thunk(睿大四桑可)
