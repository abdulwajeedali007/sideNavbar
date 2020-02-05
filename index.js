const btn = document.getElementById("btn__main_home");
const btn_inner = document.getElementById("inner__btn");
const nav = document.getElementById("sideNav");



btn.addEventListener("click", function() {
  nav.classList.add("active");
});

btn_inner.addEventListener("click", function() {
  nav.classList.remove("active");
});
