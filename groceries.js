var products = [
	{
		name: "water",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.50
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.50
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 7.50
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.50
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.50
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.50
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50
	},
	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.50
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 4.50
	},
	{
		name: "lays chips",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.50
	}
];

function restrictListProducts(prods, restriction) {
    let product_names = [];

    prods.sort(function(a, b) {
        return a.price - b.price;
    });

    for (let i = 0; i < prods.length; i += 1) {
        var prod_name_price = prods[i].name + ": $" + prods[i].price; 

        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "Organic") && (prods[i].organic == true)) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "VegetarianAndOrganic") && ((prods[i].vegetarian == true) && (prods[i].organic == true))) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "GlutenFreeAndOrganic") && ((prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "VegetarianAndGlutenFree") && ((prods[i].glutenFree == true) && (prods[i].vegetarian == true))) {
            product_names.push(prod_name_price);
        }
        else if ((restriction == "VegetarianGlutenFreeOrganic") && ((prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true))) {
            product_names.push(prod_name_price);
        }
        else if (restriction == "None") {
            product_names.push(prod_name_price);
        }
    }
    return product_names;
}

function getTotalPrice(selectedItems) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        var prod_name_price = products[i].name + ": $" + products[i].price;
        if (selectedItems.indexOf(prod_name_price) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}