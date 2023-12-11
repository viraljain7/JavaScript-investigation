const colorBtn = document.querySelectorAll(".cir-Btn");
const colorChanger = document.querySelector(".color_Changer");

colorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
       colorChanger.style.backgroundColor = e.target.id;
  });
});
