"use strict";


let routes_button = document.getElementsByClassName('routes_button');
for (let i = 0 ; i < routes_button.length ; i++){
    routes_button[i].addEventListener('click', mapft);
    // routes_button[i].addEventListener('click', buttoncolor);
    routes_button[i].addEventListener('click', function(e){
        e.preventDefault();
        //console.log(routes_button);
        //console.log(maps_bn);
    });              
}

function mapft(){
    //console.log(this.id);
    const id = this.id;
    const maps_bn = document.getElementById( id+'_i');
    //const allmaps_bn = document.getElementsByClassName('maps_bn');
    //console.log(document.getElementById( id+'_i'));
    document.getElementsByClassName("maps_show")[0].classList.remove("maps_show");
    maps_bn.classList.add("maps_show");

    
    // let map_a = maps_bn.children;
    // console.log(map_a);
    // map_a.classList.add("color_ch");
    document.getElementsByClassName("color_ch")[0].classList.remove("color_ch");
    let maps_span = this.querySelector("span");
    //console.log(maps_span);
    maps_span.classList.add("color_ch");
    
    // console.log(maps_bn);
    // if(maps_bn.style.dispaly = "blcok"){
    //     maps_bn.style.dispaly = "none";
    // }else{
    //     maps_bn.style.dispaly = "blcok";
    // }
}




// const mapa = document.querySelector(".mapa");
// function buttoncolor(){
//     for(let j = 0; j < mapa.length; j++){
    
//         mapa[i].classList.toggle("color_ch");
//     }
// }

    //let link_id = routes_button[i].getAttribute("data-id");
    // console.log(link_id);
    // if(link_id == "map"){
    //     maps_bn.style.display == "none";
    //     map_all.style.display == "block"; 
    // }else{
    // }

// console.log(maps_bn[i].innerHTML.getAttribute);
// maps_bn[i].innerHTML=("./img/"+ routes_button[i].getAttribute("data-id") + ".jpg");


