import { useLanguage } from '../contexts/LanguageContext'
import { ru } from '../translations/ru'
import { en } from '../translations/en'

const translations = {
  ru,
  en
}

export const useTranslation = () => {
  const { language } = useLanguage()
  const t = translations[language] || translations.ru

  return { t, language }
}

