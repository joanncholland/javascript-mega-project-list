/** Class representing a product. */
class Product {
    /**
     * Create a product.
     * @param {int} id - The product id.
     * @param {string} name - The product name.
     * @param {int} price - The product price.
     * @param {int} quantity - The product quantity.
     */
    constructor(id, name, price, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    /**
     * Get the product id value.
     * @return {int} The product id value.
     */
    get productId() {
        return this.id
    }

    /**
     * Set the product id value.
     * @param {int} id - The new product id.
     */
    set productId(id) {
        this.id = id
    }

    /**
     * Get the product name value.
     * @return {string} The product name value.
     */
    get productName() {
        return this.name
    }

    /**
     * Set the product name value.
     * @param {string} name - The new product name.
     */
    set productName(name) {
        this.name = name
    }

    /**
     * Get the product price value.
     * @return {int} The product price value.
     */
    get productPrice() {
        return this.price
    }

    /**
    * Set the product price value.
    * @param {int} price - The new product price.
    */
    set productPrice(price) {
        this.price = price
    }

    /**
    * Get the product quantity value.
    * @return {int} The product quantity value.
    */
    get productQuantity() {
        return this.quantity
    }

    /**
    * Set the product quantity value.
    * @param {int} quantity - The new product quantity.
    */
    set productQuantity(quantity) {
        this.quantity = quantity
    }

}

/** Class representing the inventory. */
class Inventory {
    /**
     * Create an inventory.
     */
    constructor() {
        this.products = []
    }

    /**
     * Get the products in the inventory.
     * @return {array} The products.
     */
    get products() {
        return this.products
    }

    /**
     * Set the products in the inventory.
     * @param {array} products - The products for the inventory.
     */
    set products(products) {
        for (let i = 0; i < products.length; i++) {
            this.products.push(products[i])
        }

    }

    /**
     * A function to get the total inventory value.
     * @return {int} The inventory value.
     */
    getInventoryValue() {
        let value = 0
        for (let i = 0; i < products.length; i++) {
            value += products[i].price
        }
        return value
    }

    stringifyInventory() {
        return JSON.stringify(products)
    }

}

/**
 * A function that detects if localStorage is supported in the browser.
 * @param {type} type - The type of localStorage browser object.
 */
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

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

/**
 * Check if local storage is supported in the browser.
 * If it is, add the product items in products to the 
 * local storage.
 */
if (storageAvailable('localStorage')) {
    // localStorage available
    console.log('Local storage can be used in this browser!')

    // Populate localStorage with some Product objects
    for (let i = 0; i < products.length; i++) {
        // Make sure to store the Product objects in JSON format, for retrievability
        localStorage.setItem(i, JSON.stringify(products[i]))
    }
}
else {
    // localStorage not available
    console.log('Local storage isn\'t available in this browser...')
}

/**
 * A function to add the products in the products array to
 * local storage.
 */
function addLocalStorageProducts() {
    for (let i = 0; i < products.length; i++) {
        // Parse JSON
        let product = JSON.parse(localStorage.getItem(i))
        
        // Add the product to the table
        let table = document.getElementById('inventoryTable')

        let row = table.insertRow(table.rows.length-1)

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
addLocalStorageProducts()

// Initialise a new Inventory object, and set the products
inventory = new Inventory(products)
jsonObj = inventory.stringifyInventory()
console.log(jsonObj)
jsonParse = JSON.parse(jsonObj)
console.log(jsonParse)
// localStorage.setItem('inventory', inventory)
// Add the total inventory cost to the DOM, using the getInventoryValue function
document.getElementById('totalInventoryValue').innerHTML = '£' + inventory.getInventoryValue().toFixed(2)

/**
 * The following code would normally go into the Inventory class,
 * however local storage is being used to save and alter the 
 * product objects, rather than a database. 
 */
// Add a product to the products in local storage
function addProduct() {

}

function removeProduct() {

}

function editProduct() {

}

function soldProduct() {

}