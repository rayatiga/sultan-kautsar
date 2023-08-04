// get scroll to top button with id attribute
let scrollTopButton = document.getElementById('scrollTopButton')
// if scroll to top button exist in the page
if (scrollTopButton) {
  // show scroll top button when window is on scroll
  window.onscroll = function () {
    scrollTopButtonShow()
  }
  function scrollTopButtonShow() {
    // check if there are scroll top button exist in the page
    if (scrollTopButton) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // show scroll to top button when scrolling 20px from top of the page
        scrollTopButton.style.opacity = '1'
      } else {
        // hide scroll to top button when window below 20px from top of the page
        scrollTopButton.style.opacity = '0'
      }
    }
  }
  function scrollTopButtonAction() {
    // if button clicked then window will be scrolled to the top of the page or 0px
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
