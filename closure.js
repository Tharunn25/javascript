function inner()
{
    let count = 5;
    return function ()
    {
        count++;
        return count;
    };
}

let number = inner();
console.log(number());
console.log(number());
console.log(number());
 