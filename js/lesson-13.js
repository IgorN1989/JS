// ===========================  TASK 1  ==================================


// const refs = {
//     parent: document.querySelector("#parent"),
//     child: document.querySelector("#child"),
//     innerChild: document.querySelector("#inner-child"),
// };

// refs.parent.addEventListener("click", onParentClick);
// refs.child.addEventListener("click", onChildClick);
// refs.innerChild.addEventListener("click", onInnerChildClick);


// function onParentClick(e) {
//     console.log("onParentClick");
//     console.log("onParentClick -> e.target", e.target);
//     console.log("onParentClick -> e.currentTarget", e.currentTarget);
// };

// function onChildClick(e) {
//     console.log("onChildClick");
//     console.log("onChildClick -> e.target", e.target);
//     console.log("onChildClick -> e.currentTarget", e.currentTarget);
// };

// function onInnerChildClick(e) {
//     console.log("onInnerChildClick");
//     console.log("onInnerChildClick -> e.target", e.target);
//     console.log("onInnerChildClick -> e.currentTarget", e.currentTarget);
// }


// ===========================  TASK 2  ==================================


// const container = document.querySelector(".js-container");

// container.addEventListener("click", onClick)

// function onClick(e) {
//     if (e.target.nodeName !== "BUTTON") {
//         return;
//     }
//     console.log(e.target.textContent);
//     console.log(e.target.nodeName);


// }


// const addBtn = document.querySelector(".js-add-btn");
// let labelCounter = 6;

// addBtn.addEventListener("click", onAddBtnClick);

// function onAddBtnClick() {
//     const btn = document.createElement("button");
//     btn.textContent = `Кнопка ${labelCounter}`;
//     btn.type = "button";

//     container.appendChild(btn);
//     labelCounter += 1;
// }


// ===========================  TASK 3  ==================================


// const tagsContainer = document.querySelector(".js-tags");
// let selectedTags = null;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const currentActiveBtn = document.querySelector(".tags__btn-active");

//     // console.log(currentActiveBtn);

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove("tags__btn-active");
//     }

//     // currentActiveBtn?.classList.remove("tags__btn-active");

//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add("tags__btn-active");
//     selectedTags = nextActiveBtn.dataset.value;

//     console.log(selectedTags);
// }


// ===========================  TASK 4  ==================================


// const tagsContainer = document.querySelector(".js-tags");
// const selectedTags = new Set;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(evt) {
//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const btn = evt.target;
//     const tag = btn.dataset.value;
//     const isActive = btn.classList.contains("tags__btn-active");

//     if (isActive) {
//         selectedTags.delete(tag)
//     } else {
//         selectedTags.add(tag);
//     }

//     btn.classList.toggle("tags__btn-active");

//     console.log(selectedTags);
// }


// ===========================  TASK 5  ==================================


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#e91e63", rgb: "233,30,99" },
//     { hex: "#9c27b0", rgb: "156,39,176" },
//     { hex: "#673ab7", rgb: "103,58,183" },
//     { hex: "#3f51b5", rgb: "63,81,181" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#00bcd4", rgb: "0,188,212" },
//     { hex: "#009688", rgb: "0,150,136" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//     { hex: "#ff9800", rgb: "255,152,0" },
//     { hex: "#795548", rgb: "121,85,72" },
//     { hex: "#607d8b", rgb: "96,125,139" },
// ];

// const paletteContainer = document.querySelector(".js-palette");
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// paletteContainer.addEventListener("click", onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//     return colors.map(({hex, rgb}) => {
//         return `
//       <div class="color-card">
//         <div
//           class="color-swatch"
//           data-hex="${hex}"
//           data-rgb="${rgb}"
//           style="background-color: ${hex}"
//         ></div>
//         <div class="color-meta">
//           <p>HEX: ${hex}</p>
//           <p>RGB: ${rgb}</p>
//         </div>
//       </div>
//     `
//     }).join("");
// }

// function onPaletteContainerClick(evt) {
//     const isColorSwatchEl = evt.target.classList.contains("color-swatch");
//     if (!isColorSwatchEl) {
//         return;
//     }
    
//     const swatchEl = evt.target;
//     const parentColorCard = swatchEl.closest(".color-card");

//     removeActiceCardClass();
//     addActiveCardClass(parentColorCard);
//     setBodyBgColor(swatchEl.dataset.hex);
// }

// function removeActiceCardClass() {
//      const currentActiveCard = document.querySelector('.color-card.is-active');

//     if (currentActiveCard) {
//         currentActiveCard.classList.remove("is-active");
//     }
// }

// function addActiveCardClass(card) {
//     card.classList.add("is-active");
// }

// function setBodyBgColor(color) {
//     document.body.style.backgroundColor = color;
// }


// ===========================  TASK 6  ==================================

