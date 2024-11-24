// script.js
document.addEventListener('DOMContentLoaded', () => {
  const projects = [
      {
          image: './img/projects/Rectangle 11.png',
          title: 'WALLET WEBSERVICE',
          techStack: 'React, JavaScript, Node JS, Git',
          link: 'https://github.com/Duard4/goit-js-team-project.git'
      },
      {
          image: './img/projects/Rectangle 9.png',
          title: 'GREEN HARVEST WEBSERVICE',
          techStack: 'React, JavaScript, Node JS, Git',
          link: 'https://github.com/Duard4/goit-js-team-project.git'
      },
      {
          image: './img/projects/Rectangle 12.png',
          title: 'ENGLISH EXCELLENCE WEBSERVICE',
          techStack: 'React, JavaScript, Node JS, Git',
          link: 'https://github.com/Duard4/goit-js-team-project.git'
      },
      {
          image: './img/projects/Rectangle 10.png',
          title: 'POWER PULSE WEBSERVICE',
          techStack: 'React, JavaScript, Node JS, Git',
          link: 'https://github.com/Duard4/goit-js-team-project.git'
      },
      {
          image: './img/projects/Rectangle 7.png',
          title: 'MIMINO WEBSITE',
          techStack: 'React, JavaScript, Node JS, Git',
          link: 'https://github.com/Duard4/goit-js-team-project.git'
      },
      {
          image: './img/projects/Rectangle 8.png',
          title: 'VYSHYVANKA VIBES LANDING PAGE',
          techStack: 'React, JavaScript, Node JS, Git',
          link: 'https://github.com/Duard4/goit-js-team-project.git'
      },
      {
        image: './img/projects/Rectangle 6.png',
        title: 'CHEGO JEWELRY WEBSITE',
        techStack: 'React, JavaScript, Node JS, Git',
        link: 'https://github.com/Duard4/goit-js-team-project.git'
    },
    {
      image: './img/projects/Rectangle 4.png',
      title: 'ENERGY FLOW WEBSERVICE',
      techStack: 'React, JavaScript, Node JS, Git',
      link: 'https://github.com/Duard4/goit-js-team-project.git'
  },
  {
    image: './img/projects/Rectangle 5.png',
    title: 'FRUITBOX ONLINE STORE',
    techStack: 'React, JavaScript, Node JS, Git',
    link: 'https://github.com/Duard4/goit-js-team-project.git'
},
{
  image: './img/projects/first screen 1.png',
  title: 'STARLIGHT STUDIO LANDING PAGE',
  techStack: 'React, JavaScript, Node JS, Git',
  link: 'https://github.com/Duard4/goit-js-team-project.git'
}
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
              <img src="${project.image}" alt="${project.title}">
              <p>${project.techStack}</p>
              <h3>${project.title}</h3>
              <a href="${project.link}" target="_blank" class="button">VISIT<svg width="15" height="15">
              <use href="./img/icons.svg#icon-diagonal-arrow"></use>
              </svg></a>
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
