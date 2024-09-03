// const paragraph = document.querySelector('div.error');
// console.log(paragraph);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error')

// paras.forEach(para =>
//     {
//         console.log(para);
//     })

// console.log(paras[2]);
// console.log(errors[0]);

// get an elemet by ID
// const title = document.getElementById('page-title');
// console.log(title);


// get elements by there class name
// const errors = document.getElementsByClassName('error')
// console.log(errors);

// get element by there tag name
// const tag = document.getElementsByTagName('p');
// console.log(tag);
// console.log(tag[2]);

//const paragraph = document.querySelector('p');
//console.log(paragraph.innerText);

// paragraph.innerText += ' womp womp';
// console.log(paragraph.innerText);

//const para = document.querySelectorAll('p');

// para.forEach(paragraph => 
//     {
//         console.log(paragraph.innerText);
//         paragraph.innerText += ' new text';
//     })

//const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML = '<h2>This is a new H2</h2>';

// const people = ['random1', 'random2', 'random3'];

// people.forEach(person =>
//     {
//         content.innerHTML += `<p>${person}</p>`;
//     });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.youtube.com');
// link.innerText = 'Youtube';

// const msg = document.querySelector('p');

// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');

// title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'blue';
// title.style.fontSize = '60px';
// title.style.margin = '';

const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');