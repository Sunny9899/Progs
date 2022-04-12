const Person={
    "name":"Sunny",
    "printName":function print(){
        console.log(this.name);
    }
}
Person.printName();

Person.name="Suryansh";

Person.printName();