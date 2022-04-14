//1
let toggle=false;

const func=()=>{
   toggle=true;
}

func();

console.log(toggle===false ?"Toggle False":"Toggle True")



//2
let n=10;

let obj1={
    a:10,
    b:()=>{console.log(this.n); //undefined as arrow doesn't possess power of this
     console.log(this.a); //undefined as arrow doesn't possess power of this 
    },
    c:function(){console.log(this.n); //undefined as variable ain't defined within scope of the object obj1
     console.log(this.a); 
    }
}

obj1.b(); // arrow function
obj1.c(); // normal function