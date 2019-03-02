let rangeLists = document.querySelectorAll('.range')

rangeLists.forEach(function (element) {
  let R = Math.random() * 255
  let G = Math.random() * 255
  let B = Math.random() * 255
  setInterval(() => {
    R += Math.random() * 6
    G += Math.random() * 6
    B += Math.random() * 6
    if (R > 255) {
      R = Math.random() * 255
    }
    if (G > 255) {
      G = Math.random() * 255
    }
    if (B > 255) {
      B = Math.random() * 255
    }
    element.style.backgroundColor = `rgb(${R},${G},${B})`
  }, 200);
});

let infoSec = document.querySelector(".info")
let transY, scrollInfoId;
transY = 0
let slideUp = () => {
  transY += 20
  if (infoSec.offsetHeight < transY) {
    // clearInterval(scrollInfoId)
    infoSec.style.transform = `translateY(-${infoSec.offsetHeight}px)`
    transY = 0
  }
  infoSec.style.transform = `translateY(-${transY}px)`
}
scrollInfoId = setInterval(() => {
  slideUp()
}, 600);

infoSec.addEventListener('mouseenter', function (event) {
  clearInterval(scrollInfoId)
})
infoSec.addEventListener('mouseleave', function (event) {
  scrollInfoId = setInterval(() => {
    slideUp()
  }, 600);
})