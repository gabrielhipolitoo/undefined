// class SmoothScroll {
//   constructor(links) {
//     this.linksElement = document.querySelectorAll(links)
//     this.addClickEvent()
//   }

//   handleClick(event) {
//     event.preventDefault()
//     const href = event.currentTarget.getAttribute('href')
//     const section = document.querySelector(href)
//     console.log(section.offsetTop)
//     window.scrollTo({
//       top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
//       behavior: 'smooth',
//     })
//   }
//   addClickEvent() {
//     this.linksElement.forEach((link) => {
//       link.addEventListener('click', this.handleClick)
//     })
//   }
// }

// class ActiveSmoothScroll extends SmoothScroll {
//   constructor(links, section) {
//     super(links)

//     this.sectionElement = document.querySelectorAll(section)
//     this.handleScroll = this.handleScroll.bind(this)
//     this.activeNavScroll()
//   }

//   handleScroll(event) {
//     this.sectionElement.forEach((section, i) => {
//       if (window.pageYOffset > section.offsetTop) {
//         this.linksElement[i].classList.toggle('active')
//       }
//     })
//     console.log('ativou')
//   }

//   activeNavScroll() {
//     window.addEventListener('scroll', this.handleScroll)
//   }
// }

// const scroll = new ActiveSmoothScroll('a[href^="#"]', 'section')
