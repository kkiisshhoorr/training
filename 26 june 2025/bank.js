class bank{
    constructor(name,amount,pin){
        this.name=name
        this.balance=amount
        this.pin=pin
        this.accountnumber=Math.floor(Math.random()^900000+100000)
    }
    deposit(amount){
        if(amount>0){
            this.balance+=amount
            console.log(this.balance)
        }
        else{
            console.log("enter valid amount")
        }
    }
    withdraw(mon){
        if(mon<this.balance){
            console.log("low balace")
        }
        else if(mon>this.balance){
            this.balance=this.balance-mon
            console.log(`the balance is ${this.balance}`)

        }
    }
    detail(pin){
        if(pin==670){
        console.log(`the name is${this.name}`)
        console.log(`the account number is${this.accountnumber}`)
        console.log(`the balance is${this.balance}`)
        }
        else{
            console.log("enter a valid pin")
        }

    }
}
let c=new bank("kishor",50000,1234)
c.deposit(500)
c.detail(123)
