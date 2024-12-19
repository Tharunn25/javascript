// function makeTea(typeOfTea)
// {
//     return `makeTea: ${typeOfTea}`
// }
// function processTeaOrder(teaFunction)
// {
//     return teaFunction("early grey")
// }

// let order = processTeaOrder(makeTea)
// console.log(order);

function newOne(teaType)
{
        return(`making ${teaType}`)
}

function createTeaMaker(type)
{
    return newOne(type);   
}

teaMaker = createTeaMaker("green tea");
console.log(teaMaker);
