import './style.css'
import { initI18n } from './i18n.js'

/** Store buttons: SVG paths inlined from @mui/icons-material (Apple, Android). */

initI18n()

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href')?.slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})
