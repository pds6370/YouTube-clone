const icon1 = document.querySelector(".aside-topbar__logobox .fa-bars");
const icon2 = document.querySelector(".top-bar__logobox .fa-bars");
const side = document.querySelector(".aside-bar");
const btn = document.querySelector(".info-title__box .fa-caret-down");
const title = document.querySelector(".info-title__box .info-title");
const viewmore = document.querySelector(".viewmore1");
const sideadd = document.querySelectorAll(".sideadd");
const viewMoreHiddenbox = document.querySelector(".viewMoreHidden-box");
const viewmore2 = document.querySelector(".viewmore2");
const briefAndmore1 = document.querySelector(".viewmore1 .briefAndmore");
const briefAndmore2 = document.querySelector(".viewmore2 .briefAndmore");
const rotate1 = document.querySelector(".viewmore1 .style-scope");
const rotate2 = document.querySelector(".viewmore2 .style-scope");
const sideHidden = "hidden1";
const section = document.querySelector(".section");
// 1000px 이하이면 true 아니면 false
const mediaMin = window.matchMedia("screen and (max-width: 1000px)");
// 3선 클릭 시 사이드 바
window.addEventListener("load", hiddenAsideWidth);
window.addEventListener("resize", hiddenAsideWidth);

// 1000px이하 trasition 부여
function hiddenAsideWidth() {
  console.log(mediaMin.matches);
  if (mediaMin.matches) {
    icon1.addEventListener("click", hiddenAside1);
    icon2.addEventListener("click", hiddenAside1);
    function hiddenAside1() {
      side.classList.toggle("hiddenaside");
      side.style.transition = "transform 0.2s linear";
    }
  } else {
    icon1.addEventListener("click", hiddenAside2);
    icon2.addEventListener("click", hiddenAside2);
    function hiddenAside2() {
      side.classList.toggle("hiddenaside");
      side.style.transition = "none";
    }
  }
}

// 사이드바 더 보기
//2개 같은 class
function clickViewMore() {
  for (let i = 0; i < sideadd.length; i++) {
    sideadd[i].classList.toggle(sideHidden);
    if (sideadd[i].classList.contains(sideHidden)) {
      briefAndmore1.innerText = "더보기";
      rotate1.style.transform = "rotate(360deg)";
    } else {
      briefAndmore1.innerText = "간략히 보기";
      rotate1.style.transform = "rotate(180deg)";
    }
  }
}
briefAndmore1.innerText = "더보기";

viewmore.addEventListener("click", clickViewMore);
//하나의 box로 설정
viewmore2.addEventListener("click", () => {
  viewMoreHiddenbox.classList.toggle(sideHidden);
  if (viewMoreHiddenbox.classList.contains(sideHidden)) {
    briefAndmore2.innerText = "더보기";
    rotate2.style.transform = "rotate(360deg)";
  } else {
    briefAndmore2.innerText = "간략히 보기";
    rotate2.style.transform = "rotate(180deg)";
  }
});
briefAndmore2.innerText = "더보기";

//홈 사이드 미디어쿼리

mediaMin.addEventListener("change", mediaQuery);
window.addEventListener("load", mediaQuery);
// console.log(mediaMin);
// console.dir(side.style);
function mediaQuery() {
  //참*참
  if (side.classList.contains("hiddenaside") && mediaMin.matches == true) {
    side.classList.add("hiddenaside");
    // side.style.transition = "transform 0.2s linear";
    //참*거짓
  } else if (
    side.classList.contains("hiddenaside") &&
    mediaMin.matches == false
  ) {
    side.classList.remove("hiddenaside");
    side.style.transition = "none";
    //
  } else if (
    !side.classList.contains("hiddenaside") &&
    mediaMin.matches == true
  ) {
    side.classList.add("hiddenaside");
  }
  side.style.transition = "none";
}
