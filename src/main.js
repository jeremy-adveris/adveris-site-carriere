// import components :
import introAnims from './features/introAnims'
import animateTitles from './features/animateTitles'
import hoverRevealValues from './features/hoverRevealValues'
import scrollPinAwards from './features/scrollPinAwards'
import scrollPinUs from './features/scrollPinUs'
import animateCommitment from './features/animateCommitment'

// import styles :
import './styles/style.css'

// import libs :
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'


// console.log('main.js')
// console.log('local dev')
console.log('production.js')

// run fuctions components :
introAnims();
animateTitles();
hoverRevealValues();
scrollPinAwards();
scrollPinUs();
animateCommitment();

// gsap plugins :
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: '.smooth-wrapper',
  content: '.smooth-content',
  smooth: 1,
  smoothTouch: 0.1,
});


const menuBtn = document.querySelector('.menu-btn');
const menuLines = document.querySelectorAll('.burger-line');
const menuLinks = document.querySelectorAll('.menu-link');

