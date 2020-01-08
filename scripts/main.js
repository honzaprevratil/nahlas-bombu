window.onload = function () {
  const dialog = document.getElementById("dialog");
  const button = document.getElementById("button");

  button.onclick = function () {
    dialog.classList.add("visible");
  };

  dialog.onclick = function () {
    dialog.classList.remove("visible");
  };

  const vse = document.getElementById("school-vse");
  const cvut = document.getElementById("school-cvut");

  vse.onclick = function () {
    cvut.classList.remove("selected");
    vse.classList.add("selected");
  };

  cvut.onclick = function () {
    vse.classList.remove("selected");
    cvut.classList.add("selected");
  };
};
