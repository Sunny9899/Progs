

function showVal(x){
   console.log(x%10===0 ? "Multiple of 10" : "Not a multiple of 10");
}


let prom=new Promise((res,rej)=>{
    res(10) // input a value here(like 60)
})
.then((r)=>{
    //console.log(r);
   return(r*10);
})
.then((r2)=>{
   return(r2/25);
})
.then((r3)=>{
    return(r3+6);
})
.then((r4)=>{
    showVal(r4);
})
.catch((e)=>{
    console.log(e);
})

/*
async function find(){
    try{
    let res=await fetch("https://fakestoreapi.com/products/1");
    let res2=await res.json();
    console.log(res2);
    }
    catch(e){
     console.log("error: "+e);
    }
}
find();
*/