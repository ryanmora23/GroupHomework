/*
1.Write your own forEach function (like we did in class). It takes the array and the function (referred to as a callback) as arguments:

function forEach(list, callback) { /Do stuff / }
 */

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
//3.Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) {

    var arr = []
    for (var i in list) {
        //console.log(list[i]);
        arr[arr.length] = list[i][propertyName];
    }
    return arr;
}

var stooges = [{
    name: 'moe',
    age: 40
}, {
    name: 'larry',
    age: 50
}, {
    name: 'curly',
    age: 60
}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]




/*
4. Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.

function reject(list, predicate) { / Do stuff / }

var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> [1, 3, 5]
 */

function reject(list, predicate) {
    arr = new Array;
    for (i = 0; i < list.length; i++) {
        if (!predicate(list[i])) {
            arr[arr.length] = list[i]
        }
    }
    return arr;
}
reject([1, 2, 3, 4, 5, 6],
    function(num) {
        return num % 2 == 0;
    });

/*
5.Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate) { / Do stuff / }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2
 */


//list = an array
//predicate = some function that tests something - returns true if some number passes test
function find(list, predicate) {
    //iterate through the array(list)
    for (var i = 0; i < list.length; i++) {
        //if the index of list passes the truth test return it
        if (predicate(list[i]) === true) {
            return list[i];
        }
    }
    //else return undefined
    return undefined;
}
//function that returns true if number is even
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
}
//function that returns true if number is odd
function isOdd(num) {
    if (num % 2 === 1) {
        return true;
    }
}
//function that returns true if the number is 8
function isEight(num) {
    if (num === 8) {
        return true;
    }
}
var numList = [1, 2, 3, 4, 5, 6];
//testing the find function
var even = find(numList, isEven);
var odd = find(numList, isOdd);
var eight = find(numList, isEight);
/*
6.Write a function called where that looks through each value in the list,
 returning an array of all the values that contain all of the key-value pairs listed in properties.

function where(list, properties) { / Do stuff / }

where(listOfPlays, {author: "Shakespeare", year: 1611});
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]
 */


//list of plays to test "where" function
var listOfPlays = [{
    title: "Cymbeline",
    author: "Shakespeare",
    year: 1611
}, {
    title: "The Tempest",
    author: "Shakespeare",
    year: 1611
}, {
    title: "A Streetcar Named Desire",
    author: "Tennessee Williams",
    year: 1947
}, {
    title: "Doubt",
    author: "John Patrick Shanley",
    year: 2005
}];
//list = some array of objects with properties
//properties = some object with property/properties you are trying to match in "list"
function where(list, properties) {
    //new array to store matching properties
    storeArray = [];
    //iterate through "list" array
    for (var i = 0; i < list.length; i++) {
        //see if object has the property then see if object matches properties -- if true add object to new array
        //and go to next iteration
        if (properties.title !== undefined) {
            if (list[i].title === properties.title) {
                storeArray.push(list[i]);
                continue;
            }
        }
        if (properties.author !== undefined) {
            if (list[i].author === properties.author) {
                storeArray.push(list[i]);
                continue;
            }
        }
        if (properties.year !== undefined) {
            if (list[i].year === properties.year) {
                storeArray.push(list[i]);
                continue;
            }
        }
    }
    return storeArray;
}
