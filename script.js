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
    content.innerHTML = generateHtmlTemplate(selectedProject)
    renderTechIcons(selectedProject)
}

function generateHtmlTemplate(selectedProject) {
    return /*html*/ `
        <div class="popup-wrapper">
            <div class="popup-left-container">
                <h2>${selectedProject.project_nr}</h2>
                <p class="project-name">${selectedProject.title}</p>
                <p class="project-about">What is this project about?</p>
                <p class="project-description">${selectedProject.description}</p>
                <div class="tech-icons" id="tech-icons"></div>
                <div class="popup-button">
                    <a target="_blank" href="">
                        <button>GitHub
                            <svg width="18" height="18" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_6063_2668" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                <rect width="23" height="23" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_6063_2668)">
                                <path d="M15.5675 8.3989L6.68683 17.2798C6.48047 17.486 6.25023 17.5841 5.99611 17.5742C5.742 17.5643 5.51184 17.4563 5.30564 17.2501C5.09927 17.0437 4.99609 16.8085 4.99609 16.5445C4.99609 16.2805 5.09927 16.0453 5.30564 15.8389L14.1566 6.98799H6.78674C6.50802 6.98799 6.27267 6.89248 6.08069 6.70145C5.88854 6.51026 5.79247 6.27603 5.79247 5.99875C5.79247 5.72148 5.88854 5.48556 6.08069 5.29102C6.27267 5.09664 6.50802 4.99945 6.78674 4.99945H16.5617C16.8405 4.99945 17.0759 5.09544 17.268 5.28743C17.46 5.47958 17.556 5.71501 17.556 5.99372V15.7687C17.556 16.0474 17.4605 16.2829 17.2695 16.475C17.0783 16.667 16.844 16.763 16.5668 16.763C16.2895 16.763 16.0537 16.667 15.8593 16.475C15.6647 16.2829 15.5675 16.0474 15.5675 15.7687V8.3989Z" fill="#3DCFB6"/>
                                </g>
                            </svg>
                        </button>
                    </a>
                    <a target="_blank" href="">
                        <button>LiveTest
                            <svg width="18" height="18" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_6063_2668" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                <rect width="23" height="23" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_6063_2668)">
                                <path d="M15.5675 8.3989L6.68683 17.2798C6.48047 17.486 6.25023 17.5841 5.99611 17.5742C5.742 17.5643 5.51184 17.4563 5.30564 17.2501C5.09927 17.0437 4.99609 16.8085 4.99609 16.5445C4.99609 16.2805 5.09927 16.0453 5.30564 15.8389L14.1566 6.98799H6.78674C6.50802 6.98799 6.27267 6.89248 6.08069 6.70145C5.88854 6.51026 5.79247 6.27603 5.79247 5.99875C5.79247 5.72148 5.88854 5.48556 6.08069 5.29102C6.27267 5.09664 6.50802 4.99945 6.78674 4.99945H16.5617C16.8405 4.99945 17.0759 5.09544 17.268 5.28743C17.46 5.47958 17.556 5.71501 17.556 5.99372V15.7687C17.556 16.0474 17.4605 16.2829 17.2695 16.475C17.0783 16.667 16.844 16.763 16.5668 16.763C16.2895 16.763 16.0537 16.667 15.8593 16.475C15.6647 16.2829 15.5675 16.0474 15.5675 15.7687V8.3989Z" fill="#3DCFB6"/>
                                </g>
                            </svg>
                        </button>
                    </a>
                </div>
                
            </div>

            <div class="popup-right-container">
                <div class="close-popup">
                    <img src="./assets/icons/close_small.svg" alt="close icon" onclick="closePopup()">
                </div>
                <img src="${selectedProject.image}" alt="">
                <div class="next-project">
                    <p>Next project</p>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_3296_3475" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                        <rect width="32" height="32" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_3296_3475)">
                        <path d="M22.7715 16.6667H7.33317C7.14339 16.6667 6.98484 16.603 6.8575 16.4757C6.73017 16.3484 6.6665 16.1898 6.6665 16C6.6665 15.8102 6.73017 15.6517 6.8575 15.5244C6.98484 15.397 7.14339 15.3334 7.33317 15.3334H22.7715L15.5205 8.08202C15.3905 7.95225 15.3225 7.79925 15.3165 7.62302C15.3105 7.44702 15.3811 7.28547 15.5282 7.13836C15.6751 6.99658 15.8323 6.92436 15.9998 6.92169C16.1674 6.91925 16.3246 6.99147 16.4715 7.13836L24.5792 15.246C24.6956 15.3625 24.7773 15.4814 24.8242 15.6027C24.8713 15.724 24.8948 15.8565 24.8948 16C24.8948 16.1436 24.8713 16.276 24.8242 16.3974C24.7773 16.5187 24.6956 16.6376 24.5792 16.754L16.4715 24.8617C16.3468 24.9864 16.1952 25.053 16.0165 25.0617C15.8378 25.0701 15.6751 25.0035 15.5282 24.8617C15.3811 24.7146 15.3075 24.556 15.3075 24.386C15.3075 24.2158 15.3811 24.0572 15.5282 23.9104L22.7715 16.6667Z" fill="#3DCFB6"/>
                        </g>
                    </svg>
                </div>
            </div>

        </div>
    `
}

function renderTechIcons(selectedProject) {
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

function closePopup() {
    const overlay = document.getElementById('project-overlay');
    overlay.classList.add('d-none');
}