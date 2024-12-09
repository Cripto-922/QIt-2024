const eShop = {
  name: "MJS",
  phoneNumber: "+1234567890",
  products: [
    {
      productName: "Smartphone X",
      category: "Electronics",
      price: 799.99,
      stock: 25
    },
    {
      productName: "Laptop Pro",
      category: "Electronics",
      price: 1199.99,
      stock: 15
    },
    {
      productName: "Wireless Headphones",
      category: "Accessories",
      price: 199.99,
      stock: 50
    },
  ],
};


let shopName ;

function changeShopName() {

    const newName = prompt("duken jana ataun jaz:", shopName);
    
    if (newName) {
        shopName = newName;
        console.log(`duken atauu janartyldy: ${shopName}`);
    } else {
        console.log("duken atau oxgertilmedi.");
    }
}

changeShopName();


let shopPhone;
function changePhoneNumber() {
    const newPhoneNumber = prompt("jana nomer jaz", shopPhone);

    if (newPhoneNumber) {
        shopPhone == newPhoneNumber;
        console.log(`nomer janartyldy ${shopPhone}`);
    } else {
        console.log("nomer ozgertilmedi")
    }
}

changePhoneNumber();

function addProduct() {
   while(true) {
    let newProduct = prompt("jana tauar engyz");
    let newProductPrice = prompt("tauar bagasin engyz");
    let newProductstock = prompt("tauar sanyn engyz engyz");
    eShop.products.push(newProduct);
    eShop.price.push(newProductPrice);
    eShop.stock.push(newProductstock);

   }
};

console.log(addProduct());


