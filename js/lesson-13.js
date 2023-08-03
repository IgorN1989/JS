// const container = document.querySelector('.js-container');

// container.addEventListener('click', onClick);

// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   // console.log(evt.target.nodeName);
//   console.dir(evt.target.textContent);
// }

// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.append(btn);
//   labelCounter += 1;
// }

// =========================================================

const tagsContainer = document.querySelector('.js-tags');
let selectedTag = null;

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.tags__btn--active');
  //   console.log(currentActiveBtn);

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('tags__btn--active');
  }

  //   currentActiveBtn?.classList.remove('tags__btn--active');

  const nextActiveBtn = evt.target;
  nextActiveBtn.classList.add('tags__btn--active');
  // console.log(nextActiveBtn);

  selectedTag = nextActiveBtn.dataset.value;
  console.log(selectedTag);
}
