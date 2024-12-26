document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      header.style.backgroundImage =
        "url('https://e1.pxfuel.com/desktop-wallpaper/735/788/desktop-wallpaper-little-santa-claus-widescreen-high-christmas-1920x1080.jpg')";
      header.style.padding = "10px";
      header.style.margin = "0px";
      header.style.position = "sticky";
      header.style.transition = "1.5s all";
    } else {
      header.style.backgroundImage = "";
      header.style.position = "static";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");

  footer.style.backgroundImage =
    "url('https://www.shutterstock.com/image-vector/snow-hill-tree-covered-header-260nw-2226714535.jpg')";
  footer.style.backgroundSize = "1400px";
  footer.style.image.Width = "2000px";
  footer.style.height = "45vh";
});

const input = document.getElementById("headerInput");
const inp = document.getElementById("inp");
input.addEventListener("click", () => {
  inp.style.width = "150px";
  inp.style.borderRadius = "20px";
  inp.style.paddingLeft = "20px";
  inp.style.border = "black";
  inp.style.background = "white";
});

const data = [
  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.niDMhc8pVdqFpqRdalSgJAHaHa&pid=Api&P=0&h=220",
    name: "Wine Bottle",
    price: 125.0,
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.7Y6SM5regyLZWDch67mNUgHaHa&pid=Api&P=0&h=220",
    name: "Santa bag",
    price: 155.0,
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.7Rk9VO1RWujUMcFT3MrXYAHaHa&pid=Api&P=0&h=220",
    name: "Santa Cup",
    price: 235.0,
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/7128KfbmbdL._AC_UL1500_.jpg",
    name: "Foot Gloves",
    price: 60.0,
  },
  {
    image:
      "https://tse4.mm.bing.net/th?id=OIP.9UpuxKWu1BiBkL-rimBPPAHaHa&pid=Api&P=0&h=220",
    name: "Door Decating",
    price: 115.0,
  },
  {
    image:
      "https://tse3.mm.bing.net/th?id=OIP.a8genAwYZQ9T13aSPJpX0QHaFj&pid=Api&P=0&h=220",
    name: "tree Candie",
    price: 200.0,
  },
  {
    image:
      "https://tse2.mm.bing.net/th?id=OIP.3ZUjcicUDpyLzZQZTYIB2wHaG8&pid=Api&P=0&h=220",
    name: "Santa",
    price: 150.0,
  },
  {
    image:
      "https://i.pinimg.com/originals/3c/d8/d5/3cd8d589c4bb3f81ce8a832bff166e51.png",
    name: "Decrotion Light",
    price: 120.0,
  },
];

const cardsContainer = document.getElementById("container");

data.forEach((item) => {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardName = document.createElement("h4");
  const price = document.createElement("span");

  cardImage.src = item.image;
  cardName.textContent = item.name;
  price.textContent = item.price + "$";

  card.appendChild(cardImage);
  card.appendChild(cardName);
  card.append(price);

  cardsContainer.appendChild(card);

  card.classList.add("card");
});

const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = "white";
const snowflakes = [];

const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.pointerEvents = "none";
canvas.style.top = "0px";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5, // next
});

const drawSnowflake = (snowflake) => {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = snowflake.color;
  ctx.fill();
  ctx.closePath();
};

const updateSnowflake = (snowflake) => {
  snowflake.y += snowflake.speed;
  snowflake.x += snowflake.sway; // next
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake());
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
};

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  snowflakes.push(createSnowflake());
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("scroll", () => {
  canvas.style.top = `${window.scrollY}px`;
});

// setInterval(animate, 15);
animate();

const letterImg = document.getElementById("letterImg");
const letter = document.getElementById("letter");
letterImg.addEventListener("click", () => {
  letterImg.style.display = "none";
  letterImg.style.transition = "0.5s all";
  letter.style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.getElementById("arrow");

  window.addEventListener("scroll", () => {
    console.log("scrolled");
    if (window.scrollY > 500) {
      arrow.style.transform = "translateX(0)";
    } else {
      arrow.style.transform = "translateX(-100px)";
    }
  });
});
