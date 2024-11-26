window.addEventListener("load",function(){
    const station7 = new Swiper(".station7",{
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