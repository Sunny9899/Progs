//spread optr to create new object

/* In typescript

let object:{
    num:number;
    price:number;
    name:number;
}={
    num:1,
    price:2,
    name:3
}

let newKey:{
    new:number;
}={new:234};
object={...object,...newKey};
console.log(object);

*/


//1
let obj1={
    "k1":"v1",
    "k2":"v2",
    "k3":"v3",
    "k4":"v4",
};

let newObj={...obj1};
console.log(newObj);

//2
let newVal={"Nk5":"Nv5"};

let newNewObj={...obj1,"Nk6":"Nv6",newVal};

console.log(newNewObj);

//3

let newVal7="Nv7";

let newNewNewObj={...newNewObj,newVal7};
console.log(newNewNewObj);