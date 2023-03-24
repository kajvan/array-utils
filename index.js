const random = require ('csprng-num');

function shuffle(array) {
    var x, i, j
    for(i = array.length - 1; i > 0; i--){
        j = Math.floor(random() * (i+1));
        x = array[i];
        array[i] = array[j];
        array[j] = x
    }
    return array;
}

function findduplicates(array){
    const seen = new Set();
    const duplicates = new Set();
    array.forEach(element => {
        if(seen.has(element)){
            duplicates.add(element)
        }
        else{
            seen.add(element)
        }
    });
    return Array.from(duplicates)
}

function flatten(array){
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), [])
}

function groupBy(array, callback){
    return array.reduce((acc, value) =>{
        const key = callback(value)
        acc[key] = acc[key] || []
        acc[key].push(value);
        return acc;
    }, {})
}

function unique(array){
    return Array.from(new Set(array))
}

function zip(...arrays){
    const maxLength = Math.min(...arrays.map((array) => array.length));
    const zipped = [];
    for(let i = 0; i < maxLength; i++){
        zipped.push(arrays.map((array) => array[i]));
    }
    return zipped;
}