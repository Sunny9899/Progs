


let prom=new Promise((res,rej)=>{
    res(10) // input a value here(like 60)
})
.then((r)=>{
   return(r*10);
})
.then((r2)=>{
   return(r2/25);
})
.then((r3)=>{
    return(r3+6);
})
.then((r4)=>{
    console.log(r4);
})
.catch((e)=>{
    console.log(e);
})
