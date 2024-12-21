let bike = {
    brand : "Royal Enfield",
    model : "Classic 350",
    year : 2010,

    start:function(){
        return `${this.brand} started the bike ${this.model} in the year ${this.year}`;
    },
};

// console.log(bike.start());


function Mobile(brand,cost){
    this.brand = brand;
    this.cost = cost;
}

let phone = new Mobile("iphone","45k");
// console.log(phone.brand);

function Animal()
{
    this.type = this.type;
}

Animal.prototype.speak = function()
{
    return `${this.type} makes a sound`;
}



class Cars{

    constructor(brand,model)
    {
        this.brand = brand;
        this.model = model;
    }

    start ()
    {
        return `this ${model} in the ${brand} is the best car`;
    }
}

let myCar= new Cars("toyota","innova")
console.log(myCar);
