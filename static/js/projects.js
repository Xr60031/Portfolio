const myProjects = [
    {
        title: "Helpy - Invoicing System",
        subtitle: "Profesional Supervised Practice",
        github: "https://github.com/Xr60031/PPS-Ezequiel-Bacchini",
        img: "static/images/Project Assets/pps.png",
        desc: "Developed an invoicing system designed for users with mild intellectual disabilities, simplifying the billing process and providing guided assistance to maximize usability and ease of use."
    },
    {
        title: "Nuclear Reactor System",
        subtitle: "Laboratory - Academic Project",
        github: "https://github.com/Xr60031/Laboratorio_3_Trabajo_Practico_Reactor_Nuclear",
        img: "static/images/Project Assets/nuclearplant.png",
        desc: "A simulated nuclear reactor software system to manage scenarios such as temperature fluctuations, alert notifications, and safety measures, applying SOLID principles and object-oriented programming (OOP)."
    },
    {
        title: "University Subject Notebook",
        subtitle: "Laboratory - Academic Project",
        github: "https://github.com/Nico-DM/libreta-materias",
        img: "static/images/Project Assets/universitybooks.png",
        desc: "A student grade management system that allows users to record, track, and organize their midterm and final exam results."
    },
];

let currentIndex = 0;

function changeProject(step) {
    currentIndex += step;

    if (currentIndex >= myProjects.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = myProjects.length - 1;
    }

    const title = document.getElementById('p-title');
    const subtitle = document.getElementById('p-subtitle');
    const githubLink = document.getElementById('p-link');
    const image = document.getElementById('p-img');
    const description = document.getElementById('p-desc');
    const contentWrapper = document.getElementById('p-content');

    contentWrapper.style.opacity = "0";
    contentWrapper.style.transform = "translateY(10px)";
    contentWrapper.style.transition = "all 0.3s ease";

    setTimeout(() => {
        title.innerText = myProjects[currentIndex].title;
        subtitle.innerText = myProjects[currentIndex].subtitle;
        githubLink.href = myProjects[currentIndex].github;
        image.src = myProjects[currentIndex].img;
        description.innerText = myProjects[currentIndex].desc;

        contentWrapper.style.opacity = "1";
        contentWrapper.style.transform = "translateY(0)";
    }, 300);
}