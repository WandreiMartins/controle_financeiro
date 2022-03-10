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
    
     for(let i=0; i < 31; i++){
        
        let divPai = document.createElement('div')
        divPai.classList.add('gastoDoDia')        
        let texto = document.createTextNode(`Dia ${1+i}`)
        divPai.appendChild(texto)
        dias.appendChild(divPai)

    }
        
    