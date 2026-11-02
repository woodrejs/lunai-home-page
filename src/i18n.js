import i18next from 'i18next'
import en from './locales/en.json'
import pl from './locales/pl.json'

const STORAGE_KEY = 'lunai-lang'
const SUPPORTED = ['en', 'pl']

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED.includes(stored)) return stored
  } catch {
    /* ignore */
  }
  const browser = navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('pl') ? 'pl' : 'en'
}

function getPageId() {
  return document.body.dataset.page ?? 'home'
}

function applyTranslations() {
  const t = i18next.t.bind(i18next)

  document.documentElement.lang = i18next.language

  const page = getPageId()
  const titleKey = `meta.${page}.title`
  const descKey = `meta.${page}.description`
  if (i18next.exists(titleKey)) {
    document.title = t(titleKey)
  }
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc && i18next.exists(descKey)) {
    metaDesc.setAttribute('content', t(descKey))
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (key) el.textContent = t(key)
  })

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label')
    if (key) el.setAttribute('aria-label', t(key))
  })

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt')
    if (key) el.setAttribute('alt', t(key))
  })

  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    const lang = btn.getAttribute('data-lang')
    btn.setAttribute('aria-pressed', lang === i18next.language ? 'true' : 'false')
  })
}

function bindLanguageSwitcher() {
  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang')
      if (!lang || !SUPPORTED.includes(lang) || lang === i18next.language) return
      try {
        localStorage.setItem(STORAGE_KEY, lang)
      } catch {
        /* ignore */
      }
      i18next.changeLanguage(lang).then(() => {
        applyTranslations()
      })
    })
  })
}

export async function initI18n() {
  try {
    await i18next.init({
      lng: getInitialLanguage(),
      fallbackLng: 'en',
      resources: {
        en: { translation: en },
        pl: { translation: pl },
      },
    })

    applyTranslations()
    bindLanguageSwitcher()
  } finally {
    document.documentElement.classList.add('i18n-ready')
  }
}
