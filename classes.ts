// class User{
    
//     private name:string;
//     public email:string;
//     private age:number;

//     constructor(name:string,email:string,age:number){
//         this.name=name;
//         this.email=email;
//         this.age=age;

//         console.log("user created:"+ this.name);
//     }
//     public register(){
//         console.log(this.name+" is registered")
//     }
// }


// let jhon= new User('Jhon','jhon@gmail.com',31);

// console.log(jhon.email);

// jhon.register();

interface UserInterface{
     name:string;
     email:string;
     age:number;
    register();
    payInvoice();
}

class User implements UserInterface{
    
     name:string;
     email:string;
     age:number;

    constructor(name:string,email:string,age:number){
        this.name=name;
        this.email=email;
        this.age=age;

        console.log("user created:"+ this.name);
    }
    register(){
        console.log(this.name+" is registered")
    }

    payInvoice(){
        console.log(this.name+' payed Invoice')
    }
}


class member extends User{
    id:number;

    constructor(id:number,name:string,email:string,age:number){
        super(name,email,age);
        this.id=id;
    }

    payInvoice(){
        super.payInvoice()
    }
}

let usama:User=new member(1,'usama','usama@gmail.com',21)

usama.register();
usama.payInvoice();