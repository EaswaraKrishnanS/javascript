
// 

/* let eids=[101,102,103,104,105,106] */

/* console.log(eids[0])
console.log(eids[1])
console.log(eids[2])
console.log(eids[3])
console.log(eids[4])
console.log(eids[5])
console.log(eids[6]) */

/* for (let i=0;i<=5;i++){
    console.log(eids[i])
} */

/*     let i=0
    while(i<=5){
        console.log(eids[i])
        i++
    } */


// do while loop


/* let i=0
do {
    console.log(eids[i])
    i++
}while(i<=5) */

// for loop

/* let result = '';
for (let i = 1; i <= 5; i++) {
  result += i + ' ';
}
console.log(result.trim());
 */

// for loop


/* let numbers=[10,431,44,57,17,18]
for(num of numbers){
	if (num%2===0) {
		console.log(num);
	}
} */

// for of type

/* let users=[{id:101,name:"Rahul",gender:"Male"},
    {id:102,name:"Sonai",gender:"Female"},
    {id:103,name:"Priyanka",gender:"Female"},
    {id:104,name:"Modi",gender:"Male"}
    ] */

/* for (user of users) {
    
}
console.log(users.length) */

/* for (user of users) {
    if(user.gender=="Male")
    console.log(user)    

} */
// while loop


/* let users=[{id:101,name:"Rahul",gender:"Male"},
    {id:102,name:"Sonai",gender:"Female"},
    {id:103,name:"Priyanka",gender:"Female"},
    {id:104,name:"Modi",gender:"Male"}
   ]
let i=0
while(i<=users.length-1){
if (users[i].gender=="Male"){
 console.log(users[i])
}
 i++;
} */

// alternate type while

 /* let users = [
    { id: 101, name: "Rahul", gender: "Male" },
    { id: 102, name: "Sonai", gender: "Female" },
    { id: 103, name: "Priyanka", gender: "Female" },
    { id: 104, name: "Modi", gender: "Male" }
];

let maleUsers = [];
let i = 0;

while (i <= users.length - 1) {
    if (users[i].gender == "Male") {
        maleUsers.push(users[i]);
    }
    i++;
}

console.log(maleUsers); */

// To Find how many male and female.


/* let users=[
    {"id":1,"name":"Harlie","gender":"Female"},
    {"id":2,"name":"Adora","gender":"Female"},
    {"id":3,"name":"Gale","gender":"Female"},
    {"id":4,"name":"Antin","gender":"Agender"},
    {"id":5,"name":"Blaire","gender":"Female"},
    {"id":6,"name":"Ray","gender":"Male"},
    {"id":7,"name":"Cecilla","gender":"Female"},
    {"id":8,"name":"Idalina","gender":"Female"},
    {"id":9,"name":"Rubetta","gender":"Female"},
    {"id":10,"name":"Maxwell","gender":"Male"},
    {"id":11,"name":"Erhard","gender":"Male"},
    {"id":12,"name":"Nanette","gender":"Genderqueer"},
    {"id":13,"name":"Charissa","gender":"Female"},
    {"id":14,"name":"Renata","gender":"Female"},
    {"id":15,"name":"Tammi","gender":"Female"},
    {"id":16,"name":"Tamma","gender":"Female"},
    {"id":17,"name":"Temple","gender":"Male"},
    {"id":18,"name":"Teador","gender":"Genderqueer"},
    {"id":19,"name":"Britteny","gender":"Female"},
    {"id":20,"name":"Ralf","gender":"Male"},
    {"id":21,"name":"Fin","gender":"Male"},
    {"id":22,"name":"Joyous","gender":"Female"},
    {"id":23,"name":"Dora","gender":"Female"},
    {"id":24,"name":"Calida","gender":"Female"},
    {"id":25,"name":"Ceil","gender":"Female"},
    {"id":26,"name":"Harper","gender":"Male"},
    {"id":27,"name":"Marlane","gender":"Genderfluid"},
    {"id":28,"name":"Sanders","gender":"Male"},
    {"id":29,"name":"Joann","gender":"Female"},
    {"id":30,"name":"Richmond","gender":"Male"}
]


let no_of_male_users=0
let no_of_female_users=0
for (user of users){
    if (user.gender==="Male") {
	    no_of_male_users++;
	}
	if (user.gender==="Female") {
		no_of_female_users++;
	}
	
}
console.log("no of male user:",no_of_male_users)
console.log("no of female users:",no_of_female_users) */

// to find array length

/* let a=[]
let b=[10,11,12,13,14,15]
console.log(a.length)
console.log(b.length) */

// to find object length

/* let a={
    Name : "Aathi",
    Id : 101,
    Location : "Pondy"
}

let length = Object.values(a).length

console.log(length) */

/* let product={}
let emp={
    id:101,
    name:"Rahul",
    sal:45000
}
if(Object.keys(product).length > 0){
    console.log("Given Object is not Empty")
}else{
    console.log("Given Object is Empty")
} */


/* let product={}
let emp={
    id:101,
    name:"Rahul",
    sal:45000
}
if(Object.keys(emp).length > 0){
    console.log("Given Object is not Empty")
}else{
    console.log("Given Object is Empty")
} */


    /* function emp(){
        console.log("Aathi")
        console.log(101)
        console.log("Bangalore")
    }
    emp() */


    function add(a,b){
        console.log(a+b)
        document.write(a+b)
    }
    

    add(10,35)