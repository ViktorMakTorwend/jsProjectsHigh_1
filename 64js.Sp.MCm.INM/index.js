let {compact, size} = require('lodash');

let arr = [0, 1, 2, false, 4, '' ];
let res = compact(arr);
console.log(res);

let obj = { 'a': 1, 'b': 2, 'c':3 }
let sizeObj = size(obj);
console.log(sizeObj);