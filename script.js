const projectNames = document.querySelectorAll('.single-project-name');

projectNames.forEach(project => {
    project.addEventListener('mouseenter', showProjectImage);
    project.addEventListener('mouseleave', hideProjectImage);
});

function showProjectImage(event) {
    const projectName = event.currentTarget.dataset.project;
    const matchingImage = getProjectImage(projectName);

    matchingImage.classList.remove('d-none');
}

function hideProjectImage(event) {
    const projectName = event.currentTarget.dataset.project;
    const matchingImage = getProjectImage(projectName);

    matchingImage.classList.add('d-none');
}

function getProjectImage(projectName) {
    return document.querySelector(
        `.project-image[data-project="${projectName}"]`
    );
}

function openProjectPopup(projectId) {
    let selectedProject;
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].id === projectId) {
            selectedProject = projects[i];
            break;
        }
    }

    if (!selectedProject) {
        return;
    }

    renderPopupTemplate(selectedProject);
    const overlay = document.getElementById('project-overlay');
    overlay.classList.remove('d-none');
}

function renderPopupTemplate(selectedProject) {
    let content = document.getElementById('popup-content');
    content.innerHTML = /*html*/ `
        <div class="popup-wrapper">
            <div class="popup-left-container">
                <h2>${selectedProject.project_nr}</h2>
                <p class="project-name">${selectedProject.title}</p>
                <p class="project-about">What is this project about?</p>
                <p class="project-description">${selectedProject.description}</p>
                <div class="tech-icons" id="tech-icons"></div>
                <div class="popup-button">
                    <button>GitHub</button>
                    <button>LiveTest</button>
                </div>
                
            </div>

            <div class="popup-right-container">
                <img src="./assets/icons/close_small.svg" alt="close icon" onclick="closePopup()">
                <img src="${selectedProject.image}" alt="">
                <div>
                    <p>Next project</p>
                </div>
            </div>

        </div>
    `
    const techIcons = document.getElementById('tech-icons');
    for (let i = 0; i < selectedProject.tech.length; i++) {
        techIcons.innerHTML += `
            <div class="single-tech">
                <img src="${selectedProject.tech[i].image}" alt="Technology icon">
                <p>${selectedProject.tech[i].name}</p>
            </div>
            
        `;
    }

}

function generateHtmlTemplate() {

}

function closePopup() {
    const overlay = document.getElementById('project-overlay');
    overlay.classList.add('d-none');
}