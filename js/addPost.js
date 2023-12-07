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
  errorList: document.getElementById('errorList'),
  alert: document.getElementById('alert'),
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
      if (ats.id) {
        // sekme
        window.location.href = '/index.html';
        return;
      }
      // jei gavom ne tuscia klaidu masyva
      if (Array.isArray(ats.error) && ats.error.length > 0) {
        // klaida
        console.log('klaida');
        // nesekmes atveju console log klaidu masyva is back end
        console.log('ats.error ===', ats.error);
        // atvaizduojam visas klaida klaudu sarase virs formos
        setErrrors(ats.error);
      }
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}
// back end

function setErrrors(errorArr) {
  // isssivalyti klaidu konteineri
  els.errorList.innerHTML = '';
  // atvaizduoja kaidas
  // 1. sukti cikla per klaida
  errorArr.forEach((errObj) => {
    // 2. kurti li
    const liEl = document.createElement('li');
    liEl.textContent = errObj.message;
    // 3. patalpinti li
    els.errorList.append(liEl);
  });
  els.alert.classList.remove('d-none');
}
