import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger);

function scrollPinUs() {
  // Pin section us :
  const usItems = document.querySelectorAll(".us-item");
  const Imgs = [...document.querySelectorAll('.list-us .wrapper-img > img')];
  const tlImages = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-us',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      markers: false,
    },
  });

  Imgs.forEach(image => {
    tlImages.to(image, {
      ease: 'none',
      yPercent: gsap.utils.random(-200, -50),
    }, 0)
  });

  // gsap.set('.us-item', {
  //   opacity: 0,
  // });

  gsap.to('.us-item', {
    opacity: 1,
    y: 0,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".list-us",
      pin: true,
      markers: false,
      scrub: 1,
      start: "top top",
      end: "bottom top",
      snap: {
        snapTo: 0.33,
        duration: { min: 0.1, max: 0.4 },
        ease: "power1.inOut"
      }
    }
  }, 0);
}

export default scrollPinUs;