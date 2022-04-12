//Object.assign(target, source1, source2, source3---);

//1
let obj1={
    "key1":"val1",
    "key2":"val2",
    "key3":"val3",        
}
let newObj2=Object.assign({},obj1);
//console.log(newObj2);

//2
let obj3={
    "key4":"val4",
    "key5":"val5",
    "key6":"val6",        
}
let newObj4=Object.assign(newObj2,obj3);
console.log(newObj4);

//3 
let one=1; 
let two=true;
let three="think";

const newObj5=Object.assign(obj1,one,two,three);
console.log(newObj5); //Null and Undefined will be ignored. Only strings will be converted