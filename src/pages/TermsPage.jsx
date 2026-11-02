import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SubpageShell } from '../components/SubpageShell'

const SECTIONS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7']

export function TermsPage() {
  const { t } = useTranslation()

  return (
    <SubpageShell page="terms" legal>
      <article className="page-article page-article--legal">
        {SECTIONS.map((id) => (
          <section key={id}>
            <h2>{t(`terms.${id}Title`)}</h2>
            <p>{t(`terms.${id}Body`)}</p>
          </section>
        ))}
        <section>
          <h2>{t('terms.s8Title')}</h2>
          <p>
            <span>{t('terms.s8BeforeEmail')} </span>
            <a className="inline-link" href="mailto:lunai.mobile.app@gmail.com">
              lunai.mobile.app@gmail.com
            </a>
          </p>
        </section>
        <p className="page-article__cross">
          <Link className="inline-link" to="/privacy">
            {t('terms.crossPrivacy')}
          </Link>
        </p>
      </article>
    </SubpageShell>
  )
}
