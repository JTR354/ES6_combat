/**
 * symbol数据类型
  作用:生成一个独一无二的值,唯一性
 */
{
  //声明
  let a1 = Symbol();//静态
  let a2 = Symbol();
  console.log(a1,a2,a1===a2,a1==a2);
  let a3 = Symbol.for('a3');
  let a4 = Symbol.for('a3');
  console.log(a3===a4);
}
{
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]:123,
    'abc':345,
    'c':456
  };
  console.log('obj:',obj);
  for (let [key,val] of Object.entries(obj)) {
    console.log([key,val]);
  }
  Object.getOwnPropertySymbols(obj).forEach(function (item) {
    console.log(obj[item]);
  })
  Reflect.ownKeys(obj).forEach(function (item) {
    console.log('ownKeys',item,obj[item]);
  })
}
