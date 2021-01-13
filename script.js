let criarGasto = () =>{

let nomeGasto = document.getElementById('nomeGasto').value
let nomeValor = document.getElementById('nomeValor').value

if(nomeValor !== '' && nomeGasto !== '' ){

let divElemento = document.createElement('div')
divElemento.classList.add('divBtn')
let local = document.getElementById('despesas')
let identidade = Math.random().toFixed(20)
console.log(identidade)
local.appendChild(divElemento).innerHTML = `
<div class="RecDes">
  <span>${nomeGasto}:</span><input type="number" id="nome${identidade}">
  <div class="btn">
   <span></span>
   <span></span>
</div>`
document.getElementById(`nome${identidade}`).value = nomeValor
}else{
  alert('Preencha o nome e valor do campo de gastos.')
}
}

  function criarReceita1() {
  let nomeReceita = document.getElementById('nomeReceita').value
  let nomeValorReceita = document.getElementById('nomeValorReceita').value

  if(nomeValorReceita !== '' && nomeReceita !== '' ){  

  let divE = document.createElement('div')
  divE.classList.add('divBtn')
  let localR = document.getElementById('receita')
  let identidade = Math.random().toFixed(20)
  localR.appendChild(divE).innerHTML = `
  <div class="RecDes" id="item">
  <span>${nomeReceita}:</span><input type="number" id="nomeR${identidade}">
  <div class="btn" onclick="removerItem()">
    <span></span>
    <span></span>
 </div>`
  document.getElementById(`nomeR${identidade}`).value = nomeValorReceita
  }else{

    alert('Preencha o nome e valor do campo da receita.')

  }
}

let removerItem = () =>{
let item = document.getElementById('item')
item = item.outerHTML
item = item.slice(73, 105)
console.log(item)
console.log(Math.random().toFixed(20))
// let apagar = document.getElementById(item)
// console.log(apagar)

}







