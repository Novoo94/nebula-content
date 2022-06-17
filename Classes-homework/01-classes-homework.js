// In our in-class practice we extended 2 people classes (Teacher and Student) and created an environment (Classroom). 
// Extend 2 more people classes from the Person class and create an environment class for your instances to interact in. 
// Create at least 2 methods for each class to interact with the other classes.
// Examples: doctor/patient/hospital, chef/waiter/restaurant, or whatever you come up with!

class Person {
    constructor(name, age){
        this.name = name; 
        this.age = age;
    } 
    talking(){
        console.log("Hi, my name is  " + this.name +','+ " I am " + this.age)
    }
}


class Staff extends Person {
    constructor (name, age, position, groupAge ){
        super (name, age)
        this.position = position
        this.groupAge = groupAge
    }
    crew(){
        console.log("Hi, this is my " + this.groupAge)
    }
    addCampers(Campers, CampWiki){
        CampWiki.addCampersToCampWiki(Campers, this.name)
    }
    addActivities (Activity, CamperName){
        this.funActivities.push({
            ActivityName: Activity, CamperName
        })
    }
}


class Campers extends Person{
    constructor (name, age,gender,  favoriteActivity){
        super (name, age)
        this.gender = gender
        this.favoriteActivity = favoriteActivity
    }
    intro(){
        console.log( "Hi, my name is " + this.name + " my favorite activity is " + this.favoriteActivity + "!")
    }

}

class CampWiki {
    constructor (groups, ageRange){
        this.groups = groups 
        this.ageRange = ageRange
        this.campercount = 0 
        this.CampersList = []

    }
    addCampersToCampWiki(Staff, Campers){
        Campers.Staff = Staff;
        this.CampersList.push(Campers)
        this.CampersCount ++;
    }
    showCamperCount(){
        console.log('there are ' + this.campercount + ' campers here!')
    }
    }


const Park = new Staff ('Mr. Jones',18 , 'Counselor', ' 8 year old group')
const toe = new Campers ('Jungkook', 8, 'male', 'soccer volleyball')
const ton = new Campers('Jin', 8, 'male','lunch')
const yo = new Campers ('Rosy', 8 , 'female', 'arts and crafts')
const group8 = new CampWiki (4, 5-10)
group8.showCamperCount( );
Park.addCampers(ton,group8)
Park.addCampers(yo, group8)

group8.showCamperCount();
console.log(group8.CampersList)