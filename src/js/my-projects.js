import icons from '/img/icons.svg';

// Import obrazów
import wallet1x from '/img/projects/1x/wallet-webservice-1x.jpg';
import wallet2x from '/img/projects/2x/wallet-webservice-2x.jpg';
import greenHarvest1x from '/img/projects/1x/green-harvest-online-store-1x.jpg';
import greenHarvest2x from '/img/projects/2x/green-harvest-online-store-2x.jpg';
import englishExcellence1x from '/img/projects/1x/english-excellence-webservice-1x.jpg';
import englishExcellence2x from '/img/projects/2x/english-excellence-webservice-2x.jpg';
import powerPulse1x from '/img/projects/1x/power-pulse-web-service-1x.jpg';
import powerPulse2x from '/img/projects/2x/power-pulse-web-service-2x.jpg';
import mimino1x from '/img/projects/1x/mimino-website-1x.jpg';
import mimino2x from '/img/projects/2x/mimino-website-2x.jpg';
import vyshyvanka1x from '/img/projects/1x/vyshyvanka-vibes-landing-page-1x.jpg';
import vyshyvanka2x from '/img/projects/2x/vyshyvanka-vibes-landing-page-2x.jpg';
import chegoJewelry1x from '/img/projects/1x/chego-jewelry-website-1x.jpg';
import chegoJewelry2x from '/img/projects/2x/chego-jewelry-website-2x.jpg';
import energyFlow1x from '/img/projects/1x/energy-flow-webservice-1x.jpg';
import energyFlow2x from '/img/projects/2x/energy-flow-webservice-2x.jpg';
import fruitbox1x from '/img/projects/1x/fruitbox-online-store-1x.jpg';
import fruitbox2x from '/img/projects/2x/fruitbox-online-store-2x.jpg';
import starlight1x from '/img/projects/1x/starlight-studio-landing-page-1x.jpg';
import starlight2x from '/img/projects/2x/starlight-studio-landing-page-2x.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      imageURL: {
        x1: wallet1x,
        x2: wallet2x,
      },
      title: 'WALLET WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: greenHarvest1x,
        x2: greenHarvest2x,
      },
      title: 'GREEN HARVEST WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: englishExcellence1x,
        x2: englishExcellence2x,
      },
      title: 'ENGLISH EXCELLENCE WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: powerPulse1x,
        x2: powerPulse2x,
      },
      title: 'POWER PULSE WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: mimino1x,
        x2: mimino2x,
      },
      title: 'MIMINO WEBSITE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: vyshyvanka1x,
        x2: vyshyvanka2x,
      },
      title: 'VYSHYVANKA VIBES LANDING PAGE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: chegoJewelry1x,
        x2: chegoJewelry2x,
      },
      title: 'CHEGO JEWELRY WEBSITE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: energyFlow1x,
        x2: energyFlow2x,
      },
      title: 'ENERGY FLOW WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: fruitbox1x,
        x2: fruitbox2x,
      },
      title: 'FRUITBOX ONLINE STORE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: starlight1x,
        x2: starlight2x,
      },
      title: 'STARLIGHT STUDIO LANDING PAGE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
  ];

  let currentIndex = 0;
  const projectsPerPage = 3;
  const projectList = document.querySelector('.project-list');
  const loadMoreBtn = document.querySelector('.load-more');

  function loadProjects() {
    const nextProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);
    nextProjects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.innerHTML = `
        <img srcset="${project.imageURL.x1} 1x, ${project.imageURL.x2} 2x" alt="${project.title}" loading="lazy">
        <div class="project-info-box">
          <p>${project.techStack}</p>
          <div class="projects-title-visit-wrapper">
            <h3>${project.title}</h3>
            <a href="${project.link}" target="_blank" class="visit-btn">
              VISIT
              <svg width="24" height="24" class="diagonal-arrow-icon">
                <use href="${icons}#icon-diagonal-arrow"></use>
              </svg>
            </a>
          </div>
        </div>
      `;
      projectList.appendChild(projectItem);
    });
    currentIndex += projectsPerPage;
    if (currentIndex >= projects.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  loadMoreBtn.addEventListener('click', loadProjects);

  loadProjects();
});
