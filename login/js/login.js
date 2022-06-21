const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const btn_open_popup1 = document.querySelector(".btn_open_popup1");
const btn_open_popup2 = document.querySelector(".btn_open_popup2");
//로그인 버트 모달창 띄우기
btn_open_popup1.addEventListener("click", () => {
  modal.classList.toggle("show"); //false로 만들어주기
  //클래스중에서 show가 있다면 강제로 떼버리고 false리턴
  //show가 없다면 더해주고 true리턴
  if (modal.classList.contains("show")) {
    //모달창 on상태
    //show가 없다면 더해주고 true리턴
    body.style.overflow = "hidden"; //body overflow hidden으로 스크롤 못하게
  }
});
//로그인 화면을 누르면
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    //만약 클릭이벤트가 일어나는게 modal이라면
    //스크롤 못하게 막기
    //모달창이 활성화됐다면
    modal.classList.toggle("show"); //없다면 show붙이고 true , 있다면 떼고 false
    if (!modal.classList.contains("show")) {
      body.style.overflow = "auto"; //모달창 off
    }
  }
});
//회원가입 버트 모달창 띄우기
btn_open_popup2.addEventListener("click", () => {
  modal2.classList.toggle("show");
  if (modal2.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
});
modal2.addEventListener("click", (event) => {
  if (event.target === modal2) {
    // class를 이용한 모달 on/off
    modal2.classList.toggle("show");
    if (!modal2.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
});
