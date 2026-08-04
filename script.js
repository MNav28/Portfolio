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

function openProjectPopup(project) {
    let proj = 'join'

    if (project == proj) {
        console.log('popup opened for join')
    } else (
        console.log('popup opened for pollo loco')
    );

}

function renderPopupTemplate() {
    let content = document.getElementById('popup-content');
    content.innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
        
    }
    return /*html*/ `
        <div class="popup-wrapper">
            <div class="popup-left-container">
                <h2></h2>
                <p></p>
                <p>What is this project about?</p>
                <p class="description"></p>
                <div class="tech-icons">

                </div>
                <div class="popup-button">
                    <button>GitHub</button>
                    <button>LiveTest</button>
                </div>
                
            </div>

            <div class="popup-right-container">
                <img src="./assets/icons/close_small.svg" alt="close icon">
                <img src="" alt="">
                <div>
                    <p>Next project</p>
                </div>
            </div>

        </div>
    `
}