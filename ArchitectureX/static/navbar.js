const hbutton = document.querySelector(".hamburgerbutton");
const mobilelinks = document.querySelector(".linkshamb");
const links = document.querySelector(".links");
const sticks = hbutton.children;
value = 0;

hbutton.addEventListener("click",()=>{
    value+=1
    mobilelinks.style.transition = "0.3s";
    mobilelinks.style.visibility = "visible";
    mobilelinks.style.opacity = "1";
    mobilelinks.style.transform = "translateY(0)";
    sticks[0].style.transform = "rotate(-45deg)";
    sticks[0].style.width = "15px";
    sticks[2].style.transform = "rotate(45deg)";
    sticks[1].style.transform = "translateX(6px);";
    sticks[2].style.width = "15px";
if(value == 2){
    mobilelinks.style.visibility = "hidden";
    mobilelinks.style.opacity = "0";
    mobilelinks.style.transform = "translateY(-60vh)";
    sticks[0].style.transform = "rotate(0deg)";
    sticks[0].style.width = "27px";
    sticks[2].style.transform = "rotate(0deg)";
    sticks[1].style.transform = "translateX(0);";
    sticks[2].style.width = "27px";
    value-=2
    }
})

