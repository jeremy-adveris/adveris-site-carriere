import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText);

function animateTitles() {
  // title animation each section :
  const sections = gsap.utils.toArray('.section');
  // console.log(sections)
  sections.forEach((section, index) => {
    const heading = section.querySelector('h2.title-h2');
    // console.log(heading);
    let split = SplitText.create(heading, { type: 'chars' });

    // animation for each heading :
    let animation = gsap.from(split.chars, {
      y: 0,
      opacity: 0,
      stagger: 0.03,
    }, 0);

    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none',
      animation: animation,
      markers: false,
    });
  });
}

export default animateTitles
