let arr = [30, 10, -1, 50, 100, 200]
let maxNumber = arr[0];

for (const item of arr) {
    item < maxNumber? maxNumber = item : null
}


console.log(maxNumber);