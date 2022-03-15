document.querySelector(".nav-item-desk-theme").addEventListener("click", function () {
  if (document.body.classList.contains("blue-theme")) {
    document.body.classList.add("pink-theme");
    document.body.classList.remove("blue-theme");
  }
  else (document.body.classList.contains("pink-theme")) {
    document.body.classList.add("blue-theme");
    document.body.classList.remove("pink-theme");
}
});
