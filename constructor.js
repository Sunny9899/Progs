//constructor using new

function Player(n,t){
    this.name=n;
    this.team=t;
}

var player1=new Player("Virat","India");
var player2= new Player("Rohit","Sharma");


console.log(player1,player2);
console.log(player1.name,player2.name); 