const themer_btn = document.getElementById("themer");
function themeFunction(event) {
  event.preventDefault();
  if (document.body.classList.contains("pink-theme")) {
    document.body.classList.remove("pink-theme");
    document.body.classList.add("blue-theme");
  } else {
    document.body.classList.remove("blue-theme");
    document.body.classList.add("pink-theme");
  }
  console.log("hello");
}
themer_btn.addEventListener("click", themeFunction);
