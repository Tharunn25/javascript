function makeTea(typeOfTea)
{
   return (`making ${typeOfTea}`);  
}

let teaOrder = makeTea("ginger tea");
console.log(teaOrder);


function orderTea(teaType)
{
    function confirmOrder()
    {
        return (`order confirmed for ${teaType} `);
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("masala Tea");
console.log(orderConfirmation);


function calculateTotal(price,quantity){
    const totalCost = price * quantity;
    return totalCost;
}

let answer = calculateTotal(5,10);
console.log(answer);
