'use strict';

// import setTheme from './login';

// window.addEventListener('load', function () {
//   let savedTheme = localStorage.getItem('theme');
//   if (savedTheme) {
//     setTheme(savedTheme);
//   }
// });

let state = {
  projects: [],
  notes: [
    {
      title: 'CSS Notes',
      text: 'These are my notes about CSS. CSS is frickin sweet.'
    },
    {
      title: 'HTML Notes',
      text: 'These are my really well formatted HTML notes. Semantic tags are cool.'
    },
    {
      title: 'JavaScript Notes',
      text: 'JavaScript is my favorite language! Constructors are fun!'
    }
  ],
};

function saveAllToLocalStorage() {
  console.log('saving state to local storage');
  localStorage.setItem('portfolioState', JSON.stringify(state));
}

function retrieveAllFromLocalStorage() {
  console.log('retrieving local storage data and setting state');
  state = JSON.parse(localStorage.getItem('portfolioState'));
}


// if data for local storage already exists, retrieve it. Otherwise, create the local storage object by saving the blank state object to local storage
if (localStorage.getItem('portfolioState')) {
  retrieveAllFromLocalStorage();
} else saveAllToLocalStorage();

