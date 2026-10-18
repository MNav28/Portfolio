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
        },
        banner: {
            title: "Frontend Developer",
            location: "Based in München",
            available: "Available for remote work",
            status: "Open to work"
        },
        info: {
            title: "Who i am",
            aboutMe: "About me",
            motivation: "I'm Michael, a Frontend Developer based in Munich, passionate about turning ideas into modern, intuitive, and functional web applications. What I particularly enjoy is the combination of creative design and technical implementation bringing individual components together to create a cohesive digital experience.",
            location: "I'm based in Munich and flexible when it comes to working arrangements. Whether in the office, hybrid, or remotely, I'm open to different ways of working and look forward to collaborating with a dedicated team.",
            interest: "Web development is constantly evolving, and that's one of the things I find most exciting about it. I'm curious about new technologies and concepts and continuously work on expanding my skills to build modern and maintainable solutions.",
            approach: "When facing a challenge, I take a structured and solution-oriented approach. I analyze the problem, break it down into smaller steps, and explore different approaches until I find a clean and efficient solution. Analytical thinking, creativity, and persistence help me along the way.",
        },
        skill: {
            title: "Technologies",
            description: "I have a solid knowledge of modern frontend technologies and use them to build responsive, well-structured, and user-friendly web applications. I value clean code, clear structures, and a good user experience. As web development is constantly evolving, continuous learning is an essential part of my work. I'm open to new frameworks, tools, and technologies and continuously strive to expand and deepen my skills.",
            text1: "Do you need another",
            text2: "skill?",
            contact: "Feel free to contact me. I look forward to expanding on my previous knowledge.",
            talk: "Let's talk",
        },
        project: {
            title: "Featured Projects",
            description: "Explore a selection of my work here - interact with projects to see my skills in action.",
        },
        feedback: {
            title: "What my colleagues say about me",
        },
        contact: {
            title: "Contact me",
            h2: "Lets's work together",
            problemSolve: "Got a problem to solve?",
            content: "I'm always open to new opportunities and exciting projects where I can contribute my skills as a Frontend Developer. Whether you're looking to build a new website, improve an existing application, or have a problem that needs a solution, I'd be happy to hear from you. Let's talk about your ideas and see how I can contribute to your project. Feel free to get in touch. I'm looking forward to hearing from you! ",
            question: "Do you need a Frontend Developer?",
            questionHighlight: "Let's talk!",
            formName: "What's your name",
            formEmail: "What's your email?",
            formMessage: "How can I help you?",
            formNamePlaceholder: "Enter your name",
            formMessagePlaceholder: "Hello Michael, I am interested in ...",
            privacyStart: "I've read the",
            privacyLink:"privacy policy",
            privacyEnd: "and agree to the processing of my data as outlined",
            errorName: "Oops! it seems like your name is missing.",
            errorEmail: "Oops! Your email address is required.",
            errorMessage: "What do you need to develope?",
            submit: "Say Hello ;)"
        },
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
        },
        banner: {
            title: "Frontend Entwickler",
            location: "Komme aus München",
            available: "Verfügbar für Remote",
            status: "Offen für Arbeit"
        },
        info: {
            title: "Wer ich bin",
            aboutMe: "Über mich",
            motivation: "Ich bin Michael, Frontend Entwickler aus München und begeistere mich dafür, Ideen in moderne, intuitive und funktionale Webanwendungen zu verwandeln. Besonders spannend finde ich die Verbindung aus kreativem Design und technischer Umsetzung aus einzelnen Komponenten ein stimmiges digitales Erlebnis zu entwickeln.",
            location: "Ich lebe in München und bin flexibel, wenn es um die Zusammenarbeit geht. Ob im Büro, hybrid oder remote, ich bin offen für unterschiedliche Arbeitsmodelle und freue mich auf die Zusammenarbeit in einem engagierten Team.",
            interest: "Die Webentwicklung entwickelt sich ständig weiter, genau das macht sie für mich besonders spannend. Ich bin neugierig auf neue Technologien und Konzepte und möchte meine Fähigkeiten kontinuierlich erweitern, um moderne und nachhaltige Lösungen entwickeln zu können.",
            approach: "Bei Herausforderungen gehe ich strukturiert und lösungsorientiert vor. Ich analysiere ein Problem, zerlege es in kleinere Schritte und probiere unterschiedliche Ansätze aus, bis ich eine saubere und effiziente Lösung gefunden habe. Dabei helfen mir analytisches Denken, Kreativität und Ausdauer.",
        },
        skill: {
            title: "Technologien",
            description: "Ich verfüge über fundierte Kenntnisse in modernen Frontend Technologien und setze diese ein, um responsive, strukturierte und benutzerfreundliche Webanwendungen zu entwickeln. Dabei lege ich Wert auf sauberen Code, klare Strukturen und eine gute Benutzerfreundlichkeit. Da sich die Webentwicklung ständig weiterentwickelt, ist kontinuierliches Lernen für mich ein fester Bestandteil meiner Arbeit. Ich bin offen für neue Frameworks, Tools und Technologien und möchte meine Skills kontinuierlich erweitern und vertiefen.",
            text1: "Brauchst du noch eine",
            text2: "Fähigkeit?",
            contact: "Kontaktiere mich gerne. Ich freue mich darauf, mein Wissen weiter auszubauen.",
            talk: "Lass uns reden",
        },
        project: {
            title: "Ausgewählte Projekte",
            description: "Entdecke hier eine Auswahl meiner Arbeiten und interagiere mit den Projekten, um meine Fähigkeiten in der Praxis zu sehen.",
        },
        feedback: {
            title: "Was Kollegen über mich sagen",
        },
        contact: {
            title: "Kontaktiere mich",
            h2: "Lass uns zusammenarbeiten",
            problemSolve: "Gibt es ein Problem zu lösen?",
            content: "Ich bin immer offen für neue Möglichkeiten und spannende Projekte, bei denen ich meine Fähigkeiten als Frontend-Entwickler einbringen kann. Egal, ob du eine neue Website entwickeln, eine bestehende Anwendung verbessern oder eine Herausforderung lösen möchtest - ich freue mich darauf, von dir zu hören. Lass uns über deine Ideen sprechen und gemeinsam herausfinden, wie ich dein Projekt unterstützen kann. Schreib mir gerne - ich freue mich auf deine Nachricht!",
            question: "Brauchen Sie einen Frontend-Entwickler?",
            questionHighlight: "Lass uns reden!",
            formName: "Wie ist dein Name?",
            formEmail: "Wie ist deine Email?",
            formMessage: "Wie kann ich dir helfen?",
            formNamePlaceholder: "Gib deinen Namen ein",
            formMessagePlaceholder: "Hallo Michael, ich interessiere mich für ...",
            privacyStart: "Ich habe die",
            privacyLink:"Datenschutzerklärung",
            privacyEnd: "gelesen und stimme der Verarbeitung meiner Daten gemäß dieser zu",
            errorName: "Oops! Es scheint, als würde dein Name fehlen.",
            errorEmail: "Oops! Deine Email-Adresse wird benötigt.",
            errorMessage: "Was möchtest du entwickeln?",
            submit: "Los geht's ;)"
        },

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

    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");

    placeholderElements.forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = getTranslation(key);
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





