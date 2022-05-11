// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const car = {
    color: "red ",
    brand: "cadillac",
    year: "2017",
    make: "SUV",
    doors: "4",
    roof: "sun-roof"    
}


// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(car.brand)
console.log(car.make)
console.log(car.doors)

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(car['year'])
console.log(car['roof'])
console.log(car['color'])

// 4.   Try and log a property that doesn't already exist - what output do we get?
console.log (car.size) /// output is undefined 

// 5.   Add a new key-value pair to the vehicle. 
car.size = "not to big"

// 6.   Using bracket-notation update a property on the vehicle. 
car['color'] = "black"
console.log(car)

// 7.   Using dot-notation update a property on the vehicle. 
const dreamCar = {
    make: "Corvette",
    model: "Stingray",
    year: 1969,
    convertible: true,
    colorMain: "Turqoiuse",
    colorHighlight: "Bubblegum Pink",
    carIsOn: true,
    trunkContents: ["Basketball", "Chess Set", "Baseball", "Spare Tire"],
    gloveCompartment: ["Sunglasses", "Gloves", "Registration"],
  };

  dreamCar.make = "Cadillac"
  console.log(dreamCar)

// 8.   Create a method for turning your vehicle on

const startCar = ()=> {
    dreamCar.carIsOn = true
} 

dreamCar.startCar = startCar( "Alright let get going!")
console.log(startCar)

// 9.   Create a method for turning your vehicle off

const turnOffCar = ()=> {
    dreamCar.carIsOn = false
}

dreamCar.turnOffCar = turnOffCar

// console.log(dreamCar)

//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)


if(!dreamCar.carIsOn){
    dreamCar.startCar( ) = ("where are we going")
}
else if(dreamCar.carIsOff){
    dreamCar.turnOffCar() = (" our journey is done!")
}

console.log(dreamCar)



dreamCar.stopEngine = function (inPark, keyTurned) {
    if (inPark && keyTurned && dreamCar.carIsOn === true) {
      dreamCar.carIsOn = false;
      return "Car is turned off";
    } else if (!inPark && keyTurned && dreamCar.carIsOn === true) {
      return "Please put the car in park";
    } else if (inPark && !keyTurned && dreamCar.carIsOn === true) {
      return "Just in park";
    } else {
      return " The engine is already off";
    }
  };
console.log(dreamCar)
