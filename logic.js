let menuBtn=document.querySelector('.menu-btn')
menuBtn.addEventListener('click',a,true)
function a(e){
    console.log(e)
    let a=document.querySelector('.main-menu')
    a.classList.toggle('show')
    console.log(a.classList)
}

let x="https://randomuser.me/api/?results=1"
let t=fetch(x).then(function(w){
    return w.json()
})
