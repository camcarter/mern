/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
    function merge(left, right) {
    let newArr = []
    let leftInd = 0, rightInd = 0
    while (leftInd < left.length || rightInd < right.length){
        if (leftInd === left.length){
            newArr.push(right[rightInd]);
            rightInd++;
            continue
        }
        if (rightInd === right.length){
            newArr.push(left[leftInd]);
            leftInd++;
            continue
        }
        if (left[leftInd] > right[rightInd]){
            newArr.push(right[rightInd]);
            rightInd++;
            continue
        }
        if (left[leftInd] < right[rightInd]){
            newArr.push(left[leftInd]);
            leftInd++;
            continue
        }
    }
    return newArr
}
// console.log(merge(sortedA1, sortedB1))
// console.log(merge(sortedA2, sortedB2))
console.log(merge(sortedA3, sortedB3))

// mergeSort
// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// /**
//  * Creates a new sorted array based on the given nums being recursively split
//  * and merged.
//  * Best: O(n log(n)) linearithmic.
//  * Avg: O(n log(n)) linearithmic.
//  * Worst: O(n log(n)) linearithmic.
//  * @param {Array<number>} nums
//  * @returns {Array<number>} A New sorted array.
//  */
// function mergeSort(nums) {
//     BASE CASE
//     if(nums.length === 1){
//         return nums
//     }
//     GETTING THE MIDDLE INDEX OF NUMS ARRAY
//     const middleIndex = Math.floor(nums.length / 2)
//     USING SLICE TO GET A LEFT AND RIGHT VERSION OF THE ARRAY
//     const leftArr = nums.slice(0, middleIndex)
//     const rightArr = nums.slice(middleIndex)
//     RECURSIVELY CALL WITHT THE LEFT AND RIGHT ARRAY
//     const sortedLeft = mergeSort(leftArr)
//     const sortedRight = mergeSort(rightArr)
//     MERGE THE SORTED LEFT AND RIGHT ARRAYS
//     return merge(sortedLeft, sortedRight)
// }