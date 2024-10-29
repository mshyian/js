// user balance
const balance = 15600;

// product info
const id = 1001;
let productName = "Iphone 15 Pro Max";
let isAvailable = true;
let price = 20000;
const color = "Silver";
let storeAddress = null;

const canBuyProduct = balance >= price;

if (canBuyProduct) {
  console.log("You have enought money to buy " + productName);
} else {
  console.log("You do not have enought money to buy " + productName);
}

if (isAvailable) {
  console.log("Product " + productName + " is available now");
}
