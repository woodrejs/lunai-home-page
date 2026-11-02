import { useTranslation } from 'react-i18next'

export function LanguageSwitch() {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage === 'pl' ? 'pl' : 'en'

  return (
    <div className="lang-switch" role="group" aria-label={t('common.language')}>
      <button type="button" aria-pressed={current === 'en'} onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
      <button type="button" aria-pressed={current === 'pl'} onClick={() => i18n.changeLanguage('pl')}>
        PL
      </button>
    </div>
  )
}
