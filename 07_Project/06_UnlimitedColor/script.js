const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
let bgChangerId;

const bgRandomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
};
const changeBg = () => {
  if (!bgChangerId) {
    bgChangerId = setInterval(bgRandomColor, 1500);
  }
};

const fixBg = () => {
  clearInterval(bgChangerId);
  bgChangerId = null;
};

start.addEventListener("click", changeBg);
stop.addEventListener("click", fixBg);
