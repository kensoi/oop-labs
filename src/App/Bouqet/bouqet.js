class Flower {
    name
    color
    length
    price

    constructor (name, color, length, price) {
        this.name = name
        this.color = color
        this.length = length
        this.price = price
    }
}


class Bouqet {
    #flowerList

    constructor () {
        this.#flowerList = []
    }
    
    getFlowers () {
        return this.#flowerList
    }

    addFlower (name, color, length, price) {
        const flower = Flower(name, color, length, price)
        this.#flowerList.push(flower)
    }
}

export {
    Flower, Bouqet
}