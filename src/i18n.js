import { createI18n } from "vue-i18n";

import en from "@/locales/en.json"
import ru from "@/locales/ru.json"
import kz from "@/locales/kz.json"

const messages = {en, ru, kz}

const savedLanguage = localStorage.getItem('language') || 'en'

const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: 'en',
    messages
})

export default i18n