class empInfo{
    constructor(name,age,salary,position){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.position=position;
    }
}

function city(c){
    this.city=c;
}

let emp1=new empInfo("Sunny",22,100,"SE");
console.log(emp1);


let updEmp1=city.call(emp1,"Noida");
console.log(emp1);