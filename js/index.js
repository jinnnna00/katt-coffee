window.addEventListener("load",function(){
    const swiper1 = new Swiper('.station1', {
        // Optional parameters 슬라이드의 옵션들
        // direction: 'vertical',
        autoHeight: true,
        loop: true, 

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
            clickable:true
        },
        // slidesPerView:2 한페이지에 2개 슬라이드 보이게
        autoplay:{
            // boolean데이터는 false, true로 적용하는데 {}안에 값을 입력하게되면 값이 있으므로 true가된다 (딜레이기본값 5000)
            delay: 5000
        },
        speed:1000,

        });

    const swiper2 = new Swiper('.station2', {
        // Optional parameters 슬라이드의 옵션들
        // direction: 'vertical',
        autoHeight: true,
        loop: true,
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay:{
            delay: 5000
        },
        speed:1000,

        });

    
    const station3 = new Swiper(".station3",{
        // 옵션 넣으면된다
        loop:true,
        autoplay:true,
        effect:'fade',
    })
    const station4 = new Swiper(".station4",{
        loop:true,
        effect: 'fade',
        fadeEffect: {
            crossFade:true,
        },
    })

     station3.on('slideChange', function(){
            // console.log(station3.realIndex);
            station4.slideToLoop(station3.realIndex)
    });
})