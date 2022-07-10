const ham = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu");
const submit = document.querySelector("#submit");
const sub = document.querySelector("#sub");

ham.addEventListener("click",()=>{
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll("li").forEach(
    n=>
    n.addEventListener("click",()=>
    {
        ham.classList.remove("active");
        navMenu.classList.remove("active");
    }))

    submit.addEventListener("click",(e)=>{
        sub.innerHTML="Subscribed";
        e.preventDefault;
    })