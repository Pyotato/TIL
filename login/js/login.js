const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const btn_open_popup1 = document.querySelector(".btn_open_popup1");
const btn_open_popup2 = document.querySelector(".btn_open_popup2");
const id_input = document.getElementById("id_input");
const pwd_input = document.getElementById("pwd_input");
const loginbtn = document.getElementById("loginbtn");
const checkBox = document.getElementById("checkBox");

function clearIdPwd() {
  id_input.value = ""; //아이디 비워주기
  id_input.innerHTML = id_input.value;
  pwd_input.value = ""; //비밀번호 비워주기
  pwd_input.innerHTML = pwd_input.value;
}
function clearPwd() {
  pwd_input.value = ""; //비밀번호 비워주기
  pwd_input.innerHTML = pwd_input.value;
}

//로그인 버트 모달창 띄우기
btn_open_popup1.addEventListener("click", () => {
  modal.classList.toggle("show"); //false로 만들어주기
  //매번 모달창 띄울때마다 아이디 비번 자리 비워주기
  clearPwd();
  if (checkBox.checked == true) {
    //아이디저장이 체크돼있다면
  } else {
    clearIdPwd();
  }

  if (loginbtn == true) {
    //로그인버튼을 눌렀을때 로그인 상태라면 로그아웃으로 버튼 표기
    document.getElementById("login").innerHTML = "로그아웃";
  } else {
    document.getElementById("login").innerHTML = "로그인";
  }
  //클래스중에서 show가 있다면 강제로 떼버리고 false리턴
  //show가 없다면 더해주고 true리턴
  //   if (document.getElementById("login").innerHTML == "로그아웃") {
  //     document.getElementById("login").innerHTML = "로그인";
  //   } else {
  //     document.getElementById("login").innerHTML = "로그아웃";
  //   }
  if (modal.classList.contains("show")) {
    id_input.innerHTML = id_input.value;
    if (checkBox.checked == true) {
      //만약체크가 되있다면 그대로(아이디저장)
    } else {
      clearIdPwd(); //false라면 둘다 비워주기
    }
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
// btn_open_popup2.addEventListener("click", () => {
//   modal2.classList.toggle("show");
//   if (modal2.classList.contains("show")) {
//     body.style.overflow = "hidden";
//   }
// });
// modal2.addEventListener("click", (event) => {
//   if (event.target === modal2) {
//     // class를 이용한 모달 on/off
//     modal2.classList.toggle("show");
//     if (!modal2.classList.contains("show")) {
//       body.style.overflow = "auto";
//     }
//   }
// });

loginbtn.addEventListener("click", () => {
  if (id_input.value == "") {
    //아이디 입력 안했을 때
    alert("아이디를 입력해주세요");
    id_input.focus();
    document.getElementById("login").innerHTML = "로그인";
    return false;
  } else {
    if (pwd_input.value == "") {
      //비번 입력 안했을 떄
      alert("비밀번호를 입력해주세요");
      pwd_input.focus();
      document.getElementById("login").innerHTML = "로그인";
      return false;
    } else if (id_input.value != "admin" || pwd_input.value != "1234") {
      alert("아이디와 비밀번호가 일치하지 않습니다."); //임의 아이디만 가능하게 만들어줌
    } else if (id_input.value == "admin" && pwd_input.value == "1234") {
      alert(`${id_input.value}님 안녕하세요.`); //실제 데이터가 없기때문에 임의로 아이디를 만들어줌
      document.getElementById("login").innerHTML = "로그아웃";

      modal.classList.toggle("show"); //로그아웃하면 모달창 자동 닫히기
      return true;
    }
  }
});

checkBox.addEventListener("click", () => {
  if (checkBox.checked === true) {
    // 아이디 저장은 로그인 성공했으면 가능하도록
    console.log("아이디 저장");
    id_input.innerHTML = id_input.value; //입력값을 html에 유지
    console.log(id_input.value);
  } else {
    console.log("아이디 저장 안함");
    clearIdPwd(); //html에 모두 클리어
  }
});
