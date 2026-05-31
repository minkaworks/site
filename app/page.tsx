import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const locales = ['es', 'en'] as const

function getLocaleFromAcceptLanguage(value: string | null) {
  if (!value) {
    return 'es'
  }

  const preferred = value
    .split(',')
    .map((entry) => {
      const [tag, qValue] = entry.trim().split(';q=')
      return {
        tag: tag.toLowerCase(),
        q: qValue ? Number(qValue) : 1,
      }
    })
    .filter(({ tag }) => tag)
    .sort((a, b) => b.q - a.q)

  for (const { tag } of preferred) {
    const language = tag.split('-')[0]

    if (language === 'en') {
      return 'en'
    }

    if (language === 'es') {
      return 'es'
    }
  }

  return 'es'
}

export default async function Home() {
  const acceptLanguage = (await headers()).get('accept-language')
  const locale = getLocaleFromAcceptLanguage(acceptLanguage)

  redirect(`/${locale}`)
}
