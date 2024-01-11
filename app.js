let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click",()=>{
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
})

prev.addEventListener("click",()=>{
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
})


let item1 = document.querySelector(".work_item:nth-child(1)")
let item2 = document.querySelector(".work_item:nth-child(2)")
let item3 = document.querySelector(".work_item:nth-child(3)")
let item4 = document.querySelector(".work_item:nth-child(4)")

item1.addEventListener("click", ()=>{
    item1.classList.add("active")
    item2.classList.remove("active")
    item3.classList.remove("active")
})

item2.addEventListener("click", ()=>{
    item2.classList.add("active")
    item1.classList.remove("active")
    item3.classList.remove("active")
})


item3.addEventListener("click", ()=>{
    item3.classList.add("active")
    item2.classList.remove("active")
    item1.classList.remove("active")
})

let menuPanel = document.querySelector(".menu-panel");
let menu = document.querySelector(".hamburger");
let menuLink1 = document.querySelector(".menu-panel a:nth-child(1)")
let menuLink2 = document.querySelector(".menu-panel a:nth-child(2)")
let menuLink3 = document.querySelector(".menu-panel a:nth-child(3)")
let menuLink4 = document.querySelector(".menu-panel a:nth-child(4)")



menu.addEventListener("click", ()=>{
    menu.classList.toggle("is-active")
    menuPanel.classList.toggle("is-active")
})

menuLink1.addEventListener("click", ()=>{
    menu.classList.toggle("is-active")
    menuPanel.classList.toggle("is-active")
})

menuLink2.addEventListener("click", ()=>{
    menu.classList.toggle("is-active")
    menuPanel.classList.toggle("is-active")
})

menuLink3.addEventListener("click", ()=>{
    menu.classList.toggle("is-active")
    menuPanel.classList.toggle("is-active")
})

menuLink4.addEventListener("click", ()=>{
    menu.classList.toggle("is-active")
    menuPanel.classList.toggle("is-active")
})