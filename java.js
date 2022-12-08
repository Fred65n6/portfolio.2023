window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
}

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
