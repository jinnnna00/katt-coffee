window.addEventListener("load",function(){
    const station6 = new Swiper(".station6",{
        slidesPerView: 1,
        spaceBetween: 14, 
        //rem단위 못쓴다
        breakpoints:{
            768:{
                slidesPerView: 2,
                spaceBetween:18,
            },
            1280:{
                slidesPerView: 4,
                spaceBetween:20,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

})