import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from './LanguageSwitch'
import { usePageMeta } from '../usePageMeta'

export function SubpageShell({ page, legal = false, children }) {
  const { t } = useTranslation()
  usePageMeta(page)

  return (
    <div className={legal ? 'shell shell--legal' : 'shell'}>
      <a className="skip-link" href="#main">
        {t('common.skipToContent')}
      </a>
      <header className="site-header">
        <NavLink className="logo" to="/">
          Lunai
        </NavLink>
        <div className="site-header__end">
          <nav className="site-nav" aria-label={t('common.navMain')}>
            <NavLink to="/" end>
              {t('common.home')}
            </NavLink>
            {legal ? (
              <>
                <NavLink to="/terms">{t('common.termsOfUse')}</NavLink>
                <NavLink to="/privacy">{t('common.privacyPolicy')}</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/about">{t('common.about')}</NavLink>
                <NavLink to="/contact">{t('common.contact')}</NavLink>
              </>
            )}
          </nav>
          <LanguageSwitch />
        </div>
      </header>
      <main id="main" className="main">
        {children}
      </main>
      <footer className="site-footer">
        <span>{t('common.footerBrand')}</span>
      </footer>
    </div>
  )
}
