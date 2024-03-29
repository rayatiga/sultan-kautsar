/* File: main.js */
/* Default: Scroll to Top */
document.body.insertAdjacentHTML("beforeend", '<button class="btn bg-body border position-fixed shadow-sm" id="scroll-to-top" style="bottom: 56px; right: 12px;" title="Scroll to Top"><i class="bi bi-arrow-up"></i></button>');
const scrollTopBtn = document.getElementById("scroll-to-top");
scrollTopBtn.style.display = "none";
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 128) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
/* Default: Email Button */
document.body.insertAdjacentHTML("beforeend", `<button class="btn bg-body border position-fixed shadow-sm" onclick="emailButton()" data-bs-title="Email Me" data-bs-toggle="tooltip" style="bottom: 12px; right: 12px;" title="Email Me"><i class="bi bi-envelope-at"></i></button>`);
/* Default: Function Email Button */
function emailButton() {
  window.open("mailto:contact@sultankautsar.com");
}
/* Framework: Bootstrap: Popover */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
popoverTriggerList.forEach((popoverTriggerEl) => {
  popoverTriggerEl.style.cursor = "pointer";
});
/* Framework: Bootstrap: Tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
