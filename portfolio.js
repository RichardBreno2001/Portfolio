let btn_1 = document.getElementById('icone-1')
const navbar_mobile = document.getElementById('navbar-mobile')
const navbar_pc = document.querySelector('#navbar-pc')
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