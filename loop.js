let sum = 0;
let i = 0;

while (i <= 5) {

    sum += i;
    i++;
}
// console.log(sum);

// 

let j = 10;

let countDown = [];

while(j>0)
{
    countDown.push(j);
    j--;
}
// console.log(countDown);

// 

teaCollection = [];

let tea;

do {

    // tea = prompt(`Enter the word you want ("please give stop to complete")`);

    if(tea !== "stop"){
         teaCollection.push(tea);

    }
    
} while (tea !== "stop");

//

let total=0;
let k =1;

do {
    total += k;
    k++;
    
} while (k<=3);
// console.log(total); 

//

multipleNumbers = [];
org = [2,4,6];
let l =0;

for(i=0;i<org.length;i++)
{
    let multipliedValue = org[i] *2;
    multipleNumbers.push(multipliedValue);
}
// console.log(multipleNumbers); 

//

cities = ["paris","New York","Tokyo","London"];
cityList = [];

for(q=0;q<cities.length();q++)
{
    let newValue = cities.push(i);
    cityList.push(newValue);
}

console.log(cityList);



