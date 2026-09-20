const projects = [
    {
        id: "join",
        project_nr: "01",
        title: "Join",
        github: "https://github.com/MNav28/Join",
        liveTest: "https://mnav28.github.io/Join/",
        description: "A task manager inspired by the Kanban system: create and organize tasks using drag-and-drop functionality, assign users, and categorize tasks.",
        image: "./assets/img/join_.svg",
        tech: [
            {
                image: './assets/icons/html_.svg',
                name: 'HTML'
            },
            {
                image: './assets/icons/css_.svg',
                name: 'CSS'
            },
            {
                image: './assets/icons/Javascript_.svg',
                name: 'JavaScript'
            },
            {
                image: './assets/icons/firebase_.svg',
                name: 'Firebase'
            }
        ]
    },
    {
        id: "pollo-loco",
        project_nr: "02",
        title: "Pollo Loco",
        github: "https://github.com/MNav28/el_pollo_loco",
        liveTest: "https://mnav28.github.io/el_pollo_loco/",
        description: "A task manager inspired by the Kanban system: create and organize tasks using drag-and-drop functionality, assign users, and categorize tasks.",
        image: "./assets/img/polloloco.svg",
        tech: [
            {
                image: './assets/icons/html_.svg',
                name: 'HTML'
            },
            {
                image: './assets/icons/css_.svg',
                name: 'CSS'
            },
            {
                image: './assets/icons/Javascript_.svg',
                name: 'JavaScript'
            }
        ]
    }
];


const feedbackCards = [
    {
        id: "1",
        feedback: {
            de: `Michael ist ein zuverlässiger und engagierter Teamkollege, auf den man sich jederzeit verlassen kann. Er bringt sich aktiv in die Zusammenarbeit ein und unterstützt andere, wenn es darauf ankommt. Durch seine ruhige und offene Art ist die Zusammenarbeit mit ihm sehr angenehm.`,
            en: `Michael is a reliable and committed team member who can always be counted on. He actively contributes to the team and is always willing to support others when needed. His calm and open-minded approach makes working with him a great experience.`
        },
        name: "K. Mustermann",
        relation: {
            de: "Vater",
            en: "Dad",
        },
    },
    {
        id: "2",
        feedback: {
            de: `Michael geht auch komplexe Aufgaben strukturiert an und verliert dabei nicht den Überblick. Er probiert verschiedene Lösungswege aus und gibt nicht auf, wenn etwas nicht auf Anhieb funktioniert. Besonders seine Ausdauer und sein analytisches Denken zeichnen ihn aus.`,
            en: `Michael approaches complex tasks in a structured way without losing sight of the bigger picture. He explores different approaches and doesn't give up when things don't work out right away. His persistence and analytical thinking really stand out.`
        },
        name: "T. Schulz",
        relation: {
            de: "Kollege",
            en: "Collegue",
        },
    },
    {
        id: "3",
        feedback: {
            de: `Michael zeigt eine hohe Lernbereitschaft und arbeitet sich schnell in neue Themen und Technologien ein. Er wartet nicht darauf, dass ihm Lösungen vorgegeben werden, sondern sucht selbstständig nach Möglichkeiten, Probleme zu lösen und seine Kenntnisse weiterzuentwickeln.`,
            en: `Michael is highly motivated to learn and quickly gets up to speed with new topics and technologies. He takes initiative, looks for solutions independently, and is always willing to expand his knowledge and improve his skills.`
        },
        name: "T. Meier",
        relation: {
            de: "Nachbar",
            en: "Neighbour",
        },
    },
    {
        id: "4",
        feedback: {
            de: `Die Zusammenarbeit mit Michael ist unkompliziert und konstruktiv. Er kommuniziert offen, bringt eigene Ideen ein und ist gleichzeitig immer bereit, andere Ansätze anzunehmen. Dadurch trägt er zu einer positiven und produktiven Teamatmosphäre bei.`,
            en: `Working with Michael is straightforward and constructive. He communicates openly, contributes his own ideas, and is always willing to consider different approaches. His positive attitude contributes to a productive and enjoyable team environment.`
        },
        name: "C. Alcaraz",
        relation: {
            de: "Bruder",
            en: "Brother",
        },
    }

]