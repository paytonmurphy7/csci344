// global variables 
let searchTerm = "";
let openOnly = false;

// helper functions
function isClassFull(course) {
    // Return true if course.Classification.Open === false
}

function doesTermMatch(course) {
    // If searchTerm is empty, return true (show all courses)
    // Convert searchTerm to lowercase
    // Check if searchTerm appears in (all converted to lowercase):
    //   - course.Code
    //   - course.Title
    //   - course.CRN (convert to string first)
    //   - course.Instructors[].Name (use map to get all names, then join)
    // Use includes() for case-insensitive matching
    // Return true if searchTerm matches any of these fields
}

function dataToHTML(course) {
    // should return a formatted HTML card with the relevant course info
    // (using template literals). 
}

//main functions