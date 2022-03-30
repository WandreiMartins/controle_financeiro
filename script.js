const body = document.querySelector('body'),
      sidebar = document.querySelector('.sidebar'),  
      toggle = document.querySelector('.toggle'),  
      searchBtn = document.querySelector('.search-box'),  
      modeSwitch = document.querySelector('.toggle-switch'),  
      modeText = document.querySelector('.mode-text') 

      toggle.addEventListener('click', () => {
          sidebar.classList.toggle('close')
      })


      modeSwitch.addEventListener('click', () => {
        body.classList.toggle('dark')
        if(body.classList.contains('dark')){
            modeText.innerText = 'Light Mode'

        }else{
            modeText.innerText= 'Dark Mode'
        }
    })


// --------------------- tags de gastos -----------------------

    
    let dias = document.querySelector('.gastos')
    
    // console.log(tagItem)
    // let gastos01 = gastoDoDia()
    
     for(let i=0; i < 31; i++){
        
        let divPai = document.createElement('div')
        divPai.classList.add('gastoDoDia')
        divPai.innerHTML=`<p>Dia 0${1+i}</p>
        <div class="formulario">
          <form action="">
              <label for="meses">Gasto com:</label>
              <div class="itemValor"><div id="item"></div> <p id="valor"></p></div>
              <select id="classesDeGasto" name="meses">
                    <option value="Selecione">Selecione</option>
                    
                    <option value="Padaria">Padaria</option>
                    <option value="Mercado">Mercado</option>
                    <option value="Lanche na rua">Lanche na rua</option>
                    <option value="Cartão de credito">Cartão de credito</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Internet">Internet</option>
                    <option value="Saúde">Saúde</option>
                </select>
              <input  type="number" placeholder="R$" id="valorInput">
              <div class='btn'>Incluir</div>

          </form>`      
        
        dias.appendChild(divPai)

    }
    
let gastoDoDia = document.querySelectorAll('.gastoDoDia')
let itemArray = []
gastoDoDia.forEach((gasto, index)=>{
    
    let gdd = gasto.querySelector('select')
    let valorInput = gasto.querySelector('#valorInput')
    let btn = gasto.querySelector('.btn')
    
        btn.addEventListener('click', function(){
        
                // let addTexto = gasto.querySelector('#item')
                // addTexto.innerHTML = 'funciona'


                // let addValor = gasto.querySelector('#valor')
                // addValor.innerHTML = valorInput.value
                itemArray.push(gdd.value)
                // console.log(itemArray)
                gasto.querySelectorAll('p').forEach(p => p.remove())
                let tagItem = gasto.querySelector('#item')
                console.log(tagItem)
                itemArray.forEach(itens => {
                let itemTag = `<p id="itemTagP">${itens}</p>`            
                tagItem.insertAdjacentHTML("afterbegin", itemTag)
                
                })         
                
         })
})



 
