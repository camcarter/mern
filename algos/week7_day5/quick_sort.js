const nums1 = [11, 8, 14, 3, 6, 2, 7];
/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

function partition(nums = [], leftIndex = 0, rightIndex = nums.length - 1) {
    // FIND THE PIVOT VALUE AND PIVOT INDEX
    const midIdx = Math.floor((leftIndex + rightIndex) / 2)
    const pivotValue = nums[midIdx]
    const tempPivotIndex = rightIndex
    while(true){

        // SWAP THE PIVOT VALUE WITH THE END OF THE ARRAY (tempPivotIndex)
        
        // USING leftIndex ITERATE UPWARDS AND FIND VALUE THAT'S GREATER THAN PIVOT VALUE
        
        // USING rightIndex ITERATE DOWNWARDS AND FIND VALUE THAT'S LESS OR EQUAL TO PIVOT VALUE
        
        // ONCE THE leftIndex and rightIndex MEETS OR GOES PAST
        // SWAP THE values AT leftIndex AND tempPivotIndex
        // RETURN THE leftIndex
    }
}