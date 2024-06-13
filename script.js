
let increaseByOne= document.getElementById('increaseByOne');
let decreaseByOne= document.getElementById('decreaseByOne');
let reset= document.getElementById('reset');
let num = document.getElementById('num');

function counter(){
    let count=0;
    decreaseByOne.addEventListener('click' , ()=>{
        count=count-1;
        num.innerHTML=count;
    })
    reset.addEventListener('click' , ()=>{
        count=0
        num.innerHTML=count;
    })
    increaseByOne.addEventListener('click' , ()=>{
        count=count+1;
        num.innerHTML=count;

    });
}
counter();