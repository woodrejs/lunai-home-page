import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SubpageShell } from '../components/SubpageShell'

export function AboutPage() {
  const { t } = useTranslation()

  return (
    <SubpageShell page="about">
      <article className="page-article">
        <h1>{t('about.title')}</h1>
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>
          <Link className="inline-link" to="/contact">
            {t('about.linkContact')}
          </Link>
        </p>
      </article>
    </SubpageShell>
  )
}
