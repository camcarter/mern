const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let letter=s[0];
    let countStr= "";
    let count= 0;
    let ft= {};
    let retStr= "";
    // parseInt()
    // isNaN()
    // ITERATE THROUGH THE STRING
    for(let i = 1; i < s.length;i++){
        const num = parseInt(s[i])
        // is number
        if(!isNaN(num)){
            // building a string of numbers reassigning the value of count
            countStr = countStr + s[i];
        } else {
            count = Number(countStr)
            // converting count string to a number 
            ft[letter]
                ? ft[letter] += count
                : ft[letter] = count
                // if it exists add and if not then it is equal to our count
            letter = s[i]
            // update letter and reset count and count str
            countStr = "";
            count =0;
        }
        if( i===s.length - 1 ){
            count = Number(countStr)
            // converting count string to a number 
            ft[letter]
                ? ft[letter] += count
                : ft[letter] = count}
    }
    // 1 liner, same as the other 5  lines  below
    // Object.keys(ft).sort().forEach(key => retStr =${retStr}${key}${ft[key]});
    const keysArr= Object.keys(ft)
    keysArr.sort()
    keysArr.forEach(key =>{
        retStr =${retStr}${key}${ft[key]}
    })
    return retStr;
}
console.log(rehash(str1))