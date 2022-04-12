//Logical AND inplace of If

let a=10;
let b=20;

let flag="false";

if(a!=b){
    if(a>b){
      flag="true";
    }
}
console.log("If: "+flag);

console.log((a!=b && a>b) ?"true":"false");