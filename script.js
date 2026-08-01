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