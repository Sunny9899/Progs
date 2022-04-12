let arr=[1,2,4,5,10];

let tot=1;

var sum=arr.reduce((tot,val)=>{
    return (tot+val);
})

let multiply= arr.reduce((tot,val)=>{
    return (tot*val);
})

console.log(sum);
console.log(multiply);