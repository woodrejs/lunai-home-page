import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from '../components/LanguageSwitch'
import { usePageMeta } from '../usePageMeta'
import logo from '../../assets/icons/logo.png'
import shot from '../../assets/images/Shot.png'
import shot1 from '../../assets/images/Shot-1.png'
import shot2 from '../../assets/images/Shot-2.png'
import shot3 from '../../assets/images/Shot-3.png'

const APP_STORE_URL = 'https://apps.apple.com/us/app/lunai-dream-interpretation-ai/id6766067326'

export function HomePage() {
  const { t } = useTranslation()
  usePageMeta('home')

  return (
    <>
      <a className="skip-link" href="#main">
        {t('common.skipToContent')}
      </a>

      <header className="top-nav" role="banner">
        <div className="top-nav__inner">
          <Link className="brand" to="/" aria-label={t('common.brandHome')}>
            <BrandMark />
            <span className="brand__name">Lunai</span>
          </Link>
          <div className="top-nav__end">
            <nav className="top-nav__links" aria-label={t('common.navPage')}>
              <a href="#features">{t('home.navFeatures')}</a>
              <a href="#download">{t('home.navDownload')}</a>
            </nav>
            <LanguageSwitch />
          </div>
        </div>
      </header>

      <main id="main">
        <div className="hero-wrap" id="download">
          <div className="hero-wrap__gradient" aria-hidden="true" />
          <div className="container hero">
            <p className="pill pill--hero">
              <span className="pill__dot pill__dot--amber" aria-hidden="true" />
              <span>{t('home.pillVersion')}</span>
            </p>

            <h1 className="hero__title">
              <span className="hero__title-row">
                <span className="hero__title-sans">{t('home.heroTitleSans')}</span>
                <span className="hero__title-serif">{t('home.heroTitleSerif')}</span>
              </span>
            </h1>

            <p className="hero__lede" >{t('home.heroLede')}</p>

            <div className="store-row" >
              <a
                className="store-btn"
                href={APP_STORE_URL}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={t('home.storeAppStoreAria')}
              >
                <span className="store-btn__icon" aria-hidden="true">
                  <svg className="store-btn__svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                    />
                  </svg>
                </span>
                <span className="store-btn__text">
                  <span className="store-btn__label">{t('home.storeLabel')}</span>
                  <span className="store-btn__name">App Store</span>
                </span>
              </a>
              {/* TEMPORARY: Google Play — remove class store-btn--google-play from CSS when link is ready */}
              <a className="store-btn store-btn--google-play" href="#" aria-label={t('home.storePlayAria')}>
                <span className="store-btn__icon" aria-hidden="true">
                  <svg className="store-btn__svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="m17.6 9.48 1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52M7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25"
                    />
                  </svg>
                </span>
                <span className="store-btn__text">
                  <span className="store-btn__label">{t('home.storeLabel')}</span>
                  <span className="store-btn__name">Google Play</span>
                </span>
              </a>
            </div>

            <div className="hero-device">
              <img src={shot} alt={t('home.heroScreenshotAlt')} loading="eager" decoding="async" />
            </div>
          </div>
        </div>

        <section className="features" id="features" aria-labelledby="features-heading">
          <div className="container features__inner">
            <div className="features__intro">
              <p className="pill pill--section">
                <span className="pill__dot pill__dot--blue" aria-hidden="true" />
                <span>{t('home.featuresPill')}</span>
              </p>
              <h2 className="features__title" id="features-heading">
                <span className="features__title-row">
                  <span className="features__title-sans">{t('home.featuresTitleSans')}</span>
                  <span className="features__title-serif">{t('home.featuresTitleSerif')}</span>
                </span>
              </h2>
              <p className="features__subtitle">{t('home.featuresSubtitle')}</p>
            </div>

            <div className="feature-grid">
              <FeatureCard
                glow="blue"
                icon="indigo"
                title={t('home.featureJournalTitle')}
                description={t('home.featureJournalDesc')}
                image={shot3}
                iconSvg={<BookIcon />}
              />
              <FeatureCard
                glow="amber"
                icon="amber"
                title={t('home.featurePatternTitle')}
                description={t('home.featurePatternDesc')}
                image={shot1}
                iconSvg={<SunIcon />}
              />
              <FeatureCard
                glow="sky"
                icon="sky"
                title={t('home.featureAiTitle')}
                description={t('home.featureAiDesc')}
                image={shot2}
                iconSvg={<DropIcon />}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__left">
            <Link className="brand brand--footer" to="/" aria-label={t('common.brandHome')}>
              <BrandMark />
              <span className="brand__name">Lunai</span>
            </Link>
            <p className="site-footer__copy">{t('common.footerCopy')}</p>
          </div>
          <div className="site-footer__links">
            <Link to="/terms">{t('common.termsOfUse')}</Link>
            <Link to="/privacy">{t('common.privacyPolicy')}</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

function BrandMark() {
  return (
    <span className="brand__mark" aria-hidden="true">
      <img className="brand__logo" src={logo} width="226" height="286" alt="" decoding="async" />
    </span>
  )
}

function FeatureCard({ glow, icon, title, description, image, iconSvg }) {
  return (
    <article className="feature-card">
      <div className={`feature-card__glow feature-card__glow--${glow}`} aria-hidden="true" />
      <div className={`feature-card__icon feature-card__icon--${icon}`}>{iconSvg}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{description}</p>
      <div className="feature-card__shot">
        <img src={image} alt="" width="270" height="266" loading="lazy" decoding="async" />
      </div>
    </article>
  )
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="23" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v1m0 16v1M4.2 4.2l.7.7m14.2 14.2l.7.7M3 12h1m16 0h1M4.2 19.8l.7-.7M18.1 5.1l.7-.7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  )
}

function DropIcon() {
  return (
    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" aria-hidden="true">
      <path
        d="M7.5 1C4.5 6 2 9.5 2 13a5.5 5.5 0 0 0 11 0c0-3.5-2.5-7-5.5-12Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
