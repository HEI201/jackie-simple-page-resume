let infoSec = document.querySelector(".info")
let transY, scrollInfoId;
transY = 0;
const intervalTime = 1000;
const translateYSteps = 20;
let slideUp = () => {
  transY += translateYSteps;
  if (infoSec.offsetHeight < transY) {
    infoSec.style.transform = `translateY(-${infoSec.offsetHeight}px)`;
    transY = 0;
  }
  infoSec.style.transform = `translateY(-${transY}px)`;
}
scrollInfoId = setInterval(() => {
  slideUp();
}, intervalTime);

infoSec.addEventListener('mouseover', function (event) {
  clearInterval(scrollInfoId);
});
infoSec.addEventListener('mouseleave', function (event) {
  scrollInfoId = setInterval(() => {
    slideUp();
  }, intervalTime);
});