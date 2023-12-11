const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = Number(document.querySelector("#weight").value);
  const height = Number(document.querySelector("#height").value);
  const result = document.querySelector("#result");

  if (weight < 0 || weight === "" || isNaN(weight)) {
    result.innerHTML = "<h4>Please Enter Valid Weight</h4>";
  } else if (height < 0 || height === "" || isNaN(height)) {
    result.innerHTML = "<h4>Please Enter Valid Height</h4>";
  } else {
    const bmi = ((weight * 10000) / (height * height)).toFixed(2);
    let category;
    if (bmi < 18.6) {
      category = "Under Weigth";
    } else if (bmi < 24.9) {
      category = "Normal Weigth";
    } else {
      category = "Over Weigth";
    }
    result.innerHTML = `<h3>BMI = ${bmi} which is ${category}</h3>`;
  }
});
