# Array Utilities

This is a collection of utility functions for working with arrays in JavaScript. The functions are organized into the following categories:

## Categories
Transforming: functions that transform arrays in some way, such as shuffling, grouping, or sorting

Filtering: functions that filter arrays based on some criteria, such as removing falsy values or finding duplicates

Manipulating: functions that manipulate arrays in some way, such as shifting elements or finding the difference between two arrays

Accessing: functions that access elements in an array, such as getting the maximum or minimum value, or accessing the last element

Nested Arrays: functions that work with nested arrays, such as flattening or creating nested arrays from flat data

## Installation
```js
npm install utils4array
```

## Usage
To use the functions, import them from the array-utilities package and pass in the array you want to work with as a parameter. For example:
    
```js  
const arrayUtils = require('utils4array');

const myArray = [1, 2, 3, 4, 5];
const shuffledArray = arrayUtils.shuffle(myArray);
console.log(shuffledArray);
// Output: [4, 1, 2, 5, 3]
```
You can find the documentation for all the functions in the [API reference](#API-Reference) section below.

## API Reference
### Transforming

#### shuffle(array) 
- Returns a shuffled version of the input array.

#### groupBy(array, callback) 
- Groups the elements in the input array by the result of calling the given callback function on each element. Returns an object where the keys are the grouping values and the values are arrays of elements that match that grouping value.

#### sortBy(array, callback) 
- Sorts the input array by the result of calling the given callback function on each element.

### Filtering
#### findduplicates(array) 
- Returns an array of duplicate elements in the input array.

#### removeFalsy(array) 
- Returns a new array with all falsy values removed.

#### countBy(array, callback) 
- Returns an object with a count of how many times each value appears in the input array, grouped by the result of calling the given callback function on each element.

#### difference(array1, array2) 
- Returns an array of elements that are in array1 but not in array2.

#### intersection(...arrays) 
- Returns an array of elements that are in all of the input arrays.

#### pluck(array, property) 
- Returns an array of values for the given property on each element in the input array.

#### unique(...array)
- Returns an array of unique elements from the input arrays.

#### sample(array, n)
- Returns n random elements from the input array.

### Manipulating
#### shift(array, positions) 
- Returns a new array with the elements of the input array shifted to the left by positions positions.

#### chunk(array, size) 
- Returns an array of arrays, where each sub-array contains size elements from the input array.

#### setparent(array, key) 
- Returns an object where each key is the value of the key property on each element in the input array, and the value is the corresponding element.

#### zip(...arrays)
- Returns a new array where each element is an array containing the corresponding elements from the input arrays.

### Accessing
#### max(...array) 
- Returns the maximum value in the input array.

#### min(...array) 
- Returns the minimum value in the input array.

#### last(array) 
- Returns the last element in the input array.

#### sum(array) 
- Returns the sum of all values in the input array.

### Nested Arrays
#### flatten(nestedData)
- Returns a flat list from a nested list

##### example
```js
const nestedData = [
  {
    id: 1,
    name: 'Parent 1',
    children: [
      {
        id: 2,
        name: 'Child 1',
        children: [
          {
            id: 4,
            name: 'Grandchild 1'
          },
          {
            id: 5,
            name: 'Grandchild 2'
          }
        ]
      },
      {
        id: 3,
        name: 'Child 2'
      }
    ]
  },
  {
    id: 6,
    name: 'Parent 2'
  }
];

const flattenedData = flatten(nestedData);
console.log(flattenedData);
// Output: [
//   { id: 1, name: 'Parent 1' },
//   { id: 2, name: 'Child 1' },
//   { id: 4, name: 'Grandchild 1' },
//   { id: 5, name: 'Grandchild 2' },
//   { id: 3, name: 'Child 2' },
//   { id: 6, name: 'Parent 2' }
// ]
```

#### makeNestedArray(data)
- Return a nested array. this does exactly the opposite of the flatten function

### People
- [Kaj van Schalkwijk](https://github.com/kajvan)

### License
  [ISC](LICENSE)