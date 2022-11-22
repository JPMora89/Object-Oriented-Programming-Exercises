// Object Oriented Programming Exercises:

// Part One:

class Vehicle{
    constructor(make,model,year) {
       this.make = make;
       this.model = model;
       this.year = year;  
      
    }
    honk(){
        return 'Beep!';
    }
    toString(){
        return `The vehicle model is ${this.model} and was made by ${this.make} in ${this.year}`;
    }
}

// Part 2:

class Car extends Vehicle{
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year; 
        this.numWheels = 4; 
}}

// Part 3:

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year; 
        this.numWheels = 2;
    }
    revEngine(){
        return 'Vroom!!';
    }
}

// Part 4:

class Garage{
    constructor(capacity){
        this.capacity= capacity;
        this.vehicles= [];
    }
    add(vehicle){
    if(!(vehicle instanceof Vehicle)){
        return 'only vehicles allowed in here!';
    }
    if(this.vehicles.length > this.capacity){
        return "Sorry, we're full.";
    }
    this.vehicles.push(vehicle);
    }
}
