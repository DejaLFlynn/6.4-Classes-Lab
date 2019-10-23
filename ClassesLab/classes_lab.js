console.log('/////question 1//////')
class Person {
    constructor(first, last, middle){
        this.first = first;
        this.last = last;
        this.middle = middle
    }
fullName(){
    return this.first + " " + this.middle + " " + this.last 
}
}
let bobby = new Person('bobby', 'chips', 'digital')
let ghost = new Person('tony', 'starks', 'ghost')
console.log(bobby.first)
console.log(bobby.fullName())
console.log(ghost.fullName())
console.log('/////question 2/////////')

class Book {
    constructor(title, author, rating){
        this.title = title;
        this.author = author;
        this.rating = rating
    }
    isGood(){
        if(this.rating > 7){
            return true;
        } else{
            return false;
        }
    }

}
let blink = new Book('blink', 'malcolm gladwell', '10')
let fiftyShades = new Book('fifty shades of gray', 'E.L James', '3')
console.log(fiftyShades.isGood())

console.log('//////////question 3///////////')
class Dog{
    constructor (name, breed, mood, hungry){
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry
    }
    playFetch(){
        this.hungry=true;
        this.mood ="playful"
        return 'ruff!'
    }
    feed(){
        if(this.hungry=true){
            this.hungry = false;
            return 'woof!'
        }else {
            return 'this dog doesnt look hungry'
        }
    }
    toString(){
        return this.name + " "+ this.breed + " "+ this.mood + " "+ this.hungry 
        
    }
}

let benji = new Dog('Benji', 'husky', 'tired', false)
console.log(benji)
console.log(benji.playFetch())
console.log(benji)
console.log(benji.feed()) 
console.log(benji)
console.log(benji.toString())
console.log("///////question 4/////////")
let temp ={
    celcius: 0,
    fahrenheit: 32,
    kelvin: 273

    }
    console.log(temp)
    function Celcius(celcius){
        this.celcius = celcius;
        this.getFahrenheit = function(){
            return (celcius + 273) * 1.8
        }
        this.getKelvin = function(){
            return (celcius +273)
        }
    }
    let outside = new Celcius(45)
    console.log(outside.celcius)
    console.log(outside.getFahrenheit())
    console.log(outside.getKelvin())
    Celcius.prototype.isBelowFreezing =function(){
        if(this.celcius<=0){
            return true;
        } else{
            return false;
        }
    }
    let freezing = new Celcius(-2)
    console.log(freezing.isBelowFreezing())
    console.log(outside.isBelowFreezing())




console.log('///////////question 5///////////')
function Movie(name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }
  let movie1 = new Movie('Coming to America', 1984, 'comedy', 'Eddie and Arsenio', 'funny AF!');
let movie2 = new Movie('Harlem Knights', 1986, 'comedy', 'Eddie and Richard', 'super funny!');
Movie.prototype.blurb = function () {
  console.log(`${this.name} came out ${this.year} it was a ${this.genre} starring ${this.cast}
     and it was ${this.description}`);
};

movie1.blurb();
movie2.blurb();


console.log("///////question 6 ////////")
console.log("A")

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)

Vector.prototype.plus = function (v) {
  return this.x + this.x && this.y + this.y
}


console.log(v1.plus(v2))
