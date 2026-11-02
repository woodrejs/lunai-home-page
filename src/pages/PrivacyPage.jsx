import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SubpageShell } from '../components/SubpageShell'

export function PrivacyPage() {
  const { t } = useTranslation()

  return (
    <SubpageShell page="privacy" legal>
      <article className="page-article page-article--legal">
        <section>
          <h2>{t('privacy.s1Title')}</h2>
          <p>
            <span>{t('privacy.s1BeforeEmail')} </span>
            <a className="inline-link" href="mailto:lunai.mobile.app@gmail.com">
              lunai.mobile.app@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2>{t('privacy.s2Title')}</h2>
          <p>{t('privacy.s2P1')}</p>
          <p>{t('privacy.s2P2')}</p>
          <p>{t('privacy.s2P3')}</p>
        </section>

        <section>
          <h2>{t('privacy.s3Title')}</h2>
          <p>{t('privacy.s3P1')}</p>
          <p>{t('privacy.s3P2')}</p>
          <p>{t('privacy.s3P3')}</p>
          <p>{t('privacy.s3P4')}</p>
        </section>

        <section>
          <h2>{t('privacy.s4Title')}</h2>
          <p>{t('privacy.s4P1')}</p>
          <p>{t('privacy.s4P2')}</p>
        </section>

        <section>
          <h2>{t('privacy.s5Title')}</h2>
          <p>{t('privacy.s5P1')}</p>
          <p>{t('privacy.s5P2')}</p>
        </section>

        <section>
          <h2>{t('privacy.s6Title')}</h2>
          <p>{t('privacy.s6P1')}</p>
          <p>
            <span>{t('privacy.s6BeforeUodo')}</span>
            <a className="inline-link" href="https://uodo.gov.pl" rel="noopener noreferrer">
              uodo.gov.pl
            </a>
            <span>{t('privacy.s6AfterUodo')} </span>
            <a className="inline-link" href="mailto:lunai.mobile.app@gmail.com">
              lunai.mobile.app@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>{t('privacy.s7Title')}</h2>
          <p>{t('privacy.s7Body')}</p>
        </section>

        <p className="page-article__cross">
          <Link className="inline-link" to="/terms">
            {t('privacy.crossTerms')}
          </Link>
        </p>
      </article>
    </SubpageShell>
  )
}
