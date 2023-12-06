'use strict';
console.log('editPost.js file was loaded');

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
