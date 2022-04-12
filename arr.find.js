//Gonna give the first value from the array that satisfies the given condition.
//find((element,index,array)=>{})
//If no value is found, undefined is the displayed result.

//1
const arr=[1,2,3,4,5,6,7,8,9,0];

let ans=arr.find(e=>e>0);
//console.log(ans);

//2
const arr2=[{num:120},{num:234},{num:345},{num:678},{num:463}];

function  see(n){
    return n.num===345;
}
console.log(arr2.find(see));