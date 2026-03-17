const original = {
    name: "Eve",
    age: 20,
    courses: ['CSCI 182', 'CSCI 344']
};

// Use spread operator to create a shallow copy
const shallowCopy = [original];
// Modify the copy's name property
shallowCopy.name = 'Eve Modifed';
// Modify the copy's courses array (add a new course)
shallowCopy.courses = 'CSCI 182, CSCI 344, CSCI 370';
// Print both original and copy to see the difference
console.log(original, shallowCopy);