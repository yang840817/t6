export default function makeTogglerMove(togglerIcon) {
  const menuIcon = document.querySelector(togglerIcon);
  menuIcon.addEventListener("click", function () {
    this.classList.toggle("-active");
  });
}
