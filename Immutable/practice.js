const { Map, List } = require("immutable");

const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
console.log(map1.get('b') + " vs. " + map2.get('b')); // 2 vs. 50


const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
console.log(alpha.map((v, k) => k.toUpperCase()).join()); // A,B,C,D

const map3 = Map({ a: 1, b: 2, c: 3 });
const map4 = Map({ a: 1, b: 2, c: 3 });
console.log(map3.equals(map4)); // true
console.log(map3 === map4); // false

const map5 = Map({ a: 1, b: 2, c: 3 });
const map6 = map5.set('b', 2); // Set to same value
console.log(map5 === map6); // true


const map7 = Map({ a: 1, b: 2, c: 3, d: 4 });
const map8 = Map({ c: 10, a: 20, t: 30 });
const obj = { d: 100, o: 200, g: 300 };
const map9 = map7.merge(map8, obj);  // Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }
 
const list1 = List([ 1, 2, 3 ]);
const list2 = List([ 4, 5, 6 ]);
const array = [ 7, 8, 9 ];
const list3 = list1.concat(list2, array);  // List [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
