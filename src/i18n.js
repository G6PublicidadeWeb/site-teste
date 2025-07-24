import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt_BR from "./translations/pt-BR/locale.json";
import en from "./translations/en/locale.json";
import zh_Hans from "./translations/zh-Hans/locale.json";

const resources = {
  "pt-BR": {
    translation: pt_BR,
  },
  "en": {
    translation: en,
  },
  "zh-Hans": {
    translation: zh_Hans,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt-BR",
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lang) => {
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
});

let lang = localStorage.getItem("lang");
lang = lang ? lang : "pt-BR";
i18n.changeLanguage(lang);

export default i18n;
