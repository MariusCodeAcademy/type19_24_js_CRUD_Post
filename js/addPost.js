'use strict';
console.log('addPost.js file was loaded');

const baseUrl = 'http://localhost:5000';

// "image","title","body","author","tags","date"

const initData = {
  image: '',
  title: '',
  body: '',
  author: '',
  tags: '',
  date: '',
};

const els = {
  form: document.forms[0],
  image: document.getElementById('image'),
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  author: document.getElementById('author'),
  tags: document.getElementById('tags'),
  date: document.getElementById('date'),
};
console.log('els ===', els);

// formai uzdeti pateikimo pasiklausyma
els.form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('pateikta');
  const newPostFromInputs = {
    image: els.image.value,
    title: els.title.value,
    body: els.body.value,
    author: els.author.value,
    tags: els.tags.value.split(',').map((str) => str.trim()),
    date: els.date.value,
  };
  console.log('newPostFromInputs ===', newPostFromInputs);
  sendNewPostFetch(newPostFromInputs);
});

// pateikiant forma sukurti nauja posta siuncian fetch uzklausa i
function sendNewPostFetch(newPostObj) {
  fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newPostObj),
  })
    .then((resp) => {
      // console.log('resp ===', resp);
      return resp.json();
    })
    .then((ats) => {
      console.log('ats ===', ats);
      // kai sekme tai naviguojam i home page
      // nesekmes atveju console kad klaida
      // atvaizduojam visas klaida klaudu sarase virs formos
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}
// back end
