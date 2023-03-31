//click hamburger open & active
const hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector(".main-nav");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    mainnav.classList.toggle("active");
}

hamburger.addEventListener("click",function(){
    navmenu.classList.toggle("open_ul");
})


const nav_link = document.querySelectorAll(".nav-link");
nav_link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    main-nav.classList.remove("active");
}


//click bar change color
hamburger.addEventListener("click", function(){
    let barClass = "";
    if(document.getElementById("bar1").className == 'bar'){
        barClass = 'bar color';
    } else {
        barClass = 'bar';
    }
    document.getElementById("bar1").setAttribute("class", barClass);
    document.getElementById("bar2").setAttribute("class", barClass);
    document.getElementById("bar3").setAttribute("class", barClass);
        
})


//scroll bar change color
const bar = document.getElementsByClassName("bar");
window.addEventListener("scroll", function(e){
    //console.log("scrollY: " + window.scrollY);

    // const scroll = window.scrollY;   
    if(window.scrollY >= 380){
        for(let i=0 ; i < bar.length ; i++){
            bar[i].classList.add("barcolor");
        }
    }else{
        for(let i=0 ; i < bar.length ; i++){
            bar[i].classList.remove("barcolor");
        }
    }
});


// for (let i = 0 ; i < bar.length ; i ++)
// hamburger.addEventListener("click", changecolor);

// function changecolor() {
//     document.getElementsByClassName("color")[0].classList.remove("color");
//     bar.classlist.add("color");
// }