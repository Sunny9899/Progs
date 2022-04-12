const Promise1= new Promise((res,rej)=>{

res("Success");    
rej("Failure");
})

const Promise2 = new Promise((res,rej)=>{

res(10+10);
rej(10-10);

})

Promise.all([Promise1,Promise2])
.then((ans)=>{
    console.log(ans);
})
.catch((ans)=>{
    console.log(ans);
})