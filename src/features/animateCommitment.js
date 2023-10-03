import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText);

function animateCommitment() {

  const section = gsap.utils.toArray('.section-commitment');
  const titleH2 = document.querySelector('.section-commitment .title-big-bold');
  console.log(titleH2);
  console.log(section);
  let split = SplitText.create(titleH2, { type: 'chars' });

  gsap.set(titleH2, {
    opacity: 1,
  });

  gsap.set(split.chars, {
    y: 32,
    opacity: 0,
  });

  const animation = gsap.timeline().to(split.chars, {
    y: 0,
    opacity: 1,
    stagger: 0.04,
    // ease: 'power3.out',
  }, 0.5);

  ScrollTrigger.create({
    trigger: section,
    start: 'top 70%',
    toggleActions: 'play none none',
    animation: animation,
    markers: false,
  });


}

export default animateCommitment
