import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          title: "Travel Information",
          country: "Country / Organization",
          Name: "Full Name",
          arDate: "Arrival  Date",
          button: "Submit",
          arFlight: "Arrival Flight N°",
          lfightComing: "Flight coming from (City and Country)",
          depDat: "Departure  Date and Time",
          depFlight: "Departure Flight N°",
        },
      },
      ar: {
        translation: {
          title: "معلومات عن الرحلة",
          country: "الدولة / المنظمة",
          Name: "الاسم الكامل",
          arDate: "تاريخ و ساعة الوصول",
          button: "إرسال",
          arFlight: "رقم الرحلة",
          lfightComing: "الرحلة القادمة من (المدينة والبلد)",
          depDat: " تاريخ و ساعة المغادرة",
          depFlight: "رقم الرحلة",
        },
      },
      fr: {
        translation: {
          title: "Informations sur le vol",
          country: "Pays / Organisation",
          Name: "Nom complet",
          arDate: "Date d’arrivée",
          button: "Envoyer",
          arFlight: "N° de vol",
          lfightComing: "Vol en provenance de (ville et pays)",
          depDat: "Date de départ",
          depFlight: "N° de vol",
        },
      },
    },
    lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      order: ["path"],
      cached: ["cookie"],
    },
  });

export default i18n;
