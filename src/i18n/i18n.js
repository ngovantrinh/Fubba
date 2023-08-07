import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./language/eng.json";
import Vietnamese from "./language/vie.json";
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    eng: {
        translation: English,
    },
    vie: {
        translation: Vietnamese,
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng: "eng",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;