{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty = Array.of();
  console.log('empty',empty);
}
{
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function (item) {
    console.log(item.textContent);
  });
  console.log('[1,3,4]:',Array.from([1,3,4],function(item){
    return item+2
  }));
}
{
  console.log('fill-7',[1,'a',undefined,null,NaN].fill(7));
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

{
  //es7
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  for (let value of ['1','c','ks'].values()) {
    console.log('values:',value);
  }
  for(let [index,value] of ['1','c','ks'].values()){
    console.log('value',index,value);
  }
}

{
  console.log('[1,23,432,21,213,4]:',[1,23,432,21,213,4].copyWithin(0,3,4));
}

{
  console.log([1,2,3,4,5,6].find(function (item) {
    return item >3;
  }));
  console.log([1,2,3,4,5,6].findIndex(function (item) {
    return item >3;
  }));
}

{
  console.log('nunmber',[1,2,,NaN].includes(1));
    console.log('nunmberNaN',[1,2,,NaN].includes(NaN));
}
