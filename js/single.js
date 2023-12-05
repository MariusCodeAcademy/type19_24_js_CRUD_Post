'use strict';
console.log('single.js file was loaded');

const baseUrl = 'http://localhost:5000';
const currentPostId = '3083126839342818';

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

function fillHtmlPage() {}
