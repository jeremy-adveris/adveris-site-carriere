// import gsap from 'gsap'

function hoverRevealValues() {
  // section-values hover img reveal
  const link = document.querySelectorAll('.value-item')
  const linkHoverReveal = document.querySelectorAll('.hover-reveal')
  const linkImages = document.querySelectorAll('.hidden-img')

  for (let i = 0; i < link.length; i++) {
    linkHoverReveal[i].style.display = `flex`

    link[i].addEventListener('mousemove', (e) => {
      linkHoverReveal[i].style.height = `220px`
      linkHoverReveal[i].style.opacity = 1
      // linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`
      linkHoverReveal[i].style.transform = `translate(-50%, -50% )`
      linkImages[i].style.transform = 'scale(1, 1)'
      // linkHoverReveal[i].style.left = e.clientX + 'px'
    })

    link[i].addEventListener('mouseleave', (e) => {
      linkHoverReveal[i].style.height = `0`
      linkHoverReveal[i].style.opacity = 0
      // linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
      linkHoverReveal[i].style.transform = `translate(-50%, -50%)`
      linkImages[i].style.transform = 'scale(0.8, 0.8)'
    })
  }
}

export default hoverRevealValues
