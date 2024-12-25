//for of loop

const brands = ["LV", "Gucci", "AX", "Zara", "Prada", "D&G", "Dior"];

// for of is majorily used for arrays
for (const n of brands) {
    console.log(n);
}


//for in loop
//for in is used for objects

const brandNames = {
    LV: "Louis Vuitton",
    AX: "Armani Exchange",
    DG: "Dolce & Gabana",
    CD: "Christian Dior"
}

for (const n in brandNames) {
    console.log(`Key is ${n} and value is ${brandNames[n]}`);
}