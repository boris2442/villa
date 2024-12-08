const sections=document.querySelectorAll("section");
const btnBurger =document.querySelector("#burger-menu");
const nav=document.querySelector("nav");
const menu=document.querySelector(".navigation");
const links=document.querySelectorAll(".navigation a");
btnBurger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    btnBurger.classList.toggle("bx-x")
});
links.forEach(link  =>{
    link.addEventListener("click",()=>{
menu.classList.remove("active")
btnBurger.classList.remove("bx-x")
    });
})
window.addEventListener("scroll", ()=>{
    menu.classList.remove("active")
    btnBurger.classList.toggle("bx-x")
});
window.addEventListener("scroll", ()=>{
nav.classList.toggle("active", window.scrollY>0)
});
const scrollActive=()=>{
    sections.forEach(section=>{
        let top=window.scrollY;
        let offset=section.offfsetTop-100;
        let height=section.offsetHeight;
        let id=section.getAttribute("id");

if(top>=offset&& top<offset+height){
links.forEach(link=>{
   link.classList.remove("active")
   
})
}





    })
}
window.addEventListener("scroll", scrollActive);