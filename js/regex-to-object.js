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

function createNode(graph, chars, repeats) {
    // console.log(chars)

    // console.log(graph)

    if (graph.nodes.length === 0) {
        var newGroup = 1
    } else {
        // console.log(graph.nodes.length-1)
        var newGroup = graph.nodes[graph.nodes.length-1].id + 1
    }

    //add a new node
    var addedNodeJSON = {"name": chars, "id":newGroup, "repeats":repeats}
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
        var current_char = regex_string.charAt(i)
        if (current_char !== ' ') { //if its an actual character
            current_char_string = current_char_string + current_char
            console.log(current_char_string)
        } else { // its a space - starts a new node
            if (current_char_string[0] === '(') {
                //trigger a processing loop to find branches
                var branch_string = ""
                for (j = 0; j < current_char_string.length; j++) { //loop over the branch substring
                    var current_branch_char = current_char_string.charAt(j)
                    if (current_branch_char === '|') { //find |
                        createNode(current_graph, branch_string.substring(2, branch_string.length), 0) //create a branch node
                        branch_string = ""
                    } else if (current_branch_char === ')') { //find end of sequence
                        createNode(current_graph, branch_string.substring(1, branch_string.length - 1), 0) //create a branch node}
                        branch_string = ""
                    } else {
                        branch_string += branch_string + current_branch_char //continue adding to a substring
                    }
                }
            } else if (current_char_string[1] === '{') { //if its a char followed by a repeat
                var repeat_string = ""
                for (k = 0; k < current_char_string.length; k++) { //loop over the repeat string
                    var current_repeat_char = repeat_string.charAt(k)
                    if (current_repeat_char === '}') { //find end of repeat
                        //split string
                        var node_char = repeat_string.substring(0, 1)//first char
                        console.log("node:", node_char)
                        var repeat_num = repeat_string.substring(1, repeat_string.length-1) //repeat characters
                        console.log("repeatNum:", repeat_num)
                        createNode(current_graph, node_char, parseInt(repeat_num)) //create a branch node
                    }
                }
            } else {
                createNode(current_graph, current_char_string, 0)
                // console.log('adding new node')
            }
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


