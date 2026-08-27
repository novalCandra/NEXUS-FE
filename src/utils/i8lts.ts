import i8n from "i18next";
import { initReactI18next } from "react-i18next";

i8n.use(initReactI18next).init({
    resources: {
        en: {
            translastion: {
                navbar: {
                    fitur: "FEATURES", pekerjaan: "HOW IT WORKS", manister: "MANIFESTOR",
                    register: "Sign in",
                    login: "Get Started"
                },
                hero: {
                    header: "Make room for better thingking.",
                    hearderButton: "The Second Brain for Real Time",
                    description: "ViraOliv brings your notes, tasks, and time into one beautifully simple place — so the next right thing is always easier to see.",
                    buttonOne : "Get Started",
                    buttonTwo : "See how it work"
                }
            }
        }
    }
})


export default i8n;