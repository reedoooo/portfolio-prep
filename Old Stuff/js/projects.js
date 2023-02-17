'use strict';

// let displayedCode;


function Code(name, text) {
  this.name = name;
  this.text = text;
}

function Project(title, path, files) {
  this.title = title;
  this.path = path;
  this.files = files;
  this.favorite = false;
  this.fileSize = 0;
}

Project.prototype.parseFiles = function () {
  let newFiles = [];

  for (let i = 0; i < this.files.length; i++) {
    let elementName = this.files[i].name;
    if (elementName.slice(-3) === '.js' || elementName.slice(-4) === '.css' || elementName.slice(-5) === '.html') {
      this.files[i].text().then((promise) => {
        let code = new Code(elementName, promise);
        newFiles.push(code);
      });
    }
  }
  this.files = newFiles;
};

function addProjectToState(event) {
  event.preventDefault();

  let title = event.target.title.value;
  let path = event.target.deployedPage.value;
  let files = event.target.folderSRC.files;

  let project = new Project(title, path, files);

  project.parseFiles();

  state.projects.push(project);

  setTimeout(saveAllToLocalStorage, 500);
  console.log('firing now');
  clearProjectsList();
  populateProjectsList();

  document.getElementById('addFolders').reset();
}

function clearProjectsState() {
  state.projects = [];
}

function createProjectFilesNavButtons(event) {
  let project = state.projects[event.target.id];
  let containerEl = document.getElementById('projectFileNavContainer');
  let titleEl = document.createElement('h4');

  for (let i = 0; containerEl.childNodes.length > 0; i++) {
    containerEl.removeChild(containerEl.lastChild);
  }

  titleEl.innerText = `View ${project.title} Files`;
  containerEl.appendChild(titleEl);

  project.files.forEach(element => {
    let buttonEl = document.createElement('button');
    buttonEl.innerText = element.name;
    buttonEl.setAttribute('id', project.files.indexOf(element));

    buttonEl.addEventListener('click', function () {
      document.getElementById('textblob').innerText = element.text;
    });

    containerEl.appendChild(buttonEl);
  });
}

function handleDisplayCode(event) {
  let codeEl = document.getElementById('textblob');
  let webPageEl = document.getElementById('webPage');

  codeEl.innerText = state.projects[event.target.id].files[0].text;
  webPageEl.src = state.projects[event.target.id].path;

  createProjectFilesNavButtons(event);
}

function populateProjectsList() {
  // retrieveAllFromLocalStorage();

  for (let i = 0; i < state.projects.length; i++) {
    let folderRowEl = document.getElementById('folderRow');
    let folderButtonEl = document.createElement('button');

    folderButtonEl.setAttribute('class', 'folder');
    folderButtonEl.setAttribute('id', i);

    folderButtonEl.style.content = state.projects[i].title;
    folderButtonEl.innerText = state.projects[i].title;
    folderButtonEl.addEventListener('click', handleDisplayCode);

    folderRowEl.appendChild(folderButtonEl);
  }
}

function clearProjectsList() {
  const folderRowEl = document.getElementById('folderRow');

  for (let i = 0; folderRowEl.childNodes.length > 0; i++) {
    folderRowEl.removeChild(folderRowEl.lastChild);
  }
}


let addProjectEl = document.getElementById('addFolders');
addProjectEl.addEventListener('submit', addProjectToState);
populateProjectsList();
