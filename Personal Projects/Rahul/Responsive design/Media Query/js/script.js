let loginBtn = document.querySelector(".loginBtn");
let form = document.querySelector("form");
const dropdownLink1 = document.querySelector("#Menu1 > .fadeHoverLinks");
const dropdownMenu1 = document.querySelector("#Menu1 > .dropdownMenu");
const dropdownLink2 = document.querySelector("#Menu2 > .fadeHoverLinks");
const dropdownMenu2 = document.querySelector("#Menu2 > .dropdownMenu");
const dropdownLink3 = document.querySelector("#Menu3 > .fadeHoverLinks");
const dropdownMenu3 = document.querySelector("#Menu3 > .dropdownMenu");

loginBtn.addEventListener("click", () => {
    form.style.display = "flex";
});

dropdownLink1.addEventListener("mouseover", () => {
    dropdownMenu1.style.display = "block";
    dropdownMenu1.classList.add("fadeInFromTop");
});

dropdownLink1.addEventListener("mouseleave", () => {
    dropdownMenu1.style.display = "none";
    // dropdownMenu.classList.remove("fadeInFromTop");
});

dropdownMenu1.addEventListener("mouseover", () => {
    dropdownMenu1.style.display = "block";
});

dropdownMenu1.addEventListener("mouseleave", () => {
    dropdownMenu1.style.display = "none";
    dropdownMenu1.classList.remove("fadeInFromTop");
});

dropdownLink2.addEventListener("mouseover", () => {
    dropdownMenu2.style.display = "block";
    dropdownMenu2.classList.add("fadeInFromTop");
});

dropdownLink2.addEventListener("mouseleave", () => {
    dropdownMenu2.style.display = "none";
    // dropdownMenu.classList.remove("fadeInFromTop");
});

dropdownMenu2.addEventListener("mouseover", () => {
    dropdownMenu2.style.display = "block";
});

dropdownMenu2.addEventListener("mouseleave", () => {
    dropdownMenu2.style.display = "none";
    dropdownMenu2.classList.remove("fadeInFromTop");
});

dropdownLink3.addEventListener("mouseover", () => {
    dropdownMenu3.style.display = "block";
    dropdownMenu3.classList.add("fadeInFromTop");
});

dropdownLink3.addEventListener("mouseleave", () => {
    dropdownMenu3.style.display = "none";
    // dropdownMenu.classList.remove("fadeInFromTop");
});

dropdownMenu3.addEventListener("mouseover", () => {
    dropdownMenu3.style.display = "block";
});

dropdownMenu3.addEventListener("mouseleave", () => {
    dropdownMenu3.style.display = "none";
    dropdownMenu3.classList.remove("fadeInFromTop");
});
