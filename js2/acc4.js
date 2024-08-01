/* class acc {
    acc_id
    acc_name
    acc_bal
}

let a1 = new acc()
let a2 = new acc()
let a3 = new acc()

console.log(a1);
console.log(a2);
console.log(a3); */


/* class acc {
    acc_id
    acc_name
    acc_bal
    min_bal=500
    constructor (ID,Name,Amount){
        this.acc_id=ID
        this.acc_name=Name
        this.acc_bal=Amount
    }


    get_bal(){
        return this.acc_bal - this.min_bal
    }
}

let a1 = new acc(101,'Aathi',55000)
let a2 = new acc(102,'Rahul',23500)
let a3 = new acc(110,'siva',12345)

console.log(a1.get_bal());
console.log(a2.get_bal());
console.log(a3.get_bal()); */


/* class acc {
    acc_id
    acc_name
    acc_bal */
    /* min_bal=500
    constructor (ID,Name,Amount){
        this.acc_id=ID
        this.acc_name=Name
        this.acc_bal=Amount
    }


    get_bal(){
        return this.acc_bal - this.min_bal
    }
}

let a1 = new acc(101,'Aathi',55000)
let a2 = new acc(102,'Rahul',23500)
let a3 = new acc(110,'siva',12345)

console.log(a1.get_bal());
console.log(a2.get_bal());
console.log(a3.get_bal()); */


/* class acc { */
    /* acc_id
    acc_name
    acc_bal */
/*     min_bal=500
    constructor (ID,Name,Amount){
        this.acc_id=ID
        this.acc_name=Name
        this.acc_bal=Amount
    }

    deposit_amount(amount){
        this.acc_bal = this.acc_bal + amount
    }

    withrawal (cash){
        this.acc_bal = this.acc_bal - cash
    }

    get_bal(){
        return this.acc_bal - this.min_bal
    }
}

let a1 = new acc(101,'Aathi',55000)
let a2 = new acc(102,'Rahul',23500)
let a3 = new acc(110,'siva',12345)

a1.deposit_amount(500)
console.log(a1);

a2.deposit_amount(1500)
console.log(a2);

a3.deposit_amount(55)
console.log(a3); */



class Account{
    /*   acc_Id;
      acc_Name;
      acc_Bal; */
      min_Bal=500;
      constructor(id,name,amount){
          this.acc_Id=id;
          this.acc_Name=name;
          this.acc_Bal=amount
      }
      deposit_Amount(amount){
          this.acc_Bal = this.acc_Bal + amount
      }
      withdrawl(amount){
          this.acc_Bal = this.acc_Bal - amount
      }
      get_Bal(){
          return this.acc_Bal - this.min_Bal
      }
  }
  
  let a1=new Account(101,'Rahul',5000)
  let a2=new Account(102,'Sonia',15000)
  
  a1.deposit_Amount(150)
  a1.withdrawl(15)
  console.log(a1.get_Bal())
  
  a2.deposit_Amount(4000)
  a2.deposit_Amount(2000)
  console.log(a2.get_Bal())