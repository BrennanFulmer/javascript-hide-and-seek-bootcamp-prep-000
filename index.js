function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  let items = document.querySelectorAll(`.ranked-list li`);
  for (let a = 0; a < items.length; a++) {
    items[a].innerHTML = parseInt(items[a].innerHTML) + n
  }
  return items;
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}