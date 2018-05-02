function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll(`.ranked-list li`);
  for (let a = 0; a < lists.length; a++) {
    lists[a].innerHTML = parseInt(lists[a].innerHTML) + n
  }
}

function deepestChild() {
  let parent = document.querySelector(`div#grand-node`);
}