class Ved{
    constructor(name){
        this.name = name;
    }
    knowledge(){
        console.log("you are god");
    }
    knowledge1(){
        console.log("you are godess");
    }
}

let man = new Ved('Vishnu');
man.knowledge();
console.log(man.name);

let woman = new Ved('Durga');
woman.knowledge1();
console.log(woman.name);
