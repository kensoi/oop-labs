class Flower {
    id
    name
    color
    length
    price
    count

    constructor (id, name, color, length, price, count) {
        this.id = id
        this.name = name
        this.color = color
        this.length = length
        this.price = price
        this.count = count
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

    addFlower (id, name, color, length, price, count) {
        const flower = Flower(id, name, color, length, price, count)
        this.#flowerList.push(flower)
    }
}

export {
    Flower, Bouqet
}