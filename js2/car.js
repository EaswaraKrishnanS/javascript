let cars = [
    {brand : "Maruthi" , price : 800000 , color : 'white' , model : "Swift"},
    {brand : "Tata" , price : 600000 , color : 'Grey' , model : "Punch"},
    {brand : "Mahindra" , price : 1800000 , color : 'Black' , model : "Scorpio"},
    {brand : "Toyota" , price : 4800000 , color : 'Black' , model : "Fortuner"},
    {brand : "Tata" , price : 1400000 , color : 'white' , model : "Nexon"},
    {brand : "Maruthi" , price : 1500000 , color : 'Green' , model : "Jimmy"},
    {brand : "Tata" , price : 2800000 , color : 'Red' , model : "Harrier"},
    {brand : "Tata" , price : 1000000 , color : 'Red' , model : "Curv"},
    {brand : "Mahindra" , price : 1100000 , color : 'Black' , model : "XUV300"},
    {brand : "BMW" , price : 5800000 , color : 'white' , model : "x1"},
    {brand : "Mahindra" , price : 3200000 , color : 'Yellow' , model : "XUV700"}
]

// without filter method
/* let white_car = []
for (car of cars){
    if (car.color === "white")
        white_car.push(car)
}

console.log(white_car); */


//with filter method

let white_car = cars.filter((car) =>{
    return car.color === "white"
})

console.log(white_car);
