
import cytoscape from "./cytoscape.esm.min.js";

let name = 'bitch';
let person = {
    name : 'gonzalo',
    edad : 23

}

function leer (name, apellido){

    console.log('hello ' + name + ' ' + apellido);

}

leer('Andres' , 'Chaves');
leer ('sosi');



var cy = cytoscape({

container: document.getElementById('cy'), // container to render in

elements: [ // list of graph elements to start with
{ // node a
data: { id: 'a' }
},
{ // node b
data: { id: 'b' }
},
{ // edge ab
data: { id: 'ab', source: 'a', target: 'b' }
}
],

style: [ // the stylesheet for the graph
{
selector: 'node',
style: {
'background-color': '#666',
'label': 'data(id)'
}
},

{
selector: 'edge',
style: {
'width': 3,
'line-color': '#ccc',
'target-arrow-color': '#ccc',
'target-arrow-shape': 'triangle',
'curve-style': 'bezier'
}
}
],

layout: {
name: 'grid',
rows: 1
}

});
