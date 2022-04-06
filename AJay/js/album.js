export default function makeAlbum(albumBox) {
  const album = document.querySelector(albumBox);

  album.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() !== "img") {
      return;
    }
    if (e.target.parentNode.className === "o-album_imgFrame") {
      return;
    }
    if (album.lastElementChild.tagName.toLowerCase() === "div") {
      album.removeChild(album.lastElementChild);
    }

    const imgFrame = document.createElement("div");
    imgFrame.classList.add("o-album_imgFrame");

    const closeBtn = document.createElement("span");
    closeBtn.textContent = "x";
    closeBtn.classList.add("o-album_closeBtn");
    closeBtn.addEventListener("click", () => {
      album.removeChild(album.lastElementChild);
    });

    const img = document.createElement("img");
    img.src = e.target.src;

    imgFrame.appendChild(img);
    imgFrame.appendChild(closeBtn);

    album.appendChild(imgFrame);
  });
}
