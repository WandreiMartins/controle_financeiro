let criarGasto = () =>{

  let nomeGasto = document.getElementById('nomeGasto').value
  let nomeValor = document.getElementById('nomeValor').value
  
  
  let divElemento = document.createElement('div')
  divElemento.classList.add('divClasse')
  let local = document.getElementById('despesas')
  
  
  const qtdDesp = document.getElementsByClassName('despesas').length
  
  
  local.appendChild(divElemento).innerHTML = `
  <div class="despesas" id="desp${qtdDesp}">
    <span>${nomeGasto}:</span><input type="number" id="nome${qtdDesp}">
    <div onclick="removerReceita(${qtdDesp})" class="btn"> <span>x</span> </div>
  </div>`
  document.getElementById(`nome${qtdDesp}`).value = nomeValor
  }
  
  
  function removerDespesa(element){
    const ElementoParaRemover = document.getElementById('desp'+element)
    ElementoParaRemover.remove()
  }

 // --------------- inicio receita ---------------

 let criarReceita = () =>{

  let nomeReceita = document.getElementById('nomeReceita').value
  let nomeValorReceita = document.getElementById('nomeValorReceita').value
  
  
  let divElemento = document.createElement('div')
  divElemento.classList.add('divClasse')
  let local = document.getElementById('receita')
  
  
  const qtdDesp = document.getElementsByClassName('receitas').length
  
  
  local.appendChild(divElemento).innerHTML = `
  <div class="receitas" id="desp${qtdDesp}">
    <span>${nomeReceita}:</span><input type="number" id="nome${qtdDesp}">
    <div onclick="removerReceita(${qtdDesp})" class="btn"> <span>x</span> </div>
  </div>`
  document.getElementById(`nome${qtdDesp}`).value = nomeValorReceita
  }
  
  
  function removerReceita(element){
    const ElementoParaRemover = document.getElementById('desp'+element)
    ElementoParaRemover.remove()
  }







