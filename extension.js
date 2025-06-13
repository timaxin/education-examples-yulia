class Product {
    constructor(id, title, manufacturer, price) {
        this.id = id;
        this.title = title;
        this.manufacturer = manufacturer;
        this.price = price;
    }
}

class Milk extends Product {
    constructor(id, title, manufacturer, price, fat) {
        super(id, title, manufacturer, price);
        this.fat = fat;
    }
}

class Chocolate extends Product {
    constructor(id, title, manufacturer, price, kind) {
        super(id, title, manufacturer, price);
        this.kind = kind;
    }
}

class Wine extends Product {
    constructor(id, title, manufacturer, price, alcohol) {
        super(id, title, manufacturer, price);
        this.alcohol = alcohol;
    }
}

class Store {
    constructor() {
        this.products = [];
    }
    add(product) {
        if (this.products.find(p => p.id === product.id)) {
            return;
        }
        this.products.push(product);
    }
    getAll() {
        return this.products;
    }
    getByType(type) {
        return this.products.filter(p => p.constructor.name === type);
    }
}