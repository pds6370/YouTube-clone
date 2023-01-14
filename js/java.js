const icon1 = document.querySelector(".aside-topbar__logobox .fa-bars");
const icon2 = document.querySelector(".top-bar__logobox .fa-bars");
const side = document.querySelector(".aside-bar");
const btn = document.querySelector(".info-title__box .fa-caret-down");
const title = document.querySelector(".info-title__box .info-title");

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
