const projectNames = document.querySelectorAll('.single-project-name');
let currentProjectIndex = 0;
let currentFeedbackIndex = 0;

function init() {
    renderFeedbacks();
}

projectNames.forEach(project => {
    project.addEventListener('mouseenter', showProjectImage);
    project.addEventListener('mouseleave', hideProjectImage);
});

function showProjectImage(event) {
    const projectName = event.currentTarget.dataset.project;
    const matchingImage = getProjectImage(projectName);

    matchingImage.classList.add('active');
}

function hideProjectImage(event) {
    const projectName = event.currentTarget.dataset.project;
    const matchingImage = getProjectImage(projectName);

    matchingImage.classList.remove('active');
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
            currentProjectIndex = i
            break;
        }
    }

    if (!selectedProject) {
        return;
    }

    renderPopupTemplate(selectedProject);
    const overlay = document.getElementById('project-overlay');
    overlay.classList.remove('d-none');
    document.body.classList.add('popup-open');
}

function renderPopupTemplate(selectedProject) {
    let content = document.getElementById('popup-content');
    content.innerHTML = generateHtmlPopupTemplate(selectedProject)
    renderTechIcons(selectedProject)
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
    document.body.classList.remove('popup-open');
}

function nextProject() {
    currentProjectIndex++;

    if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
    }

    renderPopupTemplate(projects[currentProjectIndex]);
}

function renderFeedbacks() {
    const feedbackContent = document.getElementById('feedback-cards');
    feedbackContent.innerHTML = '';

    for (let i = 0; i < feedbackCards.length; i++) {
        feedbackContent.innerHTML += generateHtmlFeedbackTemplate(feedbackCards[i]);
    }

    updateFeedbackCards();
}

function updateFeedbackCards() {
    let cards = document.querySelectorAll('.single-card');

    cards.forEach((card, index) => {
        card.classList.remove('active', 'left', 'right', 'hidden');
        const quote = card.querySelector('.quote');
        quote.classList.add('d-none');

        if (index === currentFeedbackIndex) {
            card.classList.add('active');
            quote.classList.remove('d-none');
        } else if (index === getPreviousIndex()) {
            card.classList.add('left');
        } else if (index === getNextIndex()) {
            card.classList.add('right');
        } else {
            card.classList.add('hidden');
        }
    });

    updateDots();
}

function getPreviousIndex() {
    if (currentFeedbackIndex === 0) {
        return feedbackCards.length - 1;
    }
    return currentFeedbackIndex - 1;
}

function getNextIndex() {
    if (currentFeedbackIndex === feedbackCards.length - 1) {
        return 0;
    }
    return currentFeedbackIndex + 1;
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    dots[currentFeedbackIndex].classList.add('active');
}

function nextCard() {
    currentFeedbackIndex++;

    if (currentFeedbackIndex >= feedbackCards.length) {
        currentFeedbackIndex = 0;
    }

    updateFeedbackCards();
}

function prevCard() {
    currentFeedbackIndex--;

    if (currentFeedbackIndex < 0) {
        currentFeedbackIndex = feedbackCards.length - 1;
    }

    updateFeedbackCards();
}