const buttonsFilter = document.querySelectorAll('.user-filter span')

buttonsFilter.forEach(button => {
  button.addEventListener('click', ()=>{

    buttonsFilter.forEach(buttonChange => {
      buttonChange.classList.remove('active')
    })
    
    button.classList.add('active')
  })
})