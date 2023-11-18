var draggableElems = document.querySelectorAll('.draggable');
var draggies = []
for ( var i=0; i < draggableElems.length; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {});
  draggies.push( draggie );
}