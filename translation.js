let currentLanguage = "en";

const translations = {
    en: {
        nav: {
            about: "About me",
            projects: "Projects"
        },
        hero: {
            title: "Frontend Developer",
            work: "Check my work",
            contact: "Contact me"
        }
    },

    de: {
        nav: {
            about: "Über mich",
            projects: "Projekte"
        },
        hero: {
            title: "Frontend Entwickler",
            work: "Meine Projekte",
            contact: "Kontaktieren"
        }
    }
};

function changeLanguage(language) {
    currentLanguage = language;

    translatePage();
}

function translatePage() {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.dataset.i18n;

        element.textContent = getTranslation(key);
    });
}

function getTranslation(key) {
    let translation = translations[currentLanguage];
    const keys = key.split(".");

     for (const property of keys) {
         translation = translation[property];
    }
    
    return translation;
}





