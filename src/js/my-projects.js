document.addEventListener('DOMContentLoaded', () => {
  const projects = [
    {
      imageURL: {
        x1: '/img/projects/1x/wallet-webservice-1x.jpg',
        x2: '/img/projects/2x/wallet-webservice-2x.jpg',
      },
      title: 'WALLET WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/green-harvest-online-store-1x.jpg',
        x2: '/img/projects/2x/green-harvest-online-store-2x.jpg',
      },
      title: 'GREEN HARVEST WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/english-excellence-webservice-1x.jpg',
        x2: '/img/projects/2x/english-excellence-webservice-2x.jpg',
      },
      title: 'ENGLISH EXCELLENCE WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/power-pulse-web-service-1x.jpg',
        x2: '/img/projects/2x/power-pulse-web-service-2x.jpg',
      },
      title: 'POWER PULSE WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/mimino-website-1x.jpg',
        x2: '/img/projects/2x/mimino-website-2x.jpg',
      },
      title: 'MIMINO WEBSITE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/vyshyvanka-vibes-landing-page-1x.jpg',
        x2: '/img/projects/2x/vyshyvanka-vibes-landing-page-2x.jpg',
      },
      title: 'VYSHYVANKA VIBES LANDING PAGE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/chego-jewelry-website-1x.jpg',
        x2: '/img/projects/2x/chego-jewelry-website-2x.jpg',
      },
      title: 'CHEGO JEWELRY WEBSITE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/energy-flow-webservice-1x.jpg',
        x2: '/img/projects/2x/energy-flow-webservice-2x.jpg',
      },
      title: 'ENERGY FLOW WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/fruitbox-online-store-1x.jpg',
        x2: '/img/projects/2x/fruitbox-online-store-2x.jpg',
      },
      title: 'FRUITBOX ONLINE STORE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git',
    },
    {
      imageURL: {
        x1: '/img/projects/1x/starlight-studio-landing-page-1x.jpg',
        x2: '/img/projects/2x/starlight-studio-landing-page-2x.jpg',
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
              <svg width="24" height="24">
                <use href="./img/icons.svg#icon-diagonal-arrow"></use>
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
