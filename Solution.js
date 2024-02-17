let numArray = [1, 10, 2, 40, 50, 3, 4000];
let max = 0;

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > max) {
        max = numArray[i];
        console.log(max);
    }
}

