var item1 = 650
var item2 = 100
var qty1 = 3
var qty2 = 7
var shipping = 100

var priceItem1 = item1 * qty1
var priceItem2 = item2 * qty2

var total = priceItem1 + priceItem2 + shipping
document.write("Price of item 1 is " + item1 + "<br>" + "Quantity of item 1 is " + qty1 + "<br>" + "Price of item 2 is " + item2 + "<br>"
    + "Quantity of item 2 is " + qty2 + "<br>" + "Shipping Charges " + shipping + "<br>" + "<br>" + "Total Cost of your order is " + total
)