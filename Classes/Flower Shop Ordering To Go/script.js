console.log('connected')

/** A class representing a Flower object. */
class Flower {
    /**
     * Constructor method for creating a Flower object
     * @param {int} id - the Flower id
     * @param {string} name - the Flower name
     * @param {string} colour - the Flower colour
     * @param {int} quantity - the quantity of that Flower in stock
     * @param {float} price - the price of a single Flower unit
     */
    constructor(id, name, colour, quantity, price){
        this.id = id
        this.name = name
        this.colour = colour
        this.quantity = quantity
        this.price = price
    }

    /**
     * Get method for getting the Flower object id.
     * @return id
     */
    get flowerId() {
        return this.id
    }

    /**
     * Set method for setting the Flower object id.
     * @param {int} id - the Flower id
     */
    set flowerId(id) {
        this.id = id
    }

    /**
     * Get method for getting the Flower object name.
     * @return name
     */
    get flowerName() {
        return this.name
    }

    /**
     * Set method for setting the Flower object name.
     * @param {string} name - the Flower name
     */
    set flowerName(name) {
        this.name = name
    }

    /**
     * Get method for getting the Flower object colour.
     * @return colour
     */
    get flowerColour() {
        return this.colour
    }

    /**
     * Set method for setting the Flower object colour.
     * @param {string} colour - the Flower colour
     */
    set flowerColour(colour) {
        this.colour = colour
    }

    /**
     * Get method for getting the Flower object quantity.
     * @return quantity
     */
    get flowerQuantity() {
        return this.quantity
    }

    /**
     * Set method for setting the Flower object quantity.
     * @param {int} quantity - the Flower quantity in stock
     */
    set flowerQuantity(quantity) {
        this.quantity = quantity
    }

    /**
     * Get method for getting the Flower object price.
     * @return price
     */
    get flowerPrice() {
        return this.price
    }

    /**
     * Set method for setting the Flower object price.
     * @param {float} price - the Flower price for a single unit
     */
    set flowerPrice(price) {
        this.price = price
    }

}

let rose = new Flower(1, 'Rose', 'White', 10, 0.99)
console.log(JSON.stringify(rose))