const menu__btn = document.querySelector('.__hamburegr_menu');
const __navbar = document.querySelector('.__navbar');
const __login__signup = document.querySelector('.__Login_Signup');

menu__btn.addEventListener("click", ()=>{
    if(__navbar.style.display === "" || __navbar.style.display === "none" ) {
        __navbar.style.display = "flex";
        __login__signup.style.display = "flex";
        menu__btn.children[0].src = "assets/icon-close.svg";
    }else{
        __navbar.style.display = "none";
        __login__signup.style.display = "none";
        menu__btn.children[0].src = "assets/icon-hamburger.svg";
    }
})