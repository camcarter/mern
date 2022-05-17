/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
    let arr = []
    let x = Object.keys(criteria)

    for (i = 0; i < collection.length; i++){
        if (criteria.firstName === collection[i].firstName && criteria.lastName === collection[i].lastName && criteria.age === collection[i].age){
            arr.push (collection[i])
        }
        else if (criteria.firstName === collection[i].firstName && criteria.lastName === collection[i].lastName){
            arr.push (collection[i])
        }
        else if (criteria.firstName === collection[i].firstName && criteria.age === collection[i].age){
        arr.push (collection[i])
        }
        else if (criteria.age === collection[i].age && criteria.lastName === collection[i].lastName){
            arr.push (collection[i])
        }
        else if (criteria.firstName === collection[i].firstName){
            if (x.length === 1){
                arr.push (collection[i])
            }
        }
        else if (criteria.lastName === collection[i].lastName){
            if (x.length === 1){
                arr.push (collection[i])
            }
        }
        else if (criteria.age === collection[i].age){
            if (x.length === 1){
                arr.push (collection[i])
            }
        }
    }
    return arr
}

console.log(findObjects(searchCriteria1 , items))
console.log(findObjects(searchCriteria2 , items))

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function findObjectsFunctional(criteria, collection) {

}