import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText);

function introAnims() {
  // Intro animation
  // gsap.set('.banner-content .title-h1, .banner-content .subtitle', {
  gsap.set('.banner-content .subtitle', {
    y: 32,
    opacity: 0,
  })

  gsap.set('.banner-content .wrapper-img > img', {
    opacity: 0,
    y: gsap.utils.random(100, 50),
  })

  const tlIntro = gsap.timeline();


  // tlIntro.to('.banner-content .title-h1, .banner-content .subtitle', {
  tlIntro.to('.banner-content .subtitle', {
    y: 0,
    opacity: 1,
    duration: 2,
    stagger: 0.01,
    ease: 'power4.out',
  }).to('.banner-content .wrapper-img > img', {
    y: 0,
    opacity: 1,
    duration: 2,
    stagger: 0.04,
    ease: 'power3.out',
  }, .5);

  // Images scroll trigger animation
  const introImages = [...document.querySelectorAll('.banner-content .wrapper-img > img')];
  const tlImages = gsap.timeline({
    scrollTrigger: {
      trigger: '.banner-content',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      markers: false,
    },
  });

  introImages.forEach(image => {
    tlImages.to(image, {
      ease: 'none',
      yPercent: gsap.utils.random(-200, -50),
    }, 0)
  });


  // animate title h1 intro :
  const titleH1 = document.querySelector('.banner-content .title-h1');

  let split = SplitText.create(titleH1, { type: 'chars' });

  gsap.set(titleH1, {
    opacity: 1,
  });

  gsap.set(split.chars, {
    y: 32,
    opacity: 0,
  });

  let introH1 = gsap.timeline().to(split.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.04,
    // ease: 'power3.out',
  }, 0.5);
}

export default introAnims;