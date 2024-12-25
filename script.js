const halfCircle = document.querySelectorAll(".half-circle");
const halfCircleTop = document.querySelector(".half-circle-top");

const progressBarCircle = document.querySelector(".progressbar-circle");

document.addEventListener("scroll", () => {
  const pageViewPortHieght = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const scrolledPortion = window.pageYOffset;

  const scrolledPortionDegree =
    (scrolledPortion / (pageHeight - pageViewPortHieght)) * 360;

  const scrolledPortionPercentage = Math.floor(
    (scrolledPortionDegree / 360) * 100
  );

  progressBarCircle.textContent = `${scrolledPortionPercentage}%`;

  halfCircle.forEach((el) => {
    el.style.transform = `rotate(${scrolledPortionDegree}deg)`;

    if (scrolledPortionDegree >= 180) {
      halfCircle[0].style.transform = "rotate(180deg)";
      halfCircleTop.style.opacity = "0";
    } else {
      halfCircleTop.style.opacity = "1";
    }
  });
});
