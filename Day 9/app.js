console.log("Connected")

let contain = document.querySelector('.container')
console.log(contain)

for(let i=0;i<36;i++){
    contain.innerHTML += '<div class="box"></div>'
}
console.log(contain)

let bookedseats = 0;
let remainseats = 36;


let booked = document.getElementById('booked')
let remain = document.getElementById('remain')

let box = document.querySelectorAll('.box')
console.log(box);
console.log('going to click');

box.forEach((item)=>{
    let i = item.classList;
    console.log(i);
    item.addEventListener('click', ()=>{
    console.log('clicked');
    if(i.contains('boxclicked')){
        i.remove('boxclicked');
        bookedseats -= 1;
        remainseats += 1;
        console.log(bookedseats)
        console.log(remainseats)
    }
    else{
        i.add('boxclicked');
        bookedseats += 1;
        remainseats -= 1;
        console.log(bookedseats)
        console.log(remainseats)
    }
    booked.innerHTML = `Booked Seats : ${bookedseats}`;
remain.innerHTML = `Remaining Seats : ${remainseats}`;

});


})






