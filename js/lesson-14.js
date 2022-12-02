// ===========================  TASK 1  ==================================


// const coordsOutputRef = document.querySelector(".js-coords");
// let mouseMoveCbInvocationCounter = 0;

// // window.addEventListener("mousemove", _.throttle(onMouseMove, 250));

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY}`;
// }


// const inputRef = document.querySelector(".js-input");
// const outputRef = document.querySelector(".js-output");
// let inputCbInvocationCounter = 0;

// inputRef.addEventListener("input", _.debounce(onInputChange, 1000));

// function onInputChange(event) {
//     inputCbInvocationCounter += 1;

//     outputRef.textContent = `Кількість викликів onInputChange: ${inputCbInvocationCounter},
//     Значення: ${event.target.value}`;
// }


// ===========================  TASK 2  ==================================


const tech = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "JavaScript" },
    { label: "Node.js" },
    { label: "React" },
    { label: "Vue" },
    { label: "Next.js" },
    { label: "Mobx" },
    { label: "Redux" },
    { label: "React Router" },
    { label: "GraphQl" },
    { label: "PostgreSQL" },
    { label: "MongoDB" },
];


const refs = {
    list: document.querySelector(".js-list"),
    input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", _.debounce(onFilterChange, 1000));

const listItemsMarkup = createListItemsMarkUp(tech);
popularList(listItemsMarkup);

function createListItemsMarkUp(items) {
    return items.map(item => `<li>${item.label}</li>`).join("");
}

function onFilterChange(evt) {
    const filter = evt.target.value.toLowerCase();

    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

    const listItemsMarkup = createListItemsMarkUp(filteredItems);

    popularList(listItemsMarkup);
}

function popularList(markup) {
    refs.list.innerHTML = markup;
}



