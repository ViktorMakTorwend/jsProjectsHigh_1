"use strict";
//⋕js.Sp.FSr.USP.1

let paramsString = 'test1=param1&test2=param2&test3=param3';
let searchParams = new URLSearchParams (paramsString);


searchParams.append('test3', 'param4');
let res1 = searchParams.toString();
console.log(res1);

searchParams.delete('test2');
let res2 = searchParams.toString();
console.log(res2);

searchParams.set('test1', 'param0');
let res3 = searchParams.toString();
console.log(res3);