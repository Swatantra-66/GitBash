function doAddition(x) {
    return function (y) {
        return x + y;
    };
}

let add = doAddition(4);
console.log(add(6));

//another method
console.log(doAddition(7)(8));