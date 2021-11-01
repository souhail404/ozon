const burger=document.getElementById("burger");
const cancel=document.getElementById("cancel");
const menucart=document.getElementById("menu-cart");

burger.addEventListener('click' , ()=>{
    menucart.classList.toggle('active');
    burger.classList.toggle('active');
})