// setting up navbar
let openNavBtn = document.querySelector("#open-nav-btn");
let closeNavBtn = document.querySelector("#close-nav-btn");
let navBar = document.querySelector(".nav-bar");

openNavBtn.addEventListener("click", () => {
    navBar.classList.add("nav-opened");
    let a = document.createElement("a");
    a.href = "#"
    a.click();

});
closeNavBtn.addEventListener("click", () => {
    navBar.classList.remove("nav-opened");
});

let dropBtn = document.querySelector(".drop-down");
dropBtn.addEventListener("mouseover", () => {
    let list = document.querySelector(".drop-down-list");
    list.classList.add("list-open");
    dropBtn.classList.add("active");
})
dropBtn.addEventListener("mouseout", () => {
    let list = document.querySelector(".drop-down-list");
    list.classList.remove("list-open")
    dropBtn.classList.remove("active");
})