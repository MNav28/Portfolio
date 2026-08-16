const projects = [
    {
        id: "join",
        project_nr: "01",
        title: "Join",
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
