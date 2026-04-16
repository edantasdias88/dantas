// main.js

import './theme.js'
import './i18n.js'
import './hero.js'
import './cases.js'

const scrollContainer = document.querySelector('.solutions_scroll')
const dragCursor = document.querySelector('.drag-cursor')

let isDown = false
let startX
let scrollLeft

if (scrollContainer) {

  const track = scrollContainer.querySelector('.solutions_track')
  const card = scrollContainer.querySelector('.solutions_card')

  // 🔥 pega o gap real do CSS
  const styles = window.getComputedStyle(track)
  const gap = parseInt(styles.gap) || 0

  const cardWidth = card.offsetWidth + gap

  // 🔥 CURSOR - mostrar / esconder
  if (dragCursor) {
    scrollContainer.addEventListener('mouseenter', () => {
      dragCursor.style.opacity = '1'
    })

    scrollContainer.addEventListener('mouseleave', () => {
      dragCursor.style.opacity = '0'
    })
  }

  // 🔥 DRAG START
  scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true
    scrollContainer.classList.add('is-dragging')

    startX = e.pageX - scrollContainer.offsetLeft
    scrollLeft = scrollContainer.scrollLeft

    if (dragCursor) {
      dragCursor.style.transform = 'translate(-50%, -50%) scale(0.9)'
    }
  })

  // 🔥 SNAP (com final alinhado)
  function snapToCard() {
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

    let index = Math.round(scrollContainer.scrollLeft / cardWidth)
    let target = index * cardWidth

    if (target > maxScroll) {
      target = maxScroll
    }

    scrollContainer.scrollTo({
      left: target,
      behavior: 'smooth'
    })
  }

  // 🔥 DRAG END
  scrollContainer.addEventListener('mouseup', () => {
    isDown = false
    scrollContainer.classList.remove('is-dragging')

    snapToCard()

    if (dragCursor) {
      dragCursor.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  })

  scrollContainer.addEventListener('mouseleave', () => {
    if (isDown) snapToCard()

    isDown = false
    scrollContainer.classList.remove('is-dragging')

    if (dragCursor) {
      dragCursor.style.opacity = '0'
      dragCursor.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  })

  // 🔥 DRAG MOVE
  scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()

    const x = e.pageX - scrollContainer.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainer.scrollLeft = scrollLeft - walk
  })
}

// 🔥 CURSOR SEGUE O MOUSE
if (dragCursor) {
  window.addEventListener('mousemove', (e) => {
    dragCursor.style.top = `${e.clientY}px`
    dragCursor.style.left = `${e.clientX}px`
  })
}


// ========================================
// 🔥 PROCESS (ACCORDION CARDS)
// ========================================

const processCards = document.querySelectorAll('.process-card')

if (processCards.length) {

  processCards.forEach(card => {
    card.addEventListener('click', () => {

      // se já estiver ativo, não faz nada
      if (card.classList.contains('active')) return

      // remove active de todos
      processCards.forEach(c => c.classList.remove('active'))

      // ativa o clicado
      card.classList.add('active')

    })
  })

}