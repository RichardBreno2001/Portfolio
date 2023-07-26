let btn_1 = document.getElementById('icone-1')
const navbar_mobile = document.getElementById('navbar-mobile')
const navbar_pc = document.querySelector('#navbar-pc')
let texto = document.getElementById('texto_2')
const frase = 'Richard Breno, desenvolvedor free-lancer.'
const intervalo = 150
const github = document.getElementById('github')


btn_1.addEventListener('click',()=>{
    if(navbar_mobile.style.display == 'none') {
        navbar_mobile.style.display = 'block'
    } else {
        navbar_mobile.style.display = 'none'
    }
    
})
function largura() {
    if(window.innerWidth >= 1280) {
        navbar_mobile.style.display = 'none'
        navbar_pc.style.display = 'block'
    } else {
        navbar_pc.style.display = 'none'
    }
}

function escrever(texto,frase,intervalo) {
    const arr = frase.split('').reverse()
    const executar = setInterval(() => {
        if(!arr.length) {
            return clearInterval(executar)
        }
        const prox = arr.pop()
        texto.innerHTML+=prox
    }, intervalo);
}

setTimeout(function(){
    escrever(texto,frase,intervalo)
},1000)
