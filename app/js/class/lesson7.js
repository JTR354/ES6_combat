{
  //默认值
  function test(x,y = 'world') {
    console.log('默认值',x,y);
  }
  test('hello');
  test();
  test('hello','kill');
}
{
  //作用域
  let x = 'test';
  function test2(x,y=x) {
    console.log('scope:',x,y);
  }
  test2('kills');
  test2();
  function test33(c,y=x) {
    console.log('scope:',x,y);
  }
  test33('abc');
}
{
  //rest参数
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}
{
  console.log(...[1,2,4]);
  console.log('a',...[1,2,4]);
}
{
  //箭头函数,函数名v 函数参数v 函数返回
  let arrow = v=> v*2;
  console.log('arrow:',arrow(3));
  let arrow2 = ()=>5;
  console.log('arrow2:',arrow2());
  arrow = v=>v*3;
  console.log(arrow(4));
}
{
  //尾调用
  function tail(x){
    console.log('tail:',x);
  }
  function fx(x) {
    return tail(x);
  }
  fx(123);
  //尾调用,提升性能,递归嵌套函数地址;
}
