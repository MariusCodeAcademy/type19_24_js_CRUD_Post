'use strict';
console.log('main.js file was loaded');

const baseUrl = 'http://localhost:5000';
const postsUrl = `${baseUrl}/posts`;

// sukurti funkcija kuri parsiunia ir iskonsolina visus postus
const els = {
  postListEl: document.getElementById('postList'),
};
console.log('els ===', els);

init();
async function init() {
  let mainPostsArr = await getAllPosts();
  console.log('mainPostsArr ===', mainPostsArr);
  // console.log(JSON.stringify(mainPostsArr[0]));
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
function makePostsHtml(arr) {
  arr.forEach((postObj) => {
    // sukuriam viena post html el
    const siglePostEl = createSinglePostEl(postObj);
    // console.log('siglePostEl ===', siglePostEl);
    // deti i sarasa
    els.postListEl.append(siglePostEl);
  });
}

function createSinglePostEl(singlePostObj) {
  const liEl = document.createElement('li');
  const innerDiv = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Post title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Post author</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
        <a href="#" class="btn btn-primary card-link">Read more</a>
      </div>
    </div>
  `;
  liEl.innerHTML = innerDiv;
  return liEl;
}
