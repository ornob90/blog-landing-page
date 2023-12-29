const menu = document.getElementById("menu");

let menuOpen = false;

const handleOpenMenu = () => {
  menu.classList.remove("-top-[100%]", "left-0");
  menu.classList.add("top-0", "left-0");
  menuOpen = true;
};

const handleCloseMenu = () => {
  menu.classList.remove("top-0", "left-0");
  menu.classList.add("-top-[100%]", "left-0");
  menuOpen = false;
};
