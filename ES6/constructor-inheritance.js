class parent{
    constructor(){
        console.log('Constractor - Parent Class');
    }
}

class child extends parent{
    constructor(){
        super()
        console.log('Constractor - Child Class');
    }
}

let c1=new child()