'use strict';
console.log('editPost.js file was loaded');

const baseUrl = 'http://localhost:5000';
let currentPostId = '5703187329379835';

flow();
function flow() {
  // eiga
  getSetCurrentPostId();
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

function getSetCurrentPostId() {
  // gauti id is Url parametru
  const urlParamsObj = new URLSearchParams(window.location.search);
  // console.log('urlParamsObj.get(town) ===', urlParamsObj.get('town'));
  currentPostId = urlParamsObj.get('postId');
  console.log('currentPostId ===', currentPostId);

  if (currentPostId === null) {
    console.warn('Nera post id');
  }
}
