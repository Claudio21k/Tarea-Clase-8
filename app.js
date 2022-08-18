let pg = document.getElementById('pGraph');
let newEll = document.createElement('h2');
let newEl2 = document.createElement('h2');


newEll.innerHTML = 'Inicio'
pg.appendChild(newEll)

let count = 0;
while(count <= 10){
    let value = count;
    let addElem = document.createElement('h4');
    addElem.innerHTML ="Cuenta: " + value;
    pg.appendChild(addElem)
    //count= count + 1;
    count++;
}

newEl2.innerHTML = 'Fin'
pg.appendChild(newEl2)

function eventClick(){
  document.body.style.backgroundColor = 'white';
}

function colorBlue(){
  document.body.style.backgroundColor = 'blue';
}
function colorYellow(){
  document.body.style.backgroundColor = 'yellow';
}

let newBtn = document.getElementById('blue');
newBtn.onclick = colorBlue;

let yellowBtn = document.getElementById('yellow');
yellowBtn.addEventListener('click', colorYellow);

