/* Adicionei a janela, o evento do scroll e removi do body a chamada do evento*/
window.addEventListener('scroll', onScroll)

/*Eu preciso executar uma única vez a função para o body reconhecer a função na minha janela (window)*/
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButton()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  scrollY > 0
    ? navigation.classList.add('scroll')
    : navigation.classList.remove('scroll')
}

function showBackToTopButton() {
  scrollY > 500
    ? backToTopButton.classList.add('show')
    : backToTopButton.classList.remove('show')
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //Verificar se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //Verificar se a base da seção está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove("active")
  sectionBoundaries ? menuElement.classList.add("active") : menuElement.classList.remove("active")
}

const openMenu = () => document.body.classList.add('menu-expanded')
const closeMenu = () => document.body.classList.remove('menu-expanded')

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
