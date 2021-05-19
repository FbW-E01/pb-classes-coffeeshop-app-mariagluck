class CoffeeShop {
	constructor (name, menu, orders = []) {
		this.name = name;
    	this.menu = menu;
    	this.orders = orders;
	}

	
	addOrder(order) {	   
		this.menu.some(ele => ele.item === order) 
		? this.orders.push(order) && console.log(`${order} order added!`) 
		: console.log("This item is currently unavailable!");
	}

	fulfillOrder() {
		this.orders.length != 0 
		? console.log(`The ${this.orders.shift()} is ready!`) 
		: console.log("All orders have been fulfilled!");	
	}

	listOrders() {
		this.orders != 0  ? console.log(this.orders) : console.log([]);
		
    }
	dueAmount() {
		let sum = 0;
		for(const item in this.menu) {
		for(let order in this.orders) {
			if(this.menu[item].item === this.orders[order]) {
				sum += this.menu[item].price;
				}
		 	}
	 	 }
        console.log(`${(sum).toFixed(2)} Euros`);
	}

	cheapestItem() {
		let cheapest = this.menu.reduce(function(res, obj) { return (obj.price < res.price) ? obj : res; });
		console.log(cheapest.item);
		
	}

	drinksOnly() {
		let drinks = this.menu.filter(item =>item.type === "drink");
		let drinksList = drinks.map(drinkName => drinkName.item);
		console.log(drinksList);
	}
	
	foodOnly() {
		let food = this.menu.filter(item => item.type === "food");
		let foodList = food.map(foodName => foodName.item);
		console.log(foodList);
	}
	

}

const MyCoffeeMenu = [
			
	{ item: "Espresso",         type: "drink", price: 2.50 },
	{ item: "Macchiato",        type: "drink", price: 3.00 },
	{ item: "Americano",        type: "drink", price: 3.00 },
	{ item: "Flat white",       type: "drink", price: 3.00 },
	{ item: "Muffin",           type: "food",  price: 2.50 },
	{ item: "Stuffin",          type: "food",  price: 51.50 },
	{ item: "Unicorn muffin",   type: "food",  price: 2.50 },
	{ item: "Pegasos muffin",   type: "food",  price: 2.50 },
	{ item: "Toast",            type: "food",  price: 1.50 },
	{ item: "A single potato",  type: "food",  price: 0.50 },
	{ item: "A single bean",    type: "food",  price: 0.05 },

];
const MyCoffeeShop = new CoffeeShop("Maria's Coffee Place", MyCoffeeMenu); 


console.log(MyCoffeeShop);

 

MyCoffeeShop.addOrder("cinnamon roll"); //This item is currently unavailable!
MyCoffeeShop.addOrder("hot cocoa"); // "This item is currently unavailable!"
MyCoffeeShop.addOrder("Toast"); // Toast order added!
MyCoffeeShop.addOrder("Espresso"); // Espresso order added!
MyCoffeeShop.addOrder("Flat white"); // Flat white order added!

MyCoffeeShop.listOrders(); // [ 'Toast', 'Espresso', 'Flat white' ]
MyCoffeeShop.dueAmount(); // 7.00 Euros

MyCoffeeShop.fulfillOrder(); //The Toast is ready!
MyCoffeeShop.fulfillOrder(); //The Espresso is ready!
MyCoffeeShop.fulfillOrder(); //The Flat white is ready!
MyCoffeeShop.fulfillOrder(); //All orders have been fulfilled!
MyCoffeeShop.listOrders(); // []
MyCoffeeShop.dueAmount(); //0.00 Euros


MyCoffeeShop.cheapestItem(); //A single bean

MyCoffeeShop.drinksOnly(); //[ 'Espresso', 'Macchiato', 'Americano', 'Flat white' ]
MyCoffeeShop.foodOnly(); // [ 'Muffin', 'Stuffin', 'Unicorn muffin', 'Pegasos muffin', 'Toast', 'A single potato', 'A single bean' ]

