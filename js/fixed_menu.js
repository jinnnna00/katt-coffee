window.addEventListener("load",function(){

    let fixed_menu = this.document.querySelector(".fixed_menu")
    let lastScrollTop = 0
    let hideTimeout = null

    this.window.addEventListener("scroll",function(){
        // 스크롤 했을 때 실행되는 동작
        let scrollTop = this.document.documentElement.scrollTop
        // 위에서 스크롤바가 얼만큼 내려왔는지 계산하여 변수에 저장
        if(scrollTop < lastScrollTop){
            //마우스 휠을 위로 올렸을 때
            fixed_menu.classList.add("on")

            // 이미 존재하는 예약 타임이 있다면 제거
            if(hideTimeout){
                this.clearTimeout(hideTimeout)
            }

            hideTimeout =  this.setTimeout(function(){
                fixed_menu.classList.remove("on")
            },2000)
            // 2초 뒤에 사라지게

        }else{
            // 마우스 휠을 아래로 내렸을 때
            fixed_menu.classList.remove("on")
        }
        lastScrollTop = scrollTop
    })

    fixed_menu.addEventListener("mouseover",function(){
        // 마우스 올렸을때 자동으로 들어가지 않게한다
        clearTimeout(hideTimeout)
    })
    fixed_menu.addEventListener("mouseout",()=>{
        // function으로 할때는 this가 fixed_menu를 가리키게 되는데 화살표로하면 window를 가리키게 된다 아래 this를 빼버리거나 화살표로 바꾸면 된다
        hideTimeout =  this.setTimeout(function(){
            fixed_menu.classList.remove("on")
        },1000)
    })

    //위로가기 버튼을 클릭하면 페이지 최상단으로 부드럽게 스크롤하여 이동되는 기능
    let btn_top = this.document.querySelector("#btn_top")
    btn_top.addEventListener("click",function(e){
        e.preventDefault()
        window.scrollTo({top:0,behavior:"smooth"}) //인자를 객체형태로 써줘야 ,하고 동작 방식
    })
})