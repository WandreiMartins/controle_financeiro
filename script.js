let criarGasto = () =>{

let nomeGasto = document.getElementById('nomeGasto').value
let nomeValor = document.getElementById('nomeValor').value


let divElemento = document.createElement('div')
let local = document.getElementById('despesas')
let identidade = Math.random()
console.log(identidade)
local.appendChild(divElemento).innerHTML = `
<div>
  <span>${nomeGasto}:</span><input type="number" id="nome${identidade}">
</div>`
document.getElementById(`nome${identidade}`).value = nomeValor
}

