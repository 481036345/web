//节流(throttle)
//    规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
//定义一个节流函数
function throttle(fn, delay) {
  //flag 是否阻断不允许继续触发函数
  let flag = true,
    //timer 计数器
    timer = null;
  return function (...args) {
    //保存  this
    let context = this;
    //如果  falg = false;则返回，true 则继续执行
    if (!flag) return;
    //把 flag 设置为false
    flag = false;
    //清除计时器
    clearTimeout(timer);
    //执行fn 函数 把 flag 改为true
    timer = setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, delay);
  };
}
//测试节流
var fn1 = () => {
  console.log("测试节流");
};
var x = throttle(fn1, 3000);
var it1 = setInterval(() => {
  x();
  // clearInterval(it1);
}, 300);

//防抖
//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
function debounce(fn, delay) {
  //定义计数器
  let timer = null;
  return function (...args) {
    // 如果有计数器清除计时器
    if (timer) clearTimeout(timer);
    // 没有则创建计时器
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

var y = debounce(function () {
  console.log("这是防抖");
}, 3000);

var it2 = setInterval(() => {
  y();
  // clearInterval(it2);
}, 300);

// 区别
// 他们都是可以防止一个函数被无意义的高频率调用，区别在于:
//     函数节流：是确保函数特定的时间内至多执行一次。 函数防抖：是函数在特定的时间内不被再调用后执行。
