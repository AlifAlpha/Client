import i18n from "i18next";import { initReactI18next } from "react-i18next";
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
          programme: "Programme",
          ZoomLink: "zoomLink",
        },
      },
      ar: {
        translation: {
          title: `استمارة إخبارية بشأن البرامج والأنشطة المقبلة`,
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
            "uggestion of  participants (face to face or virutally)",
          disseminationAmongConcernedParties:
            "Dissemination among concerned parties",
          contactParty: "Contact Party",
          email: "Email",
          mobile: "Mobile",
          attachments: "Attachments",
          workingPaper: "Working paper",
          agenda: "Agenda",
          programme: "Programme",
          ZoomLink: "zoomLink",
        },
      },
      fr: {
        translation: {
          title:
            "Formulaire d’information  Concernant les prochains programmes et activités de l’ICESCO",
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
            "uggestion of  participants (face to face or virutally)",
          disseminationAmongConcernedParties:
            "Dissemination among concerned parties",
          contactParty: "Contact Party",
          email: "Email",
          mobile: "Mobile",
          attachments: "Attachments",
          workingPaper: "Working paper",
          agenda: "Agenda",
          programme: "Programme",
          ZoomLink: "ZoomLink",
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
