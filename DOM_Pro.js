// making a counter program

let counter = document.querySelector(".counter")
let followers = document.querySelector(".followers")

let count = 1;
setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers in Instagram!";
}, 5000);
// 
//

const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const orange = document.querySelector(".orange")
const violet = document.querySelector(".violet")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")


console.log(window.getComputedStyle(orange).backgroundColor);

const getBGcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

console.log(getBGcolor(cyan));

//
var color = getBGcolor(pink);

// pink .addEventListener("mouseenter", () => {
//     center.style.background = color;
// })

const getColor = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

getColor(red, getBGcolor(red));
getColor(cyan, getBGcolor(cyan));
getColor(orange, getBGcolor(orange));
getColor(violet, getBGcolor(violet));
getColor(pink, getBGcolor(pink));