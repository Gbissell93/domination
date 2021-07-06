// Variables ===============================================================
const ul = document.querySelector('ul');
let firstChild = ul.firstElementChild
const newImg = document.createElement('img');
const newLi = document.createElement('li')
const imageArea = document.getElementById('images');
const header = document.createElement('h3')
// Part One ===============================================================
 function strikeThrough () {
     firstChild.style.textDecoration = "line-through"
 }

 strikeThrough();

 function makeLink (id, url) {
     document.getElementById(id).src = url;
 }

const randomImg1 = 'https://source.unsplash.com/random/400x300/?earth'
const randomImg2 = 'https://source.unsplash.com/random/400x300/?wind'
const randomImg3 = 'https://source.unsplash.com/random/400x300/?fire'

 makeLink ('image-1',randomImg1 )
 makeLink ('image-2',randomImg2 )
 makeLink ('image-3',randomImg3 )

 function removeFirst () {
     firstChild.remove();
 }

 removeFirst();
 removeFirst();



 function changeFontSize (id, size) {
    document.getElementById(id).style.fontSize = size + 'px'
}

changeFontSize('heading', '12')

// Part Two ===============================================================
function appendToArgs (el) {
    ul.appendChild(el)
}
appendToArgs(newImg);

function adjustHeight (img) {
    document.getElementById(img).style.height = '30px'
} 

adjustHeight('image-2')

function makeInvisible (el) {
    document.getElementById(el).className = 'invisible';
}

makeInvisible('copy')

// Part Three ===============================================================
function returnElement (text) {
return newLi.innerText = text
}

const newEl = returnElement('this is still an argument tho...');
ul.appendChild(newLi)

function addHeader (size, text) {
  const newHeader = header.style.fontSize = size + "px";
  return newHeader.innerText = text;
}

const header2 = addHeader('48', 'this is a new header')

imageArea.appendChild(header2)