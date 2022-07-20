let myArray = ["Green Day", "BTS", "Blink 182", "The Cure", "Harry Styles", "Bad Bunny"];
let myArray2 = [1, 2, 3, 4];
console.log(myArray);

let longitudArray = myArray.length;
console.log(longitudArray);

let popArray = myArray.pop(); //Me modifica el array original
console.log(popArray);
console.log(myArray);

let shiftArray = myArray.shift(); //Me modifica el array original
console.log(shiftArray);
console.log(myArray);

let pushArray = myArray.push("Babasónicos"); //Me modifica el array original
console.log(myArray);

let sliceArray = myArray.slice(2, 4); //No me modifica el array original
console.log(sliceArray);
console.log(myArray);


let unshiftArray = myArray.unshift("Miranda!"); //Me modifica el array original
console.log(myArray);

let reverseArray = myArray.reverse(); //Me modifica el array original
console.log(reverseArray);
console.log(myArray);

let joinArray = myArray.join(" - "); //No me modifica el array original
console.log(joinArray);

let concatArray = myArray.concat(myArray2); //No me modifica el array original
console.log(concatArray);

let sortArray = myArray.sort();
console.log(sortArray);
console.log(myArray); //Me modifica el array original




