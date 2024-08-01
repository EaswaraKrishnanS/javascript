// for method

/* let enmaes = ['Aathi','Rahul','Siva']

let new_Enames1=[]

for(let i=0;i<=enmaes.length-1;i++){
    new_Enames1.push(enmaes[i])
}

console.log(enmaes);
console.log(new_Enames1); */


// while methode

/* let enmaes = ['Aathi','Rahul','Siva']

let new_Enames1=[]

let i=0
while(i<=enmaes.length-1){
    new_Enames1.push(enmaes[i])
    i++
}

console.log(enmaes);
console.log(new_Enames1); */


// do while methode

/* let enmaes = ['Aathi','Rahul','Siva']

let new_Enames1=[]

let i=0
do{
    new_Enames1.push(enmaes[i])
    i++
}while(i<=enmaes.length-1)
console.log(enmaes);
console.log(new_Enames1); */



// for of methode


/* let enames = ['Aathi','Rahul','Siva']

let new_Enames1=[]

for( let ename of enames){
    new_Enames1.push(ename)
}

console.log(enames);
console.log(new_Enames1); */



// fat arrow methode


/* let enames=['aathi','rahul','siva']

let new_Enames1=enames.map((ename)=>{
    return ename
})

console.log(enames);
console.log(new_Enames1); */


// spread operator


/* let enmaes=['aathi','rahul','siva']

let new_Enames1=[...enmaes]

console.log(enmaes);
console.log(new_Enames1); */


// spread operator - using for merging two array

let a=[10,20,30,40]
let b=[50,60,70,80]
let c=[...a,...b]

console.log(c);



