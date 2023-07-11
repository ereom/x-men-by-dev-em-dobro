const chars = document.querySelectorAll(".char");

chars.forEach((char) => {
  char.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    removeSelected();
    char.classList.add("selected");

    changeImgPickedChar(char);

    changeNameChar(char);

    changeCharDescription(char);
  });
});
function changeCharDescription(char) {
  const charDescription = document.getElementById("description");
  charDescription.innerText = char.getAttribute("data-description");
}

function changeNameChar(char) {
  const charName = document.getElementById("char-name");
  charName.innerText = char.getAttribute("data-name");
}

function changeImgPickedChar(char) {
  const fullArt = document.querySelector(".full-art");
  const idChar = char.attributes.id.value;
  fullArt.src = `./src/imagens/card-${idChar}.png`;
}

function removeSelected() {
  const charSelected = document.querySelector(".selected");
  charSelected.classList.remove("selected");
}
