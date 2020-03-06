import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const Language = ['es', 'en', 'pt']

i18n
    // load translation using xhr -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        
        resources: {
            en: {
                translation: {
                    login: 'Log In',
                    logout: "Log Out",
                    consult_bill: "Check your bill",
                    consult_bill_text: "To check your statement, download or pay your bill...",
                    information: "Information",
                    information_text: "Information about products, services, prices, etc.",
                    pqrs: "Petitions, requests, complaints and claims",
                    pqrs_text: "PQRS section.",
                    spanish: 'Spanish',
                    english: 'English',
                    portuguese: 'Portuguese',
                    language: 'Language',
                    click_here: 'Click here',
                    service_portal: 'Service portal',
                    service_portal_text: "Then the services we offer",
                    products_and_services: "Products and services",
                    prices: "Prices"
                },
            },
            es: {
                translation: {
                    login: 'Iniciar sesión',
                    logout: "Cerrar sesión",
                    consult_bill: "Consulta tu factura",
                    consult_bill_text: "Para consultar tu extrato, descargar o pagar tu factura...",
                    information: "Información",
                    information_text: "Información acerca de nuestros productos, servicios, precios, etc.",
                    pqrs: "Peticiones, solicitudes, quejas y reclamos",
                    pqrs_text: "Sección de PQRS.",
                    spanish: 'Español',
                    english: 'Inglés',
                    portuguese: 'Portugués',
                    language: 'Idioma',
                    click_here: 'Click aquí',
                    service_portal: 'Portal de servicios',
                    service_portal_text: 'A continuación los servicios que ofrecemos',
                    products_and_services: "Productos y servicios",
                    prices: "Precios"
                },
            },
            pt: {
                translation: {
                    login: 'Iniciar sessão',
                    logout: "Fechar sessão",
                    consult_bill: "Verifique sua conta",
                    consult_bill_text: "Para verificar seu extrato, faça o download ou pague sua fatura...",
                    information: "Informação",
                    information_text: "Informações sobre produtos, serviços, preços, etc.",
                    pqrs: "Petições, solicitações, reclamações e reclamações",
                    pqrs_text: "Seção PQRS.",
                    spanish: 'Espanhol',
                    english: 'Inglês',
                    portuguese: 'Português',
                    language: 'Linguagem',
                    click_here: 'Clique aqui',
                    service_portal: 'Portal de serviço',
                    service_portal_text: 'Abaixo dos serviços que oferecemos',
                    products_and_services: "Produtos e serviços",
                    prices: 'Preços'
                },
            },
        },
        fallbackLng: "en",
        debug: true,
        whitelist: Language, 

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            formatSeparator: ","
        },

        react: {
            wait: true
        }
    });


export default i18n;
