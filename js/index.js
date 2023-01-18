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

function hiddenAside1() {
  side.classList.toggle("hiddenaside");
}

icon1.addEventListener("click", hiddenAside1);
icon2.addEventListener("click", hiddenAside1);

function clickBtn() {
  title.classList.toggle("hidden");
  btn.classList.toggle("clicked");
}

btn.addEventListener("click", clickBtn);

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

//media
const section = document.querySelector(".section");
const min = window.matchMedia("screen and (min-width: 1001px)");

if (min.matches) {
  console.log(min.matches);
  // section.classList.toggle("maxhidden");
} else {
}
