
function car(brand,model)
{
    this.brand = brand;
    this.model = model;
}

let newCar =  car("toyoto","corolla");
// console.log(newCar);

let oldCar =  car("Benz","gls");
// console.log(oldCar);


function tea(type)
{
   this.type = type;
   this.describe = function()
   {
    return `This is a cup of ${this.type}`;
   };
}

let newTea = new tea("lemon Tea");
// console.log(newTea.describe());


function animal(species)
{
    this.species = species;
}

animal.prototype.sound = function()
{
    return `${this.species} makes a sound`;
};

let dog = new animal("dog");
// console.log(dog.sound());


function Drink(name)
{
    if(!new.target)
    {
        throw new Error("your not using the new keyword");

    }
    this.name = name;
}

let mojito = Drink("lime mojito");
console.log(mojito);
