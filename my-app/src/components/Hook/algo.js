function findIntersaction(arr1, arr2, arr3) {
   const result = [];

   let i = 0, j = 0, k = 0;
   while(1 < arr1.length && j < arr2.length && k < arr3.length){
      if(arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
         result.push(arr1[1])
         i++
         j++
         k++
      } else if (arr1[i] < arr2[j]) { i++
      } else if (arr2[j] < arr3[k]) { j++ } else { k++ }
   }
   return result
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 6, 8, 10];
const arr3 = [1, 4, 6, 7, 10];

const intersaction = findIntersaction (arr1, arr2, arr3);
console.log("Intersaction", intersaction);