import { useTranslation } from 'react-i18next'
import { SubpageShell } from '../components/SubpageShell'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <SubpageShell page="contact">
      <article className="page-article">
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.p1')}</p>
        <p className="contact-email">
          <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
      </article>
    </SubpageShell>
  )
}
