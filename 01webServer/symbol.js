let sym1 = Symbol("ravi");
let sym2 = Symbol("karan");
let sym = Symbol();
console.log(sym1 === sym2);
console.log(sym.toString());

let obj ={
    name:"ravi",
    age:20,
    [sym1]:12345
}
console.log(obj[sym1]);

const _key = Symbol();
let obj1 = {};
obj[_key] = 112233;

const fruit = Symbol('Apple');
