/* In Typescript
let array=[1,2,3,4,9];
let arr=[5,6,7,8];
array=[1,2,3,4,...arr,9];
console.log(array);
*/

//1
let inpt=[1,2,3,4,5];

let newInpt=[...inpt,6,7,8,9];

console.log(inpt,newInpt);


//2
let secInpt=["Ruby","Pearl","Diamond"];

const func=(Arr,Arr2)=>{
   let secnewInpt=[Arr,...Arr2];   
   return secnewInpt;
}
console.log(func(newInpt,secInpt));


//3
let thrnewInpt=[...inpt];
thrnewInpt.push(22);
console.log(inpt,thrnewInpt);