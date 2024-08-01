/* class parent{

}

class child{

}

let c1 = new child()

console.log(c1); */


class parent{
    m1(){
        console.log('Parent Class -m1 Method');
    }
    m2(){
        console.log('Parent Class -m 2Method');   
    }
}

class child extends parent{
    m3(){
        console.log('Child Class -m3 Method');
    }
}

let c1 = new child()

c1.m1()
c1.m2()
c1.m3()