// user balance
const balance = 21600;

// product info
const id = 1001;
let productName = "Iphone 15 Pro Max";
let isAvailable = true;
let price = 20000;
const color = "Silver";
let storeAddress = "Kyiv, Melnichenka st";

console.log(isAvailable && balance >= price);

if (isAvailable && storeAddress === "Kyiv, Melnichenka st") {
  console.log("You can buy this productoduct in this store");
}

if (balance >= price && color === "Silver") {
  console.log("You have enough money to buy product in silver color");
}

const margent = price + 1000;
if (balance >= margent) {
  console.log("You have enough money to buy this product");
}
