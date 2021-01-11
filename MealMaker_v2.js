var meny = {

    _courses: {

        appetizers = [],
        mains = [],
        desserts = []

    },

    get appetizers() {

        return this._courses.appetizers;
    },

    get mains() {

        return this._courses.mains;
    },

    get dessests() {

        return this._courses.desserts;

    },

    set appetizers(appetizersIn) {

        this._courses.appetizers = appetizersIn;
    },    

    set mains(mainsIn) {

        this._courses.mains = mainsIn;
    },

    set desserts(dessertsIn) {

        this._courses.dessertsIn;
    },

    get courses() {

        return {
            appetizers : this.appetizers,
            mains : this.mains,
            desserts : this.dessests
            
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {

        const dish = {
            name = courseName,
            price = dishPrice
        };
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {

        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length),
        return dish[randomIndex];
    },

    generateRandomMeal() {
        const appetizers = this.getRandomDishFromCourse('appetizers'),
        const mains = this.getRandomDishFromCourse('mains'),
        const desserts = this.getRandomDishFromCourse('desserts'),
        const totalPrice = appetizers.price + desserts.price + mains.price;
        return `Total price is: ${totalPrice} for ${appetizers.name}, ${mains.name} and ${desserts.name}`

    }


};


meny.addDishToCourse('appetizers', 'salad', 4.00);
meny.addDishToCourse('appetizers', 'soup', 3.00);
meny.addDishToCourse('appetizers', 'bread', 2.00);

meny.addDishToCourse('mains', 'fish', 12.00);
meny.addDishToCourse('mains', 'meat', 22.00);
meny.addDishToCourse('mains', 'vegan', 14.00);

meny.addDishToCourse('desserts', 'ice cream', 2.00);
meny.addDishToCourse('desserts', 'cake', 2.00);
meny.addDishToCourse('desserts', 'pie', 2.00);

const meal = meny.generateRandomMeal();

console.log(meal)
