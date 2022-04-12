function func1(){
    let a=10;

    return function func2(){
        let b=10;
        let c=a+b;

           return function func3(){
               let d=20;
               return(c+d);
           }

    }

}
///*Without Currying
let a=func1();
let b=a();
let c=b();
console.log("Without Currying: "+c);
//*/

//With Currying
console.log("With Currying: "+func1()()());