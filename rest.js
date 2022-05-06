/*//In Typescript
function sum(...parameters){
      let sum=0;
    
      for(let i=0;i<parameters.length;i++){
          sum+=parameters[i];
      }
      return sum;
    
}

console.log(sum(2,4,6));
console.log(sum(1,2,3,4,5));
*/

function rest(a,b,c,d, ...restOfArgs){

console.log(a,b,c,d);
console.log("restOfinpt: "+restOfArgs);
}

rest(1,2,3,4,5,6,7,8,9);