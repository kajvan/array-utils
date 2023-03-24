const random = require('csprng-num');

function shuffle(array) {
    var x, i, j
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x
    }
    return array;
}

function findduplicates(array) {
    const seen = new Set();
    const duplicates = new Set();
    array.forEach(element => {
        if (seen.has(element)) {
            duplicates.add(element)
        }
        else {
            seen.add(element)
        }
    });
    return Array.from(duplicates)
}

function groupBy(array, callback) {
    return array.reduce((acc, value) => {
        const key = callback(value)
        acc[key] = acc[key] || []
        acc[key].push(value);
        return acc;
    }, {})
}

function unique(array) {
    return Array.from(new Set(array))
}

function zip(...arrays) {
    const maxLength = Math.min(...arrays.map((array) => array.length));
    const zipped = [];
    for (let i = 0; i < maxLength; i++) {
        zipped.push(arrays.map((array) => array[i]));
    }
    return zipped;
}

function chunk(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i++) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

function max(array) {
    return Math.max(...array)
}

function min(array) {
    return Math.min(...array)
}

function removeFalsy(array) {
    return array.filter(Boolean)
}

function shift(array, positions) {
    constindex = positions % array.length;
    return [...array.slice(index), ...array.slice(0, index)]
}

function countBy(array, callback) {
    return array.reduce((acc, value) => {
        const key = callback(value);
        acc[key] = (acc[key] || 0) + 1;
        return acc
    }, {})
}

function difference(array1, array2) {
    const set = new Set(array2);
    return array1.filter((value) => !set.has(value))
}

function intersection(...arrays) {
    const set = new Set(arrays[0]);
    return arrays.slice(1).reduce((acc, array) => {
        return acc.filter((value) => set.has(value));
    }, set);
}

function pluck(array, property) {
    return array.map((obj) => obj[property]);
}

function sample(array) {
    return array[Math.floor(random() * array.length)];
}

function sortBy(array, callback) {
    return array.slice().sort((a, b) => callback(a) - callback(b));
}

function sum(array) {
    return array.reduce((acc, value) => acc + value, 0);
}

function setparent(array, key) {
    array.reduce((object, item) => {
        object[item[key]] = item;
        return object;
    }, {})
}

function last(array) {
    return array[array.length - 1];
}

function last(array) {
    return array[array.length - 1];
}

function makeNestedArray(data) {
    const parentMap = {};
    const result = [];

    data.forEach(item => {
        if (!item.parent) {
            result.push(item);
        } else {
            const parentId = item.parent;
            if (!parentMap[parentId]) {
                parentMap[parentId] = [];
            }
            parentMap[parentId].push(item);
        }
    });

    const addChildren = parent => {
        if (parentMap[parent.id]) {
            parent.children = parentMap[parent.id];
            parent.children.forEach(child => addChildren(child));
        }
    };

    result.forEach(parent => addChildren(parent));
    return result;
}

function flatten(nestedData){
    const flatArray = [];

    const extractItems = item => {
      flatArray.push(item);
      if (item.children) {
        item.children.forEach(child => extractItems(child));
      }
    };
  
    nestedData.forEach(parent => extractItems(parent));
  
    return flatArray;
}

module.exports = {
    shuffle,
    findduplicates,
    groupBy,
    unique,
    zip,
    chunk,
    max,
    min,
    removeFalsy,
    shift,
    countBy,
    difference,
    intersection,
    pluck,
    sample,
    sortBy,
    sum,
    setparent,
    last,
    makeNestedArray,
    flatten
}