const sections=document.querySelectorAll("section");
const btnBurger =document.querySelector("#burger-menu");
const nav=document.querySelector("nav");
const menu=document.querySelector(".navigation");
const links=document.querySelectorAll(".navigation a");
const header=document.querySelector("nav");
const navLinks = document.querySelectorAll('nav > ul > li > a');
btnBurger.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    // menu.classList.add(burger)
    // btnBurger.classList.toggle("bx-x")
});
links.forEach(link  =>{
    link.addEventListener("click",()=>{
menu.classList.remove("active")
// btnBurger.classList.remove("bx-x")
    });
})
window.addEventListener("scroll", ()=>{
    menu.classList.remove("active")
    // btnBurger.classList.toggle("bx-x")
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        header.classList.add("scrool")
        navLinks.forEach(link=>{
            link.style.color="black"
        })
        btnBurger.style.color="var(--bg)"
    }
    else{
        header.classList.remove("scrool")
        navLinks.forEach(link=>{
            link.style.color="var(--btn)"
        })
          btnBurger.style.color="var(--btn)"

    }
});

// partie scroll reveal

const sr=ScrollReveal({
    duration:600,
    origin:"top",
    distance:"30px",
    reset:true
  })
  
  sr.reveal(".home, .copy, .footer-text, .container, .services, .about-container", {interval:200});
  
  const title=document.querySelector('h1');

  const typewriter= new Typewriter(title, {
    delay:100,
   loop:true
  })

  typewriter
  .typeString("Villas d'Evasion <br>Votre portail vers le Luxe Abordable")
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(2000)
  .start();
  