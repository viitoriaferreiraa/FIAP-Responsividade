const $header = document.getElementById("header");
const $navigationHeader = document.getElementById("navigation-header");
const $content = document.getElementById("content");
let showSidebar = false;

const $btn = document.getElementById("button");

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    $navigationHeader.style.marginLeft = "-2vw";
    $navigationHeader.style.animationName = "showSidebar";
    $content.style.filter = "blur(2px)";
  } else {
    $navigationHeader.style.marginLeft = "";
    $navigationHeader.style.animationName = "";
    $content.style.filter = "";
  }
}

function closeSidebar() {
  if (showSidebar) {
    toggleSidebar();
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 1008 && showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});
