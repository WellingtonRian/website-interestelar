document.querySelectorAll('.accordion-button').forEach((button)=>{

    button.addEventListener('click', ()=>{
        const accordionContent = button.nextElementSibling;
        const icon = button.querySelector('.icon')
        let angulo = 90
        let anguloOff = 0

        button.classList.toggle('active')

        if(button.classList.contains('active')){
            accordionContent.style.height = accordionContent.scrollHeight + 'px'
            icon.style.transform = `rotate(${angulo}deg)`
        }else{
            accordionContent.style.height = 0 + 'px'
            icon.style.transform = `rotate(${anguloOff}deg)`
        }
    })
})