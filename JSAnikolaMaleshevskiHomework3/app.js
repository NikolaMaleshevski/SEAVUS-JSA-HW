/**
 * Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price. Create an array of 15 products. Now answer the following requirements:

Find all products with price greater than 20.
Get the names of all products of Category Food, that are on discount.
Get the price of all products that are on discount.
Find the name and price of all products with name starting with a vowel, that are not on discount.
 */

function Product(name,category,hasDiscount,price){
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
};

let apple = new Product("Apple", "Food", false, 1);
let shampoo = new Product("Shampoo", "Hygeine", true, 7);
let marlboroRed = new Product("Marlboro Red", "Tobacco", false, 9);
let tuna = new Product("Tuna", "Food", true, 2);
let microphone = new Product("Microphone", "Electronics", true, 39);
let hat = new Product("Hat", "Clothing", true, 12);
let scarf = new Product("Scarf", "Clothing", false, 6);
let broom = new Product("Broom", "Appliances", false, 15);
let beef =new Product("Beef", "Food", true, 17);
let beer = new Product("Beer", "Drink", true, 3);
let sparklingWater = new Product("Sparkling Water", "Drink", false, 2);
let greenTea = new Product("Green Tea", "Drink", false, 5);
let camera = new Product("Camera", "Electronics", true, 50);
let wetWipes = new Product("Wet Wipes", "Hygeine", false, 4);
let shirt = new Product("Shirt", "Clothing", true, 15);

let productsArray = [apple, shampoo, marlboroRed, tuna, microphone, hat, scarf, broom, beef, beer, sparklingWater, greenTea, camera, wetWipes, shirt];


//////////////////////////////////////////////////////////////////////////////////////////

let productsOver20 = productsArray.filter(Product => Product.price>20);
console.log(productsOver20);

///////////////////////////////////////////////////////////////////////////////////////////

let foodOnDiscount = [];
function foodDiscountCheck(array){
    for(i = 0; i < array.length; i++){
        if(array[i].category == "Food" && array[i].hasDiscount == true){
            foodOnDiscount.push(array[i])
        }
    }
}
foodDiscountCheck(productsArray);
console.log(foodOnDiscount);

//////////////////////////////////////////////////////////////////////////////////////////

let allOnDiscount = [];
function allDiscountCheck(array){
    for(i = 0; i<array.length;i++){
        if(array[i].hasDiscount === true){
            allOnDiscount.push(`${array[i].name} costs ${array[i].price}`);
        }
    }
};
allDiscountCheck(productsArray);
console.log(allOnDiscount)

///////////////////////////////////////////////////////////////////////////////////////////

function vowelCheck(Product){
    if(Product.name.charAt(0) == "A" || Product.name.charAt(0) == "E" || Product.name.charAt(0) == "I" || Product.name.charAt(0) == "O" || Product.name.charAt(0) == "U"){
        return Product;
    }
}
let vowelArray = productsArray.filter(vowelCheck);
let vowelDiscountArray = vowelArray.filter(Product => Product.hasDiscount == false);
console.log(vowelDiscountArray);
//bidejki samo Apple povhnuva so vowel