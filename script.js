
const nameEl = document.getElementById("product-name");
const descEl = document.getElementById("product-description");
const imageEl = document.getElementById("product-image");
const sizeSelect = document.getElementById("size-select");
const colorSelect = document.getElementById("color-select");

// Carica i dati
nameEl.textContent = tshirtProduct.name;
descEl.textContent = tshirtProduct.description;
imageEl.src = tshirtProduct.baseImage;

// Taglie
tshirtProduct.sizes.forEach(size => {
  const option = document.createElement("option");
  option.textContent = size;
  option.value = size;
  sizeSelect.appendChild(option);
});

// Colori
tshirtProduct.colors.forEach((color, index) => {
  const option = document.createElement("option");
  option.textContent = color.name;
  option.value = index;
  colorSelect.appendChild(option);
});

// Cambia immagine al cambio colore
colorSelect.addEventListener("change", e => {
  const selected = tshirtProduct.colors[e.target.value];
  imageEl.src = selected.image;
});
