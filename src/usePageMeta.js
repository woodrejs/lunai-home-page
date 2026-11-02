import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function usePageMeta(page) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t(`meta.${page}.title`)
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t(`meta.${page}.description`))
  }, [page, t, i18n.language])
}
