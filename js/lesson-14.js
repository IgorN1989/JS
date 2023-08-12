// const coordsOutputRef = document.querySelector('.js-coords');
// let mouseMoveCbInvocationCounter = 0;

// const throttledOnMouseMove = _.throttle(onMouseMove, 500);

// // window.addEventListener('mousemove', onMouseMove);
// window.addEventListener('mousemove', throttledOnMouseMove);

// function onMouseMove(event) {
//     mouseMoveCbInvocationCounter += 1;

//     coordsOutputRef.textContent = `
//     Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
//     X: ${event.clientX},
//     Y: ${event.clientY}
//     `;
// }

// ===================================================================

// const inputRef = document.querySelector('.js-input');
// const outputRef = document.querySelector('.js-output');
// let inputCbInvocationCounter = 0;

// const debouncedonInputChange = _.debounce(onInputChange, 2000);

// // inputRef.addEventListener('input', onInputChange);
// inputRef.addEventListener('input', debouncedonInputChange);

// function onInputChange(event) {
//   inputCbInvocationCounter += 1;

//   outputRef.textContent = `
//     Кількість викликів onInputChange: ${inputCbInvocationCounter},
//     Значення:${inputRef.value}`;
// };

// ===================================================================

// const tech = [
//   { label: 'HTML' },
//   { label: 'CSS' },
//   { label: 'JavaScript' },
//   { label: 'Node.js' },
//   { label: 'React' },
//   { label: 'Vue' },
//   { label: 'Next.js' },
//   { label: 'Mobx' },
//   { label: 'Redux' },
//   { label: 'React Router' },
//   { label: 'GraphQl' },
//   { label: 'PostgreSQL' },
//   { label: 'MongoDB' },
// ];

// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// const listItemsMarkup = createListItemsMarkup(tech);

// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }

// ===================================================================

// console.log(_.throttle);

// document.addEventListener('scroll', _.throttle(onScroll,3000));

// function onScroll(evt) {
//   console.log('hi');
// }

// ===================================================================

// const cats = [
//   'https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg',
//   'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
//   'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
//   'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8',
//   'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
//   'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//   'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//   'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//   'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg',
//   'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
//   'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg',
//   'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU',
// ];

// const list = document.querySelector('.list');

// const markup = cats
//   .map(
//     item => `<li><img src="${item}" loading="lazy" alt="cat" width="300px">
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto dolores optio exercitationem accusantium maiores, nulla ducimus culpa? Deserunt soluta culpa, et assumenda maiores blanditiis. Nobis, illum! Rem quae natus aspernatur, ipsum adipisci deleniti numquam magni, quas, in obcaecati sequi sunt soluta! Repudiandae pariatur nostrum porro voluptatibus fugit? Quod, aliquam.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto dolores optio exercitationem accusantium maiores, nulla ducimus culpa? Deserunt soluta culpa, et assumenda maiores blanditiis. Nobis, illum! Rem quae natus aspernatur, ipsum adipisci deleniti numquam magni, quas, in obcaecati sequi sunt soluta! Repudiandae pariatur nostrum porro voluptatibus fugit? Quod, aliquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto dolores optio exercitationem accusantium maiores, nulla ducimus culpa? Deserunt soluta culpa, et assumenda maiores blanditiis. Nobis, illum! Rem quae natus aspernatur, ipsum adipisci deleniti numquam magni, quas, in obcaecati sequi sunt soluta! Repudiandae pariatur nostrum porro voluptatibus fugit? Quod, aliquam.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto dolores optio exercitationem accusantium maiores, nulla ducimus culpa? Deserunt soluta culpa, et assumenda maiores blanditiis. Nobis, illum! Rem quae natus aspernatur, ipsum adipisci deleniti numquam magni, quas, in obcaecati sequi sunt soluta! Repudiandae pariatur nostrum porro voluptatibus fugit? Quod, aliquam</li>`
//   )
//   .join('');
// list.insertAdjacentHTML('beforeend', markup);

// document.addEventListener('scroll', _.debounce(onScroll, 300, {
//   trailing: false,
//   leading: true,
// }));
// let count = 0;

// function onScroll(evt) {
//   console.log(evt);
//   count += 1;
//   console.log(count);
// }
 
// ===================================================================

// const input = document.querySelector('input');

// input.addEventListener('input', _.throttle(onInput, 1000, {
//   leading: true,
//   trailing: true,
// }));

// function onInput(evt) {
// console.log(evt.target.value);
// }

// console.dir(_.throttle);

// ===================================================================

// console.log(basicLightbox);

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)

// console.log(instance);
// instance.show()

// console.log(SimpleLightbox);

// new SimpleLightbox('.some a', {});