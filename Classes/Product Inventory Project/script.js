// product class, with price, id, and quantity on hand
class Product {
    constructor(id, name, price, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    get productId() {
        return this.id
    }

    set productId(id) {
        this.id = id
    }

    get productName() {
        return this.name
    }

    set productName(name) {
        this.name = name
    }

    get productPrice() {
        return this.price
    }

    set productPrice(price) {
        this.price = price
    }

    get productQuantity() {
        return this.quantity
    }

    set productQuantity(quantity) {
        this.quantity = quantity
    }

    
}

myproduct = new Product(1, 'Orange', 1.00, 20)
document.getElementById('productId').innerHTML = myproduct.id
document.getElementById('productName').innerHTML = myproduct.name
document.getElementById('productPrice').innerHTML = '£' + myproduct.price.toFixed(2)
document.getElementById('productQuantity').innerHTML = myproduct.quantity

// create array of products
let products = [
    
]

// inventory class, keeps track of various products and can sum up the inventory value
class Inventory {
    constructor() {

    }
}