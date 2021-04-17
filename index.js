// Code your solution here
// findMatch() returns matching drivers if case does not match but letters do 
function findMatching(drivers, driverName) {
    return drivers.filter(function(name) {
        return name.toLowerCase() === driverName.toLowerCase()
    })
}

// fuzzyMatch() returns driver if beginning provided letter match 
// does not return drivers if only middle of ending letters match 
function fuzzyMatch(drivers, letterMatch) {
    return drivers.filter(function (match) {
        return match.toLowerCase().indexOf(letterMatch.toLowerCase()) === 0
    })
}

// MatchName function takes an array of drivers objects and a string as arguments. 
// Each driver object has two properties: name and hometown. 
// The function should return each element whos name property matches the provided string argument. 
function matchName(drivers, driverName){
    return drivers.filter(record => record.name === driverName)
}

