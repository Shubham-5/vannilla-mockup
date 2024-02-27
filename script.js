const radioButtons = document.querySelectorAll('input[type="radio"]');
const innerContainer = document.querySelectorAll(".plan-inner-container");

radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    innerContainer.forEach((detail) => (detail.style.display = "none"));
    if (radio.checked) {
      innerContainer[index].style.display = "block";
    }
  });
});
