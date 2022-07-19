# Frontend Mentor - Coding bootcamp testimonials slider

![Design preview for the Coding bootcamp testimonials slider coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard



### Links

- Live Site URL: [Live Demo](#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- [GSAP animation library](https://greensock.com/)

### What I Learned

- GSAP Animation lib
```js
function animate_text_img() {
    gsap.fromTo(".card-img", {duration : 1, x:300, ease:'back'}, {duration : 1, x:0, ease:'back'});
    gsap.fromTo(".card-text", {duration : 1, y:-300, ease:'back'}, {duration : 1, y:0, ease:'back'});
}

```




## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@iyoha_osaro](https://www.twitter.com/yourusername)

**Had fun building!** 🚀