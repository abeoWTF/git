const menu = {
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: this.courseName,
      price: this.dishPrice      
    };
     this._courses[courseName].push(dish);
  },
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get _courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers() {
    return this.appetizers
  },
  set appetizers(appetizersIn){

  },
  get mains() {
    return this.mains;
  },
  set mains(mainsIn) {

  },
  get desserts() {
    return this.desserts;
  }, 
  set desserts(dessertIn) {

  }
};