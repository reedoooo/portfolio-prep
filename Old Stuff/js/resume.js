'use strict';

let allFiles = [];

function File(fileName, fileSRC) {
  this.name = fileName;
  this.src = fileSRC.replace(/^.*\\/, '') + fileName;


  // this.src = '/web/viewer.html?file=' + fileName + '.' + fileSRC; //img/itemName.fileExtension

  this.removedFiles = [];
  console.log(this.removedFiles);

  allFiles.push(this);
}

let fileContainer = document.getElementById('pdfViewer');

File.prototype.renderFile = function () {

  let renderedFile = document.createElement('iFrame');

  renderedFile.setAttribute('name', this.name);
  renderedFile.setAttribute('src', this.src);
  renderedFile.setAttribute('id', 'pdf-js-viewer');
  renderedFile.setAttribute('class', 'file');
  renderedFile.setAttribute('title', 'webviewer');

  renderedFile.setAttribute('height', '600');
  renderedFile.setAttribute('width', '500');
  renderedFile.setAttribute('frameborder', '0');



  fileContainer.appendChild(renderedFile);

};

let newFile = document.getElementById('pdfFileInput');

newFile.addEventListener('change', createNewFile);

function createNewFile(event) {
  event.preventDefault();
  console.log('testZ');

  let files = event.target.files;
  let inputOne = '';
  let inputTwo = '';

  for (const file of files) {
    inputOne = file.name;
    inputTwo = event.target.value;

    console.log(inputOne);
    console.log(file);

  }


  let newFileValues = new File(inputOne, inputTwo);

  allFiles.push(newFileValues);

  newFileValues.renderFile();
}

// const fileInput = document.getElementById('fileInput');
// const filePreview = document.getElementById('file-preview');

// fileInput.addEventListener('change', function() {
//   const file = this.files[0];
//   const reader = new FileReader();
//   reader.onload = function(event) {
//     filePreview.name = event.target.name;
//     filePreview.src = event.target.result;
//     filePreview.style.display = 'block';
//   };
//   reader.readAsDataURL(file);
// });
