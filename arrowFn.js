//1

let toggle=false;

const Toggle=()=>{
   toggle=true;
}

Toggle();

console.log(toggle===false ?"Toggle False":"Toggle True")



//2
let num=10;

let object1={
    a:10,
    b:()=>{console.log(this.num);
     console.log(this.a); 
    },
    c:function(){console.log(this.num); 
     console.log(this.a); 
    }
}

object1.b(); // arrow function
object1.c(); // normal function