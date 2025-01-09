let windows = {cpu:16};
let Hp = {
    display: "13",
    __proto__:windows,
};
let toshibo = {};

// console.log(`Hp`,Hp.__proto__);

let genericCar = {wheels:4};

let tesla = {
    driver:"AI",
}


Object.setPrototypeOf(tesla,genericCar);


console.log(`tesla`,genericCar);


