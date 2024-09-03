// let age = 25;
// let year = 2019;

// console.log(age, year);

// age = 30; 
// console.log(age);

// const points = 100;

// console.log(points);

// var score = 75;
// console.log(score);

// //strings
// console.log('hello, world');

// let email = 'mario@gmail.com'
// console.log(email);

// //string concatenation(joining things together)
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters
// console.log(fullName[0]);

// //string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// //common string methods

// let email2 = 'mario@gmail.com';

// // let result2 = email2.slice(0, 5);

// //let result2 = email2.substring(4,10);

// //let result2 = email2.replace('m', 'w');

// let result2 = email.replace('o', 'w');

// console.log(result2);

// let radius = 10;
// const pi = 3.14;

// //console.log(radius, pi);

// //math operators +, -, *, /, **, %

// // console.log(10 / 2);
// // let mathResults = radius % 3;
// // let mathResults = pi * radius**2;

// //order of operation - BEDMAS

// // let mathResults = 5 * (10-3)**2;

// // console.log(mathResults);

// let likes = 10;

// // likes = likes + 1;
// // likes++;
// // likes--
// // likes += 10;
// // likes -= 5;
// // likes *= 2;
// // likes /= 2;

// // console.log(likes);

// //NaN - not a number

// // console.log(5 / 'hello');
// // console.log(5 * 'hello');

// let result3 = 'the blog has ' + likes + ' likes';
// console.log(result3);

//template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// //concatenation way
// // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// // console.log(result);

// //template string way
// let results = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(results);

// //creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// let ninjas = ['jay', 'cole', 'zane'];

// ninjas[1] = 'kai';
// console.log(ninjas[1]);

// let ages = [20,25,30,35]s;
// console.log(ages[2]);

// let random = ['shawn', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let results = ninjas.join(',');
// let result = ninjas.indexOf('zane');
// let result = ninjas.concat(['red', 'green'])
// let result =  ninjas.push('white');
// result = ninjas.pop();

// console.log(result);

// let age = null;

// console.log(age, age + 3, 'the age is ${age}');



// booleans & comparisons
// console.log(true, false, "true", "false");

//methods can return booleans
// let email = 'somerandom@gmail.com';
// let name = ['mario', 'luigi', 'toad'];

// let results = email.includes('@');
// let results = names.includes('luigi');

// console.log(results);

//comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);

// let name = 'shawn';

// console.log(name == 'shawn');
// console.log(name == 'Shawn');
// console.log(name > 'crystal');
// console.log(name > 'Shawn');
// console.log(name > 'Crystal');

// let age = 25;

//loose comparison (diffferent types can still be equal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//type conversion
// let score = '100';

//score = Number(score)
// console.log(score + 1);
// console.log(typeof score);

// let results = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean('0');

// console.log(result, typeof result);