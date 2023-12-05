'use strict';
console.log('main.js file was loaded');

const baseUrl = 'http://localhost:5000';
const postsUrl = `${baseUrl}/posts`;

// sukurti funkcija kuri parsiunia ir iskonsolina visus postus
init();
async function init() {
  let mainPostsArr = await getAllPosts();
  console.log('mainPostsArr ===', mainPostsArr);
  makePostsHtml(mainPostsArr);
}

function getAllPosts() {
  return fetch(postsUrl)
    .then((resp) => resp.json())
    .then((postsArr) => {
      // console.log('postsArr ===', postsArr);
      return postsArr;
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}

// sugeneruoti postus htmle
