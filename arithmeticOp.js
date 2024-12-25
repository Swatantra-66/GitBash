// dicount = ((listingPrice - SellingPrice)/listingPrice)*100

let sellingPrice = 199;
let listingPrice = 799;

let dicountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount Percent is:" + dicountPercent);

displayDiscountpercentage = Math.round(dicountPercent); //using math.round for roundingOf

console.log("Now DicountPercentage is", displayDiscountpercentage + "%Off");

