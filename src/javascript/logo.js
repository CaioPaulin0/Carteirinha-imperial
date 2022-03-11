

function teste(){
    const logos = ['https://i.postimg.cc/FHjNM346/logo1.png','https://i.postimg.cc/5tbbby92/logo4.png','https://i.postimg.cc/g0XXTRbQ/5.png','https://i.postimg.cc/SKdqs4j7/logo2.png']
    const logoDiv = document.querySelector('.logoDiv').querySelectorAll('div')
    const card = document.querySelector('.card')
    
    for(let i = 0; i < logoDiv.length; i++){
        logoDiv[i].addEventListener('click', () =>{
            console.log('caixa' + i)
            card.style.backgroundImage = ` url(${logos[i]})`
        })
    }
    
    
    return
}

export default teste