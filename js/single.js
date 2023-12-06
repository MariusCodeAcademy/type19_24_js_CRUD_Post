'use strict';
console.log('single.js file was loaded');

const baseUrl = 'http://localhost:5000';
let currentPostId = '5703187329379835';

const els = {};

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
      console.log('Object.keys(postObj) ===', Object.keys(postObj));
      console.log('Object.values(postObj) ===', Object.values(postObj));
      fillHtmlPage(postObj);
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}

getSinglePost(`${baseUrl}/posts/${currentPostId}`);

function fillHtmlPage() {
  // supildyti html reikmes is postObj
}

// https://www.skelbiu.lt/skelbimai/?autocompleted=1&keywords=&cost_min=100&cost_max=5000&type=1&condition=1&cities=0&distance=0&mainCity=0&se
