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

    let dias = document.querySelector('.gastos')
    // let gastos01 = gastoDoDia()
    
     for(let i=0; i < 31; i++){
        
        let divPai = document.createElement('div')
        divPai.classList.add('gastoDoDia')
        divPai.innerHTML=`<p>Dia 0${1+i}</p>
        <div class="formulario">
          <form action="">
              <label for="meses">Gasto com:</label>
              <div id="classeGasto">Padaria: 5,00</div>
              <select id="classesSelcao" name="meses">
                <option value="Janeiro">Selecione</option>
                
                <option value="Janeiro">Padaria</option>
                <option value="Fevereiro">Mercado</option>
                <option value="Março">Lanche na rua</option>
                <option value="Abril">Cartão de credito</option>
                <option value="Maio">Transporte</option>
                <option value="Junho">Internet</option>
                <option value="Julho">Saúde</option>
              </select>
              <input type="number" placeholder="R$">

          </form>`      
        
        dias.appendChild(divPai)

    }

    let classesDeGasto = document.querySelector('#classesDeGasto')
    gastoDoDia.addEventListener('blur', function(){
        return classesDeGasto.value
    })
    let classeGasto = document.querySelectorAll('#classeGasto')
    classeGasto[0].innerHTML=classesDeGasto
    
 