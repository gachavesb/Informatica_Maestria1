let name = 'Dato';
let name2 = 'Informacion';
let name3 = 'Conocimiento';
let RAE = {
    dato : 'Antecedente para obtener una conclusión legítima',
    Informacion: 'Adquisición/comunicación de conocimiento que permite ampliar o precisar el que ya se posee',
    Conocimiento: 'Entender la naturaleza, cualidades y relaciones de las cosas'
}

let Dictionary = {
    dato : 'Hechos representados de forma que pueden ser comprendidos, interpretados y comunicados',
    Informacion: 'Datos representados de forma comprensible a los que se les ha asignado un significado en un contexto',
    Conocimiento: 'Información que ha sido interiorizada, previamente comprendida y evaluada en base a la experiencia'
}
let Zins = {
    dato : 'Evidencias de hechos básicos discernibles y perceptibles codificadas mediante símbolos',
    Informacion: 'Reificación de datos, convirtiéndolos en signos (interpretados). Organización de  datos  basada  en  una  ontología  que  establece  las  relaciones  relevantes e invariantes en algún contexto',
    Conocimiento: 'Entendimiento interiorizado de la información orientada al uso (acción), que a veces puede ser representado (exteriorizado).'
}

let Gadomsky  = {
    dato : 'Todo aquello que puede ser procesado mediante procesos computacionales o mentales',
    Informacion: 'Datos que representan propiedades específicas en el dominio de acción',
    Conocimiento: 'Propiedad abstracta de un agente capaz de procesar la información en otra información o conocimiento.'
}
let Pollock = {
    dato : 'Representación formalizada de hechos, conceptos o instrucciones',
    Informacion: 'Datos dispuestos en patrones significativos o sintetizados',
    Conocimiento: 'Información condensada en el contexto útil para la toma de decisiones y la acción'
}
let Rowley = {
    dato : 'Valores discretos de hechos objetivos básicos sin significado por convención',
    Informacion: 'Datos formateados y estructurados, contextualizados e interpretados (con  significado) que son representación de la realidad',
    Conocimiento: 'Información procesada que permite tomar decisiones y realizar acciones'
}
let Choo = {
    dato : 'Hechos o mensajes',
    Informacion: 'Datos con significado en base a su estructuración cognitiva',
    Conocimiento: 'Estructuración  y  formación  de  creencias  verdaderas  justificadas  en  base  a  la  información '
}
let Davenport_Prusak  = {
    dato : 'Hechos discretos objetivos',
    Informacion: 'Datos con forma (categorización) y significado (dependencia, correlación) respecto algún propósito',
    Conocimiento: 'Información útil para la toma de decisiones y la acción'
}
let Uriarte = {
    dato : 'Símbolos sin contexto',
    Informacion: 'Datos interpretados con significado (mediante conocimiento)',
    Conocimiento: 'Entendimiento de los patrones de relación entre datos e información y de sus implicaciones en un nuevo contexto'
}
let Aamodt_Nygard = {
    dato : 'Patrones sintácticos sin significado pragmático (para un contexto y propósito concretos)',
    Informacion: 'Reificación de datos, convirtiéndolos en signos (interpretados). Organización de  datos  basada  en  una  ontología  que  establece  las  relaciones  relevantes  e  invariantes en algún contexto',
    Conocimiento: 'Información  aprendida, o elaborada,  e interiorizada que se convierte en recurso activo de conocimiento para la toma de decisiones'
}

let Chiang_Barron_Storey = {
    dato : 'Enunciados  atómicos  que  denotan  hechos  individuales  con  interpretación  extensional ',
    Conocimiento: 'Enunciados  cuantificados  que  denotan  hechos  de  clases  con  interpretación  intensional, argumentos y utilidad'
}

let Schreiber_Cols = {
    dato : 'Señales no interpretadas',
    Informacion: 'Datos provistos de significado ',
    Conocimiento: 'Conjunto de datos e información que las personas utilizan para apoyar la toma de decisiones y la acción'
}



let cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [ // list of graph elements to start with
    // { group: 'nodes',data: { id: 'n1' }, position: { x: 200, y: 100 } },
    // { group: 'nodes',data: { id: 'n2' }, position: { x: 100, y: 50 } },
    // { group: 'edges',data: { id: 'e0', source: 'n1', target: 'n2' } }
  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#69e',
        'label': 'data(id)',
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 1,

        'label': 'data(label)',
        'font-size': '14px',

      }
    }
  ],

  style: cytoscape.stylesheet()
  .selector('edge')
      .css({
          'curve-style': 'bezier',
      'line-color': 'black',
      'mid-target-arrow-shape': 'none',
      'mid-target-arrow-color': 'black',
      'width': 1,
      })
    .selector('node')
      .css({
        'content': 'data(id)',
        'text-valign': 'center',
        'source-text-margin-x' :'10px',
        'text-outline-width': '10px',
        'text-outline-color': '#178',
        'background-color': '#888'
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'text-outline-color': 'black'
      }),

  layout: {
    name: 'grid',
    rows: 1
  }

});

cy.add([
    { group: 'nodes',data: { id: name , name:'n11' }, position: { x:500 , y: 300 } },
    { group: 'nodes',data: { id: name2 }, position: { x: 540, y: 400 } },
    { group: 'nodes',data: { id: name3 }, position: { x: 580, y: 300 } },


    { group: 'nodes',data: { id: RAE.dato }, position: { x: 128, y: 180 } },
    { group: 'nodes',data: { id: Dictionary.dato }, position: { x: 128, y: 223 } },
    { group: 'nodes',data: { id: Zins.dato }, position: { x: 128, y: 263 } },
    { group: 'nodes',data: { id: Gadomsky.dato }, position: { x: 128, y: 303 } },
    { group: 'nodes',data: { id: Pollock.dato }, position: { x: 128, y: 343 } },
    { group: 'nodes',data: { id: Rowley.dato }, position: { x: 128, y: 383 } },
    { group: 'nodes',data: { id: Choo.dato }, position: { x: 128, y: 423 } },
    { group: 'nodes',data: { id: Davenport_Prusak.dato }, position: { x: 128, y: 463 } },
    { group: 'nodes',data: { id: Uriarte.dato }, position: { x: 128, y: 503 } },
    { group: 'nodes',data: { id: Aamodt_Nygard.dato }, position: { x: 128, y: 543 } },
    { group: 'nodes',data: { id: Chiang_Barron_Storey.dato }, position: { x: 128, y: 583 } },
    { group: 'nodes',data: { id: Schreiber_Cols.dato }, position: { x: 128, y: 623 } },

    { group: 'nodes',data: { id: RAE.Informacion }, position: { x: 128, y: 670 } },
    { group: 'nodes',data: { id: Dictionary.Informacion }, position: { x: 128, y: 700 } },
    { group: 'nodes',data: { id: Zins.Informacion }, position: { x: 128, y: 730 } },
    { group: 'nodes',data: { id: Gadomsky.Informacion }, position: { x: 128, y: 760 } },
    { group: 'nodes',data: { id: Pollock.Informacion }, position: { x: 128, y: 790 } },
    { group: 'nodes',data: { id: Rowley.Informacion }, position: { x: 128, y: 820 } },
    { group: 'nodes',data: { id: Choo.Informacion }, position: { x: 128, y: 850 } },
    { group: 'nodes',data: { id: Davenport_Prusak.Informacion }, position: { x: 128, y: 880 } },
    { group: 'nodes',data: { id: Uriarte.Informacion }, position: { x: 128, y: 910 } },
    { group: 'nodes',data: { id: Aamodt_Nygard.Informacion }, position: { x: 128, y: 940 } },
    { group: 'nodes',data: { id: Schreiber_Cols.Informacion }, position: { x: 128, y: 970 } },

    { group: 'nodes',data: { id: RAE.Conocimiento }, position: { x: 1000, y: 180 } },
    { group: 'nodes',data: { id: Dictionary.Conocimiento }, position: { x: 1000, y: 220 } },
    { group: 'nodes',data: { id: Zins.Conocimiento }, position: { x: 1000, y: 260 } },
    { group: 'nodes',data: { id: Gadomsky.Conocimiento }, position: { x: 1000, y: 303 } },
    { group: 'nodes',data: { id: Pollock.Conocimiento }, position: { x: 1000, y: 343 } },
    { group: 'nodes',data: { id: Rowley.Conocimiento }, position: { x: 1000, y: 383 } },
    { group: 'nodes',data: { id: Choo.Conocimiento }, position: { x: 1000, y: 423 } },
    { group: 'nodes',data: { id: Davenport_Prusak.Conocimiento }, position: { x: 1000, y: 463 } },
    { group: 'nodes',data: { id: Uriarte.Conocimiento }, position: { x: 1000, y: 503 } },
    { group: 'nodes',data: { id: Aamodt_Nygard.Conocimiento }, position: { x: 1000, y: 543 } },
    { group: 'nodes',data: { id: Chiang_Barron_Storey.Conocimiento }, position: { x: 1000, y: 583 } },
    { group: 'nodes',data: { id: Schreiber_Cols.Conocimiento }, position: { x: 1000, y: 623 } },


    { group: 'edges',data: { id: 'e0', source: name , target: name2, label: 7 } },
    { group: 'edges',data: { id: 'e1', source: name2, target: name3, label: 10 } },


    { group: 'edges',data: { id: 'e2', source: RAE.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e3', source: Dictionary.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e4', source: Zins.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e5', source: Gadomsky.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e6', source: Pollock.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e7', source: Rowley.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e8', source: Choo.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e9', source: Davenport_Prusak.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e10', source: Uriarte.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e11', source: Aamodt_Nygard.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e12', source: Chiang_Barron_Storey.dato, target: name, label: 10 } },
    { group: 'edges',data: { id: 'e13', source: Schreiber_Cols.dato, target: name, label: 10 } },

    { group: 'edges',data: { id: 'e14', source: RAE.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e15', source: Dictionary.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e16', source: Zins.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e17', source: Gadomsky.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e18', source: Pollock.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e19', source: Rowley.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e20', source: Choo.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e21', source: Davenport_Prusak.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e22', source: Uriarte.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e23', source: Aamodt_Nygard.Informacion, target: name2, label: 11 } },
    { group: 'edges',data: { id: 'e25', source: Schreiber_Cols.Informacion, target: name2, label: 11 } },

    { group: 'edges',data: { id: 'e26', source: RAE.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e27', source: Dictionary.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e28', source: Zins.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e29', source: Gadomsky.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e30', source: Pollock.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e31', source: Rowley.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e32', source: Choo.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e33', source: Davenport_Prusak.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e34', source: Uriarte.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e35', source: Aamodt_Nygard.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e36', source: Chiang_Barron_Storey.Conocimiento, target: name3, label: 12 } },
    { group: 'edges',data: { id: 'e37', source: Schreiber_Cols.Conocimiento, target: name3, label: 12 } }

    ]);

cy.on('click', 'node', function(evt){
  var node = evt.target;
  console.clear()
  console.log( node.position() );
});


var dijkstra = cy.elements().dijkstra('#n1', function(edge){
  return edge.data('label');
});


let i = 0, tick = 1000;

(function(){
  if( i <  p.length){
    cy.$('#'+p[i]._private.data.id).select();
    i++;
    setTimeout(arguments.callee,tick)
  }
})
// for(let i = 0; i < p.length; i++ ){
//   console.log(i,p[i]._private.data.id);
//   cy.$('#'+p[i]._private.data.id).select();
// }
