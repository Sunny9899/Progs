const hey=(msg)=>{
    return msg;
}

const nope=(msg)=>{
    return msg;
}

const promise = new Promise((res,rej)=>{
    res(hey("Working"));
    rej(nope("Not Working"));
})
.then((val)=>{
    console.log(val);
})
.catch((err)=>{
    console.log(err);
})