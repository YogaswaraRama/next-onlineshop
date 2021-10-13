//
function increment() {
  document.getElementById("numbernya").stepUp();
}
function decrement() {
  document.getElementById("numbernya").stepDown();
}

let hamburger = document.getElementsById("hamburger");
let nav = document.getElementById("navgone");

hamburger.addEventLister("click", () => {
  navgone.classList.toggle("show");
});
