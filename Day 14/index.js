let box = document.querySelector('.box');
console.log(box)

box.addEventListener('click', ()=>{
console.log('clicked box')

box.classList.toggle("clicked");


});

function myscript(){
    // alert('KeyPres Event triggered')
    let inp = document.querySelector('input')
    inp.style.background = "yellow"
}

function myfunction(){
    
    let inb = document.querySelector('button')
    document.body.classList.toggle("changec");
}
