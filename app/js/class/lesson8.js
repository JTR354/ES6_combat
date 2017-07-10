/**
 * 对象扩展
 */
 {
   //简洁表示
   let o = 1;
   let k = 2;
   let es5={
     o:o,
     k:k
   };
   let es6={
     o,
     k
   };
   console.log(es5,es6);

   let es5_method = {
     hello:function () {
       console.log('hello');
     }
   }
   let es6_method = {
     hello(){
       console.log('hello');
     }
   };
   console.log(es5_method.hello(),es6_method.hello());
 }
 {
   //属性表达式
   let a = 'b';
   let es5_obj = {
     a:'c'
   };
   let es6_obj = {
     [a]:'c'
   };
   console.log(es5_obj,es6_obj);
 }
 {
   //Object新增常用API
   console.log('字符串:',Object.is('abc','abc'),'abc'==='abc');
   console.log('数组:',Object.is([],[]),[]===[]);
   //浅拷贝,只拷贝地址;继承的属性不会拷贝;不可枚举的也不拷贝;
   console.log('拷贝',Object.assign({a:'a'},{b:'b'}));
   let x = 2;
   let y = 3;
   let z =666;
   let q = 777;
   let obj1 = {x,y};
   let obj2 = {z,q};
   //console.log(Object.assign(obj1,obj2));
   console.log('obj1',obj1);
   console.log('obj2',obj2);
   let obj3 = Object.assign(obj1,obj2);
    console.log('obj3',obj3);
   obj2.z = 100;
   obj1.x = 222;
   console.log('obj1',obj1);
   console.log('obj2',obj2);
   console.log('obj3',obj3);

   let test={k:123,o:456}
   for (let [key,val] of Object.entries(test)) {
     console.log([key,val]);
   }
 }
 {
   //扩展运算符babel支持不太好
   //let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'}
  //  c={
  //    c:'ddd',
  //    d:'ccc'
  //  }
 }
