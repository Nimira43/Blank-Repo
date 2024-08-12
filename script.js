let circle1 = document.querySelector('.circle-1')
let circle2 = document.querySelector('.circle-2')

window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY
  circle1.computedStyleMap.clipPath = `circle(${150 + scrollValue * 0.75})`
})