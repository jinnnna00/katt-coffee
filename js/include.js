
fetch('/head.html')
//  fetch: 외부파일을 가져오는 함수 (script는 가져오지 못한다)
.then(Response => Response.text())
.then(data => {
   document.head.innerHTML += data
   //모바일 메뉴버튼 클릭 했을 때 메뉴 나오기


})
.catch(error => console.log("에러 :",error))

// fetch는 서버에서만 작동한다
fetch('/header.html')
.then(Response => Response.text())
.then(data => {
   document.querySelector(".header_wrap").innerHTML += data
   let btn_gnb = this.document.querySelector("#btn_gnb")
   let hidden_gnb = this.document.querySelector(".hidden_gnb")
   let btn_close_gnb = this.document.querySelector("#btn_close_gnb")
   let header = document.querySelector("header")

   btn_gnb.addEventListener("click",function(){
       hidden_gnb.classList.add("on")
   })
   btn_close_gnb.addEventListener("click",function(){
       hidden_gnb.classList.remove("on")
   })
   setTimeout(function(){
      header.style.transision = "all 0.5s ease 0s"
      hidden_gnb.style.transition = "all 0.5s ease 0s"
   },200)
})
.catch(error => console.log("에러 :",error))

fetch('/footer.html')
.then(Response => Response.text())
.then(data => {
   document.querySelector("footer").innerHTML += data
})
.catch(error => console.log("에러 :",error))


fetch('/fixed_menu.html')
.then(Response => Response.text())
.then(data => {
   document.querySelector(".fixed_menu").innerHTML += data

   

      let fixed_menu = this.document.querySelector(".fixed_menu")
      let lastScrollTop = 0
      let hideTimeout = null
  

      setTimeout(function(){
         fixed_menu.style.transition = "all 0.6s ease 0s"
      },100)

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

      let design_ver = "client"
      
      let admin_img = document.querySelector("#admin_img")
      let btn_admin = document.querySelector("#btn_admin")
      btn_admin.addEventListener("click",function(e){
         e.preventDefault()
         //a태그를 클릭했을 때 스크롤바가 위로 이동되는 기본기능을 억제

         if(design_ver=="client"){
            document.body.classList.add("admin")
            design_ver = "admin"
            admin_img.setAttribute("src","/img/store.svg")
         }else{
            document.body.classList.remove("admin")
            design_ver = "client"
            admin_img.setAttribute("src","/img/Businessman.png")
         }
         // 어드민 버튼 누를때마다 관리자모드랑 고객모드 바뀐다


      })



})
.catch(error => console.log("에러 :",error))


window.addEventListener("load",function(){
   let modal1 = this.document.querySelector(".modal")
   if(modal1){
      // 만약 modal1이 있다면 실행된다는 뜻
      this.setTimeout(function(){
         modal1.style.transision = "all 0.5s ease 0s"
      },200)
   }

})

