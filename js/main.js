console.log("Visual Regex Script Starting Up....")

//load in category preferences
category_colors = ['yellow','pink','cyan','seagreen','orange','violet','aquamarine','red']

//initial regex string EXAMPLE ONLY
regex_string = "A B (C|D) . A{2} D"

regex_string = "A B C D E F G"

// Create event handler
let eventHandler = {};

//initialize chart variables
let regexGraph;


var current_graph = initial_graph;

//!!!!!!!!!!!! NOTE! DATA IS TEMPORARILY BEING LOADED IN VIA A JS OBJECT IN INITIAL_DATA_OBJECTS.JS -- THIS NEEDS TO BE REMOVED AND JSON BELOW LOADED IN!//

// // Load data with promises
// let promises = [
//     d3.json("data/initial_graph.json"),
//     d3.json("data/empty_graph.json")
// ]
//
// Promise.all(promises)
//     .then( function(data){ createVis(data)})
//     .catch( function (err){console.log(err)} );
//
//
// function createVis(data) {
//     let initial_graph_data = data[0];
//     let blank_graph_data = data[1];
//
//
//     ////////////////////////////////////////////
//     // Draw the RegEx Graph
//     visualRegEx = new visualRegExVis("visRegEx-container", initial_graph_data);
//     ////////////////////////////////////////////
//
// }


function updateRegEx(str) {
    // Update the RegEx expression in User Entry Box
    document.getElementById("regexTextDisplay").value = str;
}
//!!!! THIS NEEDS SOME FORM OF INTERLOCKING TO PREVENT THE VIS STATE FROM DIFFERING FROM THE DISPLAYED STATE!!!!!


// Update the RegEx expression
updateRegEx(regex_string);

