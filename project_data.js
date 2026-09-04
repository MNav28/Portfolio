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


function showItem() {
    let myItem = projects[1].project_nr

    console.log(myItem)

}
