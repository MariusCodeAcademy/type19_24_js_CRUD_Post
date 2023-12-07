'use strict';
console.log('editPost.js file was loaded');

const baseUrl = 'http://localhost:5000';
let currentPostId = '5703187329379835';

function flow() {
  // eiga
  // getSinglePost parsiustu posta ir grazintu
  // supildom formos inputus
}

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
