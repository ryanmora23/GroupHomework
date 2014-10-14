var people = [{
    name: 'Phil',
    age: 27
}, {
    name: 'John',
    age: 48
}, {
    name: 'Jane',
    age: 19
}, {
    name: 'Morgan',
    age: 37
}, {
    name: 'Bill',
    age: 25
}];



function forEachfunction(person, callback) {
    for (var i = 0, len = person.length; i < len; i++) {
        callback(person[i], i, person);
    }

}
console.log(people);
/*
2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.
 */

function forEachFilter(person, callback) {
return (person.age >= 20 && person.age<= 40);
}

var result =[];
result = people.filter(forEachFilter);





function forEachMap(subject, callback) {
    var nameandage = [];
    forEach(subject, function(val, i, arr) {
        nameandage.push(people.name + " " + people.age);
    });
    return nameandage;
}




function forEachReduce(list, callback, initialValue) {
    var value,
        prevVal = initialValue;

    
    if(initialValue) list.unshift(initialValue);
    forEach(list, function(val, i, arr) {
        if(i === 0) return;
        prevVal = callback(prevVal, arr[i], i, arr);
    });
    return prevVal;
}


