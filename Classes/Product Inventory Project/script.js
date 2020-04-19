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

// document.getElementById('productId').innerHTML = myproduct.id
// document.getElementById('productName').innerHTML = myproduct.name
// document.getElementById('productPrice').innerHTML = '£' + myproduct.price.toFixed(2)
// document.getElementById('productQuantity').innerHTML = myproduct.quantity



// create array of products
let products = [
    new Product(1, 'Orange', 1.00, 20),
    new Product(2, 'Apple', 1.00, 20),
    new Product(3, 'Banana', 1.00, 20),
    new Product(4, 'Pear', 1.00, 20),
    new Product(5, 'Plum', 1.00, 20),
    new Product(6, 'Blueberries', 1.00, 20),
    new Product(7, 'Mango', 1.00, 20),
    new Product(8, 'Watermelon', 1.00, 20)
]

function addToDOM(products) {
    let table = document.getElementById('inventoryTable')

    let rowNumber = 1
    for (let i = 0; i < products.length; i++) {
        let row = table.insertRow(rowNumber)

        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)

        cell1.innerHTML = products[i].id
        cell2.innerHTML = products[i].name
        cell3.innerHTML = '£' + products[i].price.toFixed(2)
        cell4.innerHTML = products[i].quantity
    }

}

addToDOM(products)

// inventory class, keeps track of various products and can sum up the inventory value
class Inventory {
    constructor() {
        this.products = []
    }

    get products() {
        return this.products
    }

    set products(products) {
        for (let i = 0; i < products.length; i++) {
            this.products.push(products[i])
        }

    }

    getInventoryValue() {
        let value = 0
        for (let i = 0; i < products.length; i++) {
            value += products[i].price
        }
        return value
    }

    removeProduct(productId) {
        
    }

}

inventory = new Inventory(products)

document.getElementById('totalInventoryValue').innerHTML = '£' + inventory.getInventoryValue().toFixed(2)

function remove() {

}