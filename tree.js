
const treeSection = document.querySelector('.node--root');
const tree = document.querySelector('.tree-structure');
let xPosition ;
let yPosition ;

let lastMousePositionX;
let lastMousePositionY;
let deltax = 0;
let deltay = 0;
let mouseDown = false;
let bd;


function onDrag(e){
   const {movementX, movementY} = e;
   let getStyle = window.getComputedStyle(treeSection);
   let left = parseInt(getStyle.left);
   let top = parseInt(getStyle.top);
   treeSection.style.left = `${left + movementX}px`;
   treeSection.style.top = `${top + movementY}px`;
}


treeSection.onmousedown = (e) => {
   mouseDown = true;
}
treeSection.onmouseup = (e) => {
   mouseDown = false;
   console.log('up');

}
treeSection.addEventListener('mousemove', function(e){
   if(mouseDown){
      onDrag(e);
   }
})













// let family = [
//    Grandma = {
//       name: 'Grandma',
//       married: [],
//       children: ['Gomez', 'Fester'],
//       about: `Grandmama is known for her cynical and morbid sense of humor and her recreational interest in the occult. She is a witch, who dwells in potion-making, spells, hexes, and even fortune-telling. She is probably best recognized by her frizzy grey hair and her shawl.`,
//    },
//    Gomez = {
//       name: 'Gomez',
//       married: 'Morticia',
//       children: ['Wednesday', 'Pugsley', 'Pubert'],
//       about:`Husband to Morticia, if indeed they are married at all... a crafty schemer, but also a jolly man in his own way... though sometimes misguided... sentimental and often puckish - optimistic`,
//    },
//    Fester = {
//       name: 'Fester',
//       married: [],
//       children: [],
//       about: `Uncle Fester is incorrigible and, except for the good nature of the family and the ignorance of the police, would ordinarily be under lock and key.`,
//    },
//    Wednesday = {
//       name: "Wednesday",
//       married: [],
//       children: [],
//       about: ``,
//    },
//    Pugsley = {
//       name: "Pugsley",
//       married: [],
//       children: [],
//       about: ``,
//    },
//    Pubert = {
//       name: "Pubert",
//       married: [],
//       children: [],
//       about: ``,
//    },

// ]
// console.log(family[3].name === family[1].children[0]);
// const container = document.querySelector('.tree-structure');
// const findIndex = (val) => {
//    let indexRet;
//    family.forEach((el, index) => {
//       console.log(el.name === val, index);
//       if(el.name === val){
//          indexRet = index;
//       }
//    });
//    if(indexRet) return indexRet;
// }
// console.log(findIndex(family[1].children[0]));
// const now = family[findIndex(family[1].children[0])];
// console.log(now, family[1].children[0]);

// const getTreeData = () => {
//    return {
//    element: family[0],
//    left: {
//       element: family[1],
//       left:{
//          element: family[findIndex(family[1].children[0])],
//       },
//       right:{
//          element: family[findIndex(family[1].children[1])],
//       },
//       middle: {
//          element: family[findIndex(family[1].children[2])],
//       }
//    },
   
//       // element: "trest22",
//       // left:{
//       //    element: "test222",
//       // },
//       // right:{
//       //    element: "test223",
//       //    left: {
//       //       element: "test231"
//       //    }
//       // },
   
// }
// }
// console.log(1);
// function MarriedChild(element){
//    return `
//    <div class="node--married">
//       <div class="node__element">${element.name}</div>
//       <div class="node__element married padding">${}</div>
//    </div>`
// }
// const renderTree = (node) => {
//    const {right, left, middle, married, element} = node;
//    console.log(element);
//    const html =
//    `<div class="node__element">${element.name}</div>
   
//    ${left || right || middle ?  ( 
//    `
//    <div class="node__children">
//    ${left ? (`<div class="node">
//    ${renderTree(left)}
// </div>`) : ''}
// <div class="node__children">
//    ${middle ? (`<div class="node">
//    ${renderTree(middle)}
// </div>`) : ''}
//    ${right ? (`<div class="node">
//    ${renderTree(right)}
// </div>`) : ''}
      
//    </div>`) : ""}`
//    return html;
// }

// const main = () => {
//    const rootNode = getTreeData();
//    container.innerHTML = renderTree(rootNode);
//    container.style.top = '50px'
// }

// main();