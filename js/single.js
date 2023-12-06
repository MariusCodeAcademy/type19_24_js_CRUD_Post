'use strict';
console.log('single.js file was loaded');

const baseUrl = 'http://localhost:5000';
let currentPostId = '5703187329379835';

const els = {
  imageEl: document.getElementById('image'),
  titleEl: document.getElementById('title'),
  bodyEl: document.getElementById('body'),
  authorEl: document.getElementById('author'),
  tagsEl: document.getElementById('tags'),
  dateEl: document.getElementById('date'),
};
console.log('els ===', els);
// gauti id is Url parametru
const urlParamsObj = new URLSearchParams(window.location.search);
// console.log('urlParamsObj.get(town) ===', urlParamsObj.get('town'));
currentPostId = urlParamsObj.get('postId');
console.log('currentPostId ===', currentPostId);

if (currentPostId === null) {
  console.warn('Nera post id');
}

// su funkcija parsiusti ir iskonsolinti konretu posta kurio id yra currentPostId

function getSinglePost(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((postObj) => {
      console.log('postObj ===', postObj);

      fillHtmlPage(postObj);
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}

getSinglePost(`${baseUrl}/posts/${currentPostId}`);

function fillHtmlPage(currentPostObj) {
  // supildyti html reikmes is postObj
  els.titleEl.textContent = currentPostObj.title;
  els.authorEl.textContent = currentPostObj.author;
  els.dateEl.textContent = currentPostObj.date;
  els.bodyEl.textContent = currentPostObj.body;
  tagsToHtml(currentPostObj.tags);
  // image
  if (currentPostObj.image === '') {
    els.imageEl.classList.add('d-none');
    return;
  }
  els.imageEl.src = currentPostObj.image;
  els.imageEl.alt = currentPostObj.title;
  els.imageEl.title = currentPostObj.title;
}

function tagsToHtml(tagsArr) {
  // <li class="badge rounded-pill text-bg-success fs-5">Html</li>
  // isvalyti konteineri
  els.tagsEl.innerHTML = '';
  tagsArr.forEach((postTag) => {
    const liEl = document.createElement('li');
    liEl.className = 'badge me-2 rounded-pill text-bg-success fs-5';
    liEl.textContent = postTag;
    els.tagsEl.append(liEl);
  });
}

// https://www.skelbiu.lt/skelbimai/?autocompleted=1&keywords=&cost_min=100&cost_max=5000&type=1&condition=1&cities=0&distance=0&mainCity=0&se
