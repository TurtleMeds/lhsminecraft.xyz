const images = [
  { src:"bedrock.png", weight: 20 },
  { src:"bricks.png", weight: 10 },
  { src:"chest.gif", weight: 50 },
  { src:"crafting-table.png", weight: 50 },
  { src:"diamond.png", weight: 10 },
  { src:"furnace.png", weight: 20 },
  { src:"glowstone.png", weight: 10 },
  { src:"gold-ore.png", weight: 10 },
  { src:"gold.png", weight: 20 },
  { src:"grass.png", weight: 100 },
  { src:"gravel.png", weight: 70 },
  { src:"missing.png", weight: 1 },
  { src:"oak.png", weight: 80 },
  { src:"obsidian.png", weight: 10 },
  { src:"piston.gif", weight: 10 },
  { src:"piston-sticky.gif", weight: 5 },
  { src:"sand.png", weight: 70 },
  { src:"slime.png", weight: 20 },
  { src:"soul-sand.png", weight: 10 },
  { src:"spruce.png", weight: 80 },
  { src:"tnt.png", weight: 20 },
];

const totalWeight = images.reduce((sum, img) => sum + img.weight, 0);
const imgElem = document.getElementById("image");

function chooseImage() { 
  let random = Math.random() * totalWeight;

  let selected = images[0];
  for (const img of images) {
    if (random < img.weight) {
      selected = img;
      break;
    }
    random -= img.weight;
  }

  imgElem.src = "images/" + selected.src;
}

chooseImage();

imgElem.addEventListener("click", chooseImage);
