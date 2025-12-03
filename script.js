function completeOrder(){

    //getting the value of the item quanity
    const item1Quantity = document.getElementById('item1Quantity').value;
    const item2Quantity = document.getElementById('item2Quantity').value;
    const item3Quantity = document.getElementById('item3Quantity').value;
    const item4Quantity = document.getElementById('item4Quantity').value;
    const item5Quantity = document.getElementById('item5Quantity').value;

    //converting to numbers
    const item1 = parseFloat(item1Quantity);
    const item2 = parseFloat(item2Quantity);
    const item3 = parseFloat(item3Quantity);
    const item4 = parseFloat(item4Quantity);
    const item5 = parseFloat(item5Quantity);

    //Getting item total cost
    const item1Total = item1*3;
    const item2Total = item2*.5;
    const item3Total = item3*10;
    const item4Total = 0;
    const item5Total = item5*4;

    const total = item1Total+item2Total+item3Total+item4Total+item5Total;

    document.getElementById("orderTotal").innerHTML = "$"+ total.toFixed(2);

}

function resetDropdown(){

    //setting all the item quantities to 0
    document.getElementById("item1Quantity").selectedIndex = 0;
    document.getElementById("item2Quantity").selectedIndex = 0;
    document.getElementById("item3Quantity").selectedIndex = 0;
    document.getElementById("item4Quantity").selectedIndex = 0;
    document.getElementById("item5Quantity").selectedIndex = 0;

    //Running the ammount owed after everything is 0 so that the cost doesn't stay
    completeOrder();
}