const MenuOpen = document.querySelector(".burger-but");

const banner = document.querySelector(".banner");
var OpenMenu = false;

banner.style.display = "none";

MenuOpen.addEventListener("click", ()=>{
    OpenMenu = !OpenMenu;
    banner.style.display = OpenMenu ? "flex" : "none"
})