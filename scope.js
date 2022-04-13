//1
var a=10;

function add(){
    let b=10;
    const c=20;
    console.log("Function Scope: "+(a+b+c));
}

let first=add(); //Will give output=40
//console.log(a+b+c);  //Will give Refference Error



//2

hoist();

function hoist(){ 
    var first="S";
    let middle="P";
    const last="P";

console.log(first+middle+last); //Will give output a SPP

}


//3
console.log("Before: "+x); //var x is accessible but since it's hoisted it will give undefined
{
    var x=100;
    let y=200;
    const z=300;
}
console.log(x); //Will give 100 (Block Scope var);
console.log(y); //Refference Error (Block Scope let);
console.log(z); // Refference Error (Block Scope const);


