// This Javascript script takes in a regex string, and converts it into a javascript object (that can be parsed as a JSON).


console.log("Regex to object active")


// go character by character and review each character for logic.
// If that character is a letter, convert it into a graph node;

// If that character is a parentheses, scan ahead and record the the string to see where the parentheses closes.
// If the parentheses does not close, then return an error.
// If it closes, replay the parentheses set and look to find the dividing |;
// Split the string
// everything in the string split, convert into a graph node;

// If a character is a bracket, look for the closing bracket;
// Look for a number; Find the previous node, and add that number as a repeating function;


//so:
// function to convert each character into a graph node - will be utilized over and over again

function createNode(graph, chars) {
    // console.log(chars)

    // console.log(graph)

    if (graph.nodes.length === 0) {
        var newGroup = 1
    } else {
        // console.log(graph.nodes.length-1)
        var newGroup = graph.nodes[graph.nodes.length-1].id + 1
    }

    //add a new node
    var addedNodeJSON = {"name": chars, "id":newGroup}
    graph.nodes[graph.nodes.length] = addedNodeJSON

    //add a new link
    if (graph.nodes.length-1 !== 0) { //if there is a previous node (before the add)
        var addedLinkJSON = { "source": (graph.nodes.length-1), "target": (graph.nodes.length), "sourcename": graph.nodes[graph.nodes.length-2].name, "targetname": chars}
        graph.links[graph.links.length] = addedLinkJSON
    }


}


function parseRegex() {
    var current_graph = { //create empty graph for new regex
        "nodes":[],
        "links":[]
    }

    regex_string = document.getElementById("regexTextDisplay").value; //get current regex string

    regex_string += " " //add a blank space to indicate end of string processing

//loop over every character in a string
    console.log("Parsing Regex....")
    var current_char_string = ""
    for (i = 0; i < regex_string.length; i++) {
        // console.log("At ", i, ":")
        current_char = regex_string.charAt(i)
        if (current_char !== ' ') { //if its an actual character
            current_char_string = current_char_string + current_char
        } else { // its a space - starts a new node
            createNode(current_graph, current_char_string)
            // console.log('adding new node')
            current_char_string = ""
        }
    }
    console.log("Updating Visualization....")

    console.log(current_graph) //display the new regex javascript object

    // //write the current graph
    // var jsonfile = "/data/current_graph.json";
    // var file = new File(jsonfile,"write");
    // var str = JSON.stringify(current_graph);
    // file.open();
    // file.writeline(str);
    // file.close();

    //display the visualization of the current graph
    createSimpleGraphVis(current_graph);
}


