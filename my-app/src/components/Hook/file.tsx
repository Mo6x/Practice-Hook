function findIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
   const result: number[] = [];

   let i: number = 0, j: number = 0, k: number = 0;

   while (i < arr1.length && j < arr2.length && k < arr3.length) {
       if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
           result.push(arr1[i]);
           i++;
           j++;
           k++;
       } else if (arr1[i] < arr2[j]) { i++
       } else if (arr2[j] < arr3[k]) {  j++ } else {   k++ }
   }
   return result;
}

const arr1: number[] = [1, 2, 3, 4, 5, 6];
const arr2: number[] = [2, 4, 6, 8, 10];
const arr3: number[] = [1, 4, 6, 7, 10];

const intersection: number[] = findIntersection(arr1, arr2, arr3);
console.log("Intersection:", intersection);







class Iterator {
    [x: string]: any;

    constructor(array) {
      this.array = array;
      this.flatArray = this.flattenArray(array);
      this.currentIndex = 0;
    }
  
    has_next() {
      return this.currentIndex < this.flatArray.length;
    }
  
    next() {
      return this.flatArray[this.currentIndex++];
    }
  
    flattenArray(arr) {
      return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? this.flattenArray(item) : item);
      }, []);
    }
  }
  
  const ary = [[1, 2], 3, [4, 5, 6], 7, [8], [9, 10]];
  var it = new Iterator(ary);
  
  while (it.has_next()) {
    console.log(it.next());
  }






//   class Iterator {

//     constructor(array) {
//       this.array = array;
//       this.flatArray = this.flattenArray(array);
//       this.currentIndex = 0;
//     }
  
//     has_next() {
//       return this.currentIndex < this.flatArray.length;
//     }
  
//     next() {
//       return this.flatArray[this.currentIndex++];
//     }
  
//     flattenArray(arr) {
//       return arr.reduce((flat, item) => {
//         return flat.concat(Array.isArray(item) ? this.flattenArray(item) : item);
//       }, []);
//     }
//   }
  
//   const ary = [[1, 2], 3, [4, 5, 6], 7, [8], [9, 10]];
//   var it = new Iterator(ary);
  
//   while (it.has_next()) {
//     console.log(it.next());
//   }