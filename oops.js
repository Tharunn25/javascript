// oops concept in nut shell

//Abstraction

// Abstraction focuses on showing only the necessary details and hiding the implementation complexities.

class Vehicle
{
    constructor(brand,model)
    {
        this.brand = brand;
        this.model = model;
    }

    move()
    {
        console.log(`The ${this.model} is the bestselling car of ${this.brand}`);   
    }
}

let car = new Vehicle("innova","toyota");
// car.move();

// Encapsulation

// Encapsulation is an Object-Oriented Programming principle that bundles data (properties) and methods (functions) into a single unit (class) and restricts direct access to some components. This is done to protect the data and ensure it is accessed or modified only in controlled ways.


class BankAccount
{

    #balance;

    constructor(holder,balance)
    {
        this.holder = holder;
        this.balance = balance;
    }

    getBalance()
    {
        return this.#balance;
    }

    deposit(amount)
    {
        if(amount > 0)
        {
            this.#balance += amount;
        }
        else
        {
            console.log("deposit must be a positive number");
        }
    }
}

const account = new BankAccount("vishal",1000000);
console.log(`${account.holder} has this much money ${account.balance}`);


