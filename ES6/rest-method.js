// Rest Operator
/* function add(a,...b){
    console.log(a,b);
}

add(10,20)
add(10,20,30)
add(10,20,30,40)
add(10,20,30,40,50)
add(10,20,30,40,50,60) */


// Object Restructure

let state = {
    prod_id : 'p101',
    p_name : 'iphone 5s',
    user : {
        u_id : 101,
        u_name : 'aathi'
    },
    emp : {},
    loc : ['wyanad','new delhi']
}

let {user} = state
let {u_name} = user
console.log(u_name);

