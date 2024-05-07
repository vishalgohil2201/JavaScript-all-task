function added(n) {

    let findPrice = document.getElementById('a' + n).innerHTML;
    findPrice = parseInt(findPrice);

    let price = document.getElementById('price').value;

    if (price == '') {
        price = 0;
    }
    let previousPrice = parseInt(price);

    document.getElementById('price').value = findPrice + previousPrice;

    // Discount
    let lv = document.getElementById('price').value;
    let dis = parseFloat(lv * 0.2);
    dis = dis.toFixed(2);
    document.getElementById('discount').value = dis;

    // Last Price
    let ta = lv - dis;
    document.getElementById('total-amount').value = ta;
}