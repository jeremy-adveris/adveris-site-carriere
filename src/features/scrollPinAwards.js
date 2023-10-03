import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function scrollPinAwards() {
  // section awwards :
  const content = document.querySelector(".content-awards");

  function getScrollAmount() {
    let contentWidth = content.scrollWidth;
    // console.log(contentWidth);
    return -(contentWidth - window.innerWidth);
  }

  const tween = gsap.to(content, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".container-awards",
    start: "top top",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: false,
  });
}

export default scrollPinAwards