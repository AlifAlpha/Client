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
            "Leadership Training in Peace and Security 2022 Edition  ONLINE APPLICATION FORM ",
          info1: "Candidate’s information",
          firstname: "First name",
          lastname: "Last name",
          birth: "Date of Birth",
          nationalityn: "Nationality",
          residence: "Residence",
          sex: "Gender",
          man: "Male",
          women: "Female",
          phone: "Personal Phone",
          email: "Personal Email",
          language: "Languages",
          arabic: "Arabic",
          french: "French",
          english: "English",
          info2: "Candidacy objective",
          certificates: "Education level",
          reason: "Candidacy objective",
          reasoninfo:
            "Explain why you apply for the LTIPS program (maximum 500 words)  ",
          experience: "experience",
          experienceinfo: "List your work/volunteer experience",
          leadershipcredentials: "leadership credentials",
          leadershipcredentialsinfo:
            "List the local and international organizations where you have membership, the awards you have obtained, the initiatives or projects you have been involved in",
          info3: "Reference",
          recommandName: "Recommander's name",
          recommandTitle: "Recommander's title",
          recommandPhone: "Recommander's phone",
          recommandEmail: "Recommander's Email",
          attr: "Attachments",
          attrinfo: " (PDF files only - 15 Mo maximum)",
          attr5: "Curriculum Vitae",
          attr1: "Identification document",
          attr2: "Degree/diploma",
          attr3: "Proof of leadership and civil society commitment",
          attr4: "Any documents that can help assess your leadership skills",
          attr6:
            "I hereby confirm that I have read the Concept note and Code of Conduct and will abide by it if I am selected in the program",
          button: "Submit",
          attrError: "Please submit the required data",
          link1: "LTIPS Concept note",
          link2: "LTIPS Code of Conduct",
        },
      },
      ar: {
        translation: {
          title:
            "برنامج التدريب على القيادة من أجل السلام والأمن دورة 2022 استمارة الترشيح الالكترونية",
          info1: "بيانات المترشح",
          firstname: "الاسم الاول",
          lastname: "اللقب",
          birth: "تاريخ الازدياد",
          nationalityn: "الجنسية",
          residence: "مكان الإقامة",
          sex: "النوع",
          man: "ذكر",
          women: "أنثى",
          phone: "الهاتف الشخصي",
          email: "البريد الإلكتروني الشخصي",
          language: "اللغات",
          arabic: "العربية",
          french: "الفرنسية",
          english: "الانجليزية",
          info2: "دوافع المشاركة",
          certificates: "الشهادات",
          reason: "دوافع المشاركة",
          reasoninfo:
            "اُذكر الأسباب التي دفعتك إلى الترشح في هذا البرنامج (500 كلمة على الأكثر)",
          experience: "الخبرة",
          experienceinfo: "اُذكر خبراتك المهنية والتطوعية",
          leadershipcredentials: "الإثباتات القيادية",
          leadershipcredentialsinfo:
            "اُذكر المنظمات المحلية أو الدولية التي كنت عضوا فيها، أو الجوائز التي حصلت عليها أو المبادرات والمشاريع التي شاركت فيها",
          info3: "الأشخاص المرجعيون",
          recommandName: "الاسم",
          recommandTitle: "الوظيفة",
          recommandPhone: "الهاتف",
          recommandEmail: "البريد الالكتروني",
          attr: "المرفقات ",
          attrinfo: "( فقط بي دي إف 15 ميغا كحد أقصى)",
          attr5: "السيرة الذاتية",
          attr1: "وثائق التعريف",
          attr2: "المؤهلات العلمية",
          attr3: "وثائق تثبت الالتزام القيادي والانخراط في المجتمع المدني",
          attr4: "وثائق أخرى تمكن من تقييم المهارات القيادية",
          attr6:
            "قِرّ بموجب هذه الوثيقة أنني اطلعت على الورقة المفاهيمية لهذا البرنامج والقانون المنظم له، كما أؤكد التزامي بمضامينهما في حال تم انتقائي",
          button: "إرسال",
          attrError: "الرجاء تقديم البيانات المطلوبة",
          link1:
            "الورقة المفاهيمية لبرنامج التدريب على القيادة من أجل السلام والأمن",
          link2:
            "القانون المنظم لبرنامج التدريب على القيادة من أجل السلام والأمن",
        },
      },
      fr: {
        translation: {
          title:
            "Formation en leadership pour la paix et la sécurité Édition 2022 Formulaire de candidature en ligne",
          info1: "Informations du candidat",
          firstname: "prénom",
          lastname: "Nom",
          birth: "Date de naissance",
          nationalityn: "Nationalité",
          residence: "Lieu de résidence",
          sex: "Genre",
          man: "Homme",
          women: "Femme",
          phone: "Téléphone personnel",
          email: "Courriel personnel",
          languages: "Langues",
          arabic: "Arabe",
          french: "Français",
          english: "Anglais",
          info2: "Objectif de la candidature",
          certificates: "Niveau de scolarité",
          reason: "Objectif de la candidature",
          reasoninfo:
            "Veuillez expliquer la raison pour laquelle vous postulez pour le Programme LTIPS (500 mots maximum)",
          experience: "Expérience",
          experienceinfo:
            "Veuillez indiquer votre expérience professionnelle ou bénévole",
          leadershipcredentials: "Références en matière de leadership",
          leadershipcredentialsinfo:
            "Veuillez citer les organisations locales et internationales dont vous êtes membre, les prix que vous avez obtenus, les initiatives ou les projets auxquels vous avez participé",
          info3: "Référence",
          recommandName: "Nom et prénom",
          recommandTitle: "Titre",
          recommandPhone: "Numéro de téléphone",
          recommandEmail: "Courriel",
          attr: " Pièces jointes",
          attrinfo: "(Fichiers PDF uniquement - 15 Mo maximum)",
          attr5: "Curriculum Vitae",
          attr1: "Documents d’identité",
          attr2: "Diplômes ou certificats universitaires",
          attr3: "Preuve de leadership et d’engagement dans la société civile",
          attr4:
            "Tout document pouvant aider à évaluer vos compétences en matière de leadership",
          attr6:
            "I hereby confirm that I have read the Concept note and Code of Conduct and will abide by it if I am selected in the program",
          button: "Envoyer",
          attrError: "Veuillez soumettre les données requises",
          link1: "Note conceptuelle du Programme LTIPS",
          link2: "Code d’engagement du Programme LTIPS",
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
