let states = ["UP", "Delhi", "Maharashtra", "Gujrat", "Rajasthan"];
let i = 0;
for (; ;) {
    if (i > 3) break;
    console.log(states[i]);
    i++;
}

//forEach
states.forEach((st) => (console.log(st)));  //callback func..
