'use strict';
console.log('editPost.js file was loaded');

const baseUrl = 'http://localhost:5000';
let currentPostId = '5703187329379835';

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

flow();
async function flow() {
  // eiga
  getSetCurrentPostId();

  // getSinglePost parsiustu posta ir grazintu
  const currentPostObj = await getSinglePost(
    `${baseUrl}/posts/${currentPostId}`
  );
  console.log('currentPostObj ===', currentPostObj);
  // supildom formos inputus
  fillFormFields(currentPostObj);
}

function getSinglePost(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((postObj) => {
      // console.log('postObj ===', postObj);
      // callback(postObj);
      return postObj;
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

function fillFormFields({ image, title, body, author, tags, date }) {
  // postObj === currentPostObj
  // paimti info ir postObj ir sudeti i formos laukus

  // const { image, title, body, author, tags, date } = postObj;

  els.image.value = image;
  els.title.value = title;
  els.body.value = body;
  els.author.value = author;
  els.tags.value = tags.join(', ');
  els.date.value = date;
}
