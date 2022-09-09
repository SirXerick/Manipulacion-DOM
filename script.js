console.log('hola mundo');
 // h1 (seleccionas la etiqueta)
 // .parrafo (seleccionas la class)
 // #parrafo (seleccionas los ID)

   
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#parrafito');
const inp = document.querySelector('input');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const btn = document.querySelector('#btnres')
const pr = document.querySelector('#resultado');


btn.addEventListener('click',sumar);

function sumar () {
const resultado = n1.value + n2.value;
pr.innerText = 'Resultado: ' +resultado;

}


// console.log(inp.value)

// console.log ({
// h1,
// p,
// parrafito,
// pid,
// inp,
// })

