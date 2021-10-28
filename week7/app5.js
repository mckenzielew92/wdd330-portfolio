import Hikes from './hikes.js';
import Comments from './comments.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

const myComments = new Comments('hike', 'comments', 'hikeName');
document.getElementById('submit').addEventListener('click', () => {
  myComments.showCommentsList();
});
