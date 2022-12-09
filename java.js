window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
}

/* Demo purposes only */
$("figure").mouseleave(function () {
  $(this).removeClass("hover");
});
