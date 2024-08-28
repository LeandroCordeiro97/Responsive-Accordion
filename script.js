document.addEventListener('DOMContentLoaded', function(){
    const accordionHeaders = document.querySelectorAll('.accordion-header')
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function(){
            const currentlyActiveHeader = document.querySelector('accordion-header.active')
            if(currentlyActiveHeader && currentlyActiveHeader !== header){
                currentlyActiveHeader.classList.toggle('active')

                currentlyActiveHeader.nextElementSibling.classList.toggle('open')
                currentlyActiveHeader.nextElementSibling.style.maxHeight = 0
            }

            header.classList.toggle('active')
            const accordionContent = header.nextElementSibling
            accordionContent.classList.toggle('open')

            if(accordionContent.classList.contains('open')){
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px' 
            } else {
                accordionContent.style.maxHeight = 0
            } 
        })
    })
})