//=============== トップページ選択肢 移動 ===============
var topPage = document.getElementById("top");
var actions = document.querySelectorAll(".top .order-box li");
var sections = document.querySelectorAll(".details section");
var orders = document.querySelectorAll(".details .order-box li");
var backBtn = document.getElementById("backBtn");

for(let i = 0; i < actions.length; i++){
    actions[i].addEventListener("mouseover",()=>{
        actions.forEach((action)=>{
            action.classList.remove("hovered");
        })
        actions[i].classList.add("hovered");
    });

    actions[i].addEventListener("click",()=>{
        topPage.classList.add("top-hide");

        orders.forEach((order)=>{
            order.classList.remove("hovered");
        })
        orders[i].classList.add("hovered");

        sections.forEach((section)=>{
            section.classList.remove("display");
        })
        sections[i].classList.add("display");
    })
}

//============== detailsページ =================
//============== section切り替え ===============
for(let i = 0; i < orders.length; i++){
    orders[i].addEventListener("click",()=>{
        orders.forEach((order)=>{
            order.classList.remove("hovered");
        })
        sections.forEach((section)=>{
            section.classList.remove("display");
        })
        orders[i].classList.add("hovered");
        sections[i].classList.add("display");
    });
}

backBtn.addEventListener("click",()=>{
    topPage.classList.remove("top-hide");
})

//============== detailsページ =================
//============== section切り替え ===============
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        focus  : 'center',
        drag   : false, 
        pagination  : false,
    }).mount();
})

