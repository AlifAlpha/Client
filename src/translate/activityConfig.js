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
          title:
            "Information Form on ICESCO’s upcoming Programmes & Activities ",
          activityName: "Activity Name",
          date: "Date",
          venue: "Venue",
          format: "Format",
          facetoface: "Face to face",
          virtual: "Virtual",
          organizingParties: "Organizing parties",
          workinglanguages: "Working languages",
          arabic: "Arabic",
          french: "French",
          english: "English",
          simultaneousInterpretation: "Simultaneous Interpretation",
          yes: "Yes",
          no: "No",
          tequiredActionFromTheCommission:
            "Required action from the Commission",
          virtualParticipationOfTheCommission:
            "Virtual participation of the Commission",
          suggestionOfParticipants:
            "Suggestion of participants (face to face or virutally)",
          disseminationAmongConcernedParties:
            "Dissemination among concerned parties",
          contactParty: "Contact Party",
          email: "Email",
          mobile: "Mobile",
          attachments: "Attachments",
          workingPaper: "Working paper",
          agenda: "Agenda",
          programme: "Program",
          ZoomLink: "Zoom link",
          meetingpassword: "Zoom passcode",
          error: "required information",
          button: "Submit",
        },
      },
      ar: {
        translation: {
          title: `استمارة إخبارية بشأن البرامج والأنشطة المقبلة`,
          activityName: "اسم النشاط",
          date: "الزمان",
          venue: "المكان",
          format: "التنظيم",
          facetoface: "حضوري",
          virtual: "عن بعد",
          organizingParties: "الجهات المنظمة",
          workinglanguages: "لغات العمل",
          arabic: "العربية",
          french: "الفرنسية",
          english: "الانجليزية",
          simultaneousInterpretation: "الترجمة الفورية",
          yes: "نعم",
          no: "لا",
          tequiredActionFromTheCommission: "المطلوب من اللجنة",
          virtualParticipationOfTheCommission: "مشاركة اللجنة  عن بعد",
          suggestionOfParticipants: "اقتراح مشاركين حضورياً أو عن بعد",
          disseminationAmongConcernedParties: "تعميمها على الجهات المختصة",
          contactParty: "جهة التواصل",
          email: "البريد الإلكتروني",
          mobile: "الجوال",
          attachments: "المرفقات",
          workingPaper: "ورقة العمل",
          agenda: "جدول الأعمال",
          programme: "البرنامج الزمني",
          ZoomLink: "رابط زووم",
          meetingpassword: "رمز المرور زوم",
          error: "معلومة  إلزامية",
          button: "إرسال",
        },
      },
      fr: {
        translation: {
          title:
            "Formulaire d’information  Concernant les prochains programmes et activités de l’ICESCO",
          activityName: "Nom de l’Activité ",
          date: "Date",
          venue: "Lieu",
          format: "Organisation",
          facetoface: "Présentielle",
          virtual: "A distance",
          organizingParties: "Parties organisatrices",
          workinglanguages: "Langues de travail",
          arabic: "Arabe",
          french: "Francais",
          english: "Anglais",
          simultaneousInterpretation: "Interprétariat",
          yes: "Oui",
          no: "Non",
          tequiredActionFromTheCommission: "Action requise de la commission",
          virtualParticipationOfTheCommission:
            "Participation de la Commission à distance",
          suggestionOfParticipants:
            "Proposition de participants (présentiel ou à distance)",
          disseminationAmongConcernedParties:
            "Diffusion parmi les parties compétentes",
          contactParty: "Partie de contact",
          email: "Email",
          mobile: "Mobile",
          attachments: "Pièces jointes",
          workingPaper: "Document de travail",
          agenda: "Agenda",
          programme: "Programme",
          ZoomLink: "Lien Zoom",
          meetingpassword: "Zoom passcode",
          error: "information required",
          button: "Envoyer",
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
