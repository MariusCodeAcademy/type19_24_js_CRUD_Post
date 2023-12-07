const baseUrl = 'http://localhost:5000';
const postsUrl = `${baseUrl}/posts`;

// Functions

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
