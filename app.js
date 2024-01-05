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