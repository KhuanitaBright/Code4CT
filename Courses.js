//shopping cart functions

var shoppingCart = [{"name":"Intro to Coding: Music","description":"Code a song using SonicPi software on a Raspberry Pi computer.","duration":"3 hours","cost":250,"count":1}];
shoppingCart.cart = [];
shoppingCart.Course = function(name, description, duration, cost, count) {
    this.name = name
    this.description = description
    this.duration = duration
    this.cost = cost
    this.count = count
};
shoppingCart.addItemToCart = function(name, description, duration, cost, count) {
    //loop every item in cart
    for (var i in this.cart) {
        //look at each item in the name property and match
        if (this.cart[i].name === name) {
            this.cart[i].count += count;
            this.saveCart();
            return;
        }
    }
   var course = new this.Course (name, description, duration, cost, count);
   this.cart.push(course);
    this.saveCart();
}

shoppingCart.removeItemFromCart = function(name) {
    for (var i in this.cart) {
        if (this.cart[i].name === name) {
            this.cart[i].count --;
            if (this.cart[i].count === 0) {
                this.cart.splice(i, 1); //to remove an item from the array
            }
            break;
        }
    }
    this.saveCart();
}

shoppingCart.removeItemFromCartAll = function(name){
    for (var i in this.cart) {
        if(this.cart[i].name === name){
        this.cart.splice(i, 1);
        break;
    }
  }
    this.saveCart();
};

shoppingCart.clearCart = function() {
    this.cart = [];
    this.saveCart();
}

shoppingCart.countCart = function() {
    var totalCount = 0;
    for (var i in this.cart) {
        totalCount += this.cart[i].count;
    }
    return totalCount;
}

shoppingCart.totalCart = function() {
    var totalCost = 0;
    for (var i in this.cart) {
        totalCost += this.cart[i].cost * this.cart[i].count;
    }
    return totalCost;
}

shoppingCart.listCart = function() {
    var cartCopy = [];
    for (var i in this.cart) {
        var course = this.cart[i];
        var courseCopy = {};
        //p for property
        for ( var p in course) {
            courseCopy [p] = course[p];
        }
        courseCopy.total = course.cost * course.count;
        cartCopy.push(courseCopy);
    }
    return cartCopy;
}

shoppingCart.saveCart = function() {
    localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
}

shoppingCart.loadCart = function() {
    this.cart = JSON.parse( localStorage.getItem("shoppingCart"));
}

shoppingCart.loadCart();
