/**
 * es6数据结构
  set,map,WeakSet,WeakMap
 */

{
  let list = new Set();
  list.add(5);
  list.add(7);
  console.log('size:',list.size);
  console.log(typeof Set);
}
{
  let arr = [1,2,3,4,5,6];
  let list = new Set(arr);
  console.log('size',list.size);
}
{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('size',list.size,list);//去重
  let arr = [1,2,3,1,2,'3'];
  let list2 = new Set(arr);
  //去重的时候不会转换数据类型
  console.log('unique',list2);
}
{
  let arr=['add','delete','clear','has'];
  let list = new Set(arr);
  console.log('has',list.has('add'));
  console.log('delete',list.delete('add'),list);
  console.log(list.clear(),list);
}
{
  let arr=['add','delete','clear','has'];
  let list = new Set(arr);
  for (let key of list.keys()) {
    console.log('keys',key);
  }
  for (let val of list.values()) {
    console.log('vals',val);
  }
  for (let val of list) {
    console.log('list',val);
  }
  for(let [key,val] of list.entries()){
    console.log([key,val]);
  }
  list.forEach(function (item) {
    console.log(item);
  });
}
{
  //WeakSet只能是对象,对象都是弱引用,只复制地址,不去检查是否被回收
  let weakList = new WeakSet();

  let arg ={};
  weakList.add(arg);
  //weakList.add(1);
  console.log(weakList);
  //没有clear方法,不能遍历,没有set属性.size
}
{
  //Map key可以是任何数据类型
  let map = new Map();
  let arr = ['123'];

  map.set(arr,456);
  console.log('map',map,map.get(arr));
}
{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
  //遍历同set
}
{
  let weakmap = new WeakMap();
  //必须是对象,不能遍历,无clear,无map属性
  let a ={}
  weakmap.set(a,123);
  console.log(weakmap.get(a));
}
/**
 * Map,Set和Array的对比
 */
 {
   //数据结构横向对比,增,查.改,删.
   let map = new Map();
   let arr = [];
   //增
   map.set('t',1);
   arr.push({t:1});
   console.info('map-array',map,arr);

   //查
   let map_exist = map.has('t');
   let array_exist = arr.find(item=>item.t);
   console.info('map_exist',map_exist,array_exist);

   //改
   console.info(arr.t,'ads');
   map.set('t',2);
   arr.forEach(item=>item.t?item.t=2:'');
   console.info('map-arr-modify',map,arr);

   //删
   map.delete('t');
   let index = arr.findIndex(item=>item.t)
   arr.splice(index,1);
   console.info('marry-arr-delete',map,arr)
 }
