let arr = [1, 1, 2, 1, 4];
let checkElements = 'true';


for (let i = 0; i < arr.length -1 ; i++) {
   if (arr[i] !== arr[i + 1]) {
      checkElements = 'false';
   }
}
console.log(checkElements)