class acc{
    min_bal=500
    acc_bal=0

    deposit_amount(amount){
        this.acc_bal = this.acc_bal + amount
    }
    get_bal(){
        /* console.log(this.acc_bal - this.min_bal); */

        return this.acc_bal - this.min_bal
    }

    withrawal_amount(cash){
        this.acc_bal = this.acc_bal - cash
    }
}

let aathi=new acc()
aathi.deposit_amount(55500)
aathi.withrawal_amount(10000)

let rahul=new acc()
rahul.deposit_amount(2500)
rahul.withrawal_amount(200)

/* console.log(rahul);
console.log(aathi); */

/* aathi.get_bal()
rahul.get_bal() */

let bal1=aathi.get_bal()
console.log(bal1);

let bal2=rahul.get_bal()
console.log(bal2);