// // Functions declaration

// function greet()
// {
//     console.log('random');
// }


// //function expression
// const speak = function()
// {
//     console.log('random 2')
// };

// greet();
// speak();

//arguments & parameters

// const speak = function(name = 'ron', time = 'morning')
// {
//     console.log(`good ${time} ${name}`);
// };

//speak('peter', 'night');
//speak();

//returning values

// const calArea = function(radius)
// {
//      return 3.14 * radius**2;
// }

// const area2 = calArea(5);    
// console.log(area2);

// regular function
// const calArea = function(radius)
// {
//      return 3.14 * radius**2;
// }

//arrow function
// const calArea = (radius) => 3.14 * radius**2;


// const area = calArea(5);
// console.log('area is:', area);

//practice arrow functions

// const greet = function()
// {
//     return 'hello world';
// }

// const greet = () => 'hello world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax)
// {
//     let total = 0;
//     for(let i = 0; i < products.length; i++)
//         {
//             total += products[i] + products[i] * tax;
//         }
//     return total;
// }

// const bill = (products, tax) => 
//     {
//         let total = 0;
//         for(let i = 0; i < products.length; i++)
//             {
//                 total += products[i] + products[i] * tax;
//             }
//         return total;
//     }

// console.log(bill([10,15,30], 0.2));

// const name = 'ron';

// //functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks & foreach

// const myFunc = (callbackFunc) => 
//     {
//         let value = 50;
//         callbackFunc(value);
//     };

//     myFunc(value => {
//         console.log(value);
//     });

// let people = ['ron', 'pete', 'petter', 'sonic'];

// const logPerson = (person, index) => 
//     {
//             console.log(`${index} - hello ${person}`);
//     };

// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['ron', 'jon', 'don', 'peter', 'pete'];

let html =``;

people.forEach(person => 
{
    html += `<li style = "color: green">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;