const menu = document.querySelector(".menu-toggle"),
  nav = document.querySelector("#primary-navigation");
function closeMenu() {
  menu?.setAttribute("aria-expanded", "false");
  nav?.classList.remove("open");
}
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});
nav?.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav?.classList.contains("open")) {
    closeMenu();
    menu.focus();
  }
});
matchMedia("(max-width:1100px)").addEventListener("change", closeMenu);
// Videos are non-interactive: no right-click menu over them (pointer-events:none
// sends the click to the figure, so suppress it there too).
document.addEventListener("contextmenu", (e) => {
  if (e.target.closest?.(".video-media")) e.preventDefault();
});
