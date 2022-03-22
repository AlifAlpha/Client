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
          /** participation */
          titlep:
            "12 th Conference of Ministers of Culture In the Islamic World",
          fullName: "Full Name (as in passport)",
          datePlacebirth: "Date and Place of birth",
          nationality: "Nationality",
          occupation: "Occupation",
          countryp: "Country",
          Address: "Address",
          telOffice: "Tel.(Office)",
          telMobile: "Tel. (Mobile)",
          emailOffice: "Email (Office)",
          emailPersonal: "Email (Personal)",
          category: "Category :",
          headDelegation: "Head of Delegation",
          memberDelegation: "Member of Delegation",
          ITfocalpoint: "IT focal point",
          Organisation: "Organisation",
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

          /** participation */
          titlep: "المؤتمر الثاني عشر لوزراء الثقافة في العالم الإسلامي",
          fullName: "الاسم الكامل (كما في جواز السفر) بالعربية و باللاتينية",
          datePlacebirth: "تاريخ و مكان الازدياد",
          nationality: "الجنسية",
          occupation: "المنصب",
          countryp: "البلد",
          Address: "لعنوان البريدي",
          telOffice: "هاتف العمل",
          telMobile: "المحمول (الجوال)",
          emailOffice: "البريد الإلكتروني الوظيفي",
          emailPersonal: "البريد الإلكتروني الشخصي",
          category: "الصفة (ضع علامة X)",
          headDelegation: "رئيس الوفد",
          memberDelegation: "عضو الوفد",
          ITfocalpoint: "ضابط الاتصال",
          Organisation: "المنظمة",

          /** Nomination */
          titln: "برنامج المهنيين الشباب",
          info1: "المعلومات الشخصية",
          firstname: "الاسم",
          lastname: "اللقب",
          birth: "تاريخ الميلاد",
          nationalityn: "الجنسية",
          residence: "بلد الإقامة",
          sex: "الجنس",
          man: "ذكر",
          women: "أنثى",
          phone: "رقم الهاتف(مع اضافة الرمز الدولي)",
          email: "البريد الالكتروني",

          info2: "المستوى التعليمي وخبرات التدريب",

          certificates: "ماهي الشهائد العلمية التي حصلت عليها",
          reason: "اذكر سبب ترشحك لهذا البرنامج",
          reasoninfo: "بما لا يقل عن 100 كلمة ولا يزيد عن 150",
          experience: "اذكر الخبرات المتصلة باختصاصات المنظمة التي تمتلكها",
          experienceinfo: "ما لا يزيد عن 150 كلمة ",

          info3: "التزكيات",
          recommandName: "اسم المزكي",
          recommandPhone: "هاتف المزكي",
          recommandEmail: "البريد الالكتروني للمزكي",

          attr: "المرفقات المطلوبة",
          attr1: "اخر شهادة جامعية أو ما يعادلها ",
          attr2: "صورة لجواز السفر/البطاقة الشخصية",
          attr3: "السيرة الذاتية",
          attr4: "أهم شهادات التدريب والخبرة إن وجدت",
          attr5: "رسالة تزكية من مشرف العمل/الدراسة",
          attrError: "الرجاء إضافة المرفق",
          info4: `أقر بأن جميع المعلومات التي ذكرتها في الاستمارة صحيحة ودقيقة
أتحمل كامل المسؤولية القانونية عن صحة الوثائق المرفقة و دقتها
`,
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
          /** participation */
          titlep:
            "12 -ème Conférence des ministres de la Culture dans le monde islamique",

          fullName: "Nom complet (tel qu’il apparaît sur le passeport)",
          datePlacebirth: "Date et Lieu de naissance",
          nationality: "Nationalité",
          occupation: "Profession",
          countryp: "Pays",
          Address: "Adresse",
          telOffice: "Tél. Bureau",
          telMobile: "Tél. mobile",
          emailOffice: "Email bureau",
          emailPersonal: "Email Personnel",
          category: "Catégorie (cocher la case correspondante)",
          headDelegation: "Chef de délégation",
          memberDelegation: "Membre de délégation",
          ITfocalpoint: "IT Contact",
          Organisation: "Organisation",
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
