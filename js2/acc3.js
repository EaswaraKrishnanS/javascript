class account{
    
    min_bal=500
    acc_bal=0
    
    deposit_amount(amount){
        this.acc_bal = this.acc_bal + amount
    }
    withdrawal(cash){
        this.acc_bal  = this.acc_bal - cash
    }   
    get_bal(){
        return this.acc_bal - this.min_bal
    }
}

let a1 = new account()
a1.deposit_amount(15000)
a1.withdrawal(5000)

console.log(a1);

console.log(a1.get_bal());

let a2 =new account();
console.log(a2.get_bal())
let a3= new account();
a3.deposit_amount(15000)
console.log(a3.get_bal())

console.log("**print object**")
console.log(a1)
console.log(a2)
console.log(a3)