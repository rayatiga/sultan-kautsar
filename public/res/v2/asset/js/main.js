let scrollTopButton = document.getElementById('scrollTopButton')
if (scrollTopButton) {
  window.onscroll = function () {
    scrollTopButtonShow()
  }
  function scrollTopButtonShow() {
    if (scrollTopButton) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.opacity = '1'
      } else {
        scrollTopButton.style.opacity = '0'
      }
    }
  }
  function scrollTopButtonAction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
