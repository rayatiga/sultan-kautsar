// Dynamic main height to 100vh
const main = document.querySelector('main')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
window.addEventListener('resize', () => {
  main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
})

// Popover trigger
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))
popoverTriggerList.forEach((popoverTriggerEl) => {
  popoverTriggerEl.style.cursor = 'pointer'
})
