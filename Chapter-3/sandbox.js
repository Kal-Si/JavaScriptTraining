// for loops

// for(let i = 0; i < 5; i++)
//     {
//         console.log('in loop:', i);
//     }

// console.log('loop finished');

// const names = ['hairy', 'peter', 'parker'];

// for(let i = 0; i < names.length; i++)
//     {
//         //console.log(names[i]);
//         let html = `<div>${names[i]}</div>`;
//         console.log(html);
//     }

// While loops

// const names = ['hairy', 'peter', 'pete']
// let i = 0;

// while(i < 5)
//     {
//         console.log('in loop:', i);
//         i++;
//     }

// let i = 0;
// while(i < names.length)
//     {
//         console.log(names[i]);
//         i++;
//     }


// Do while loop

// let i = 2;

// do
// {
//     console.log('val of i is: ', i);
//         i++;
// }
// while(i < 5);

// if statements

// const age = 25;

// if(age > 20)
//     {
//         console.log('you are over 20 years old');
//     }

// const characters = ['spongebob', 'patrick', 'crabs', 'squidward'];

// if(characters.length > 3)
//     {
//         console.log("thats a lot of characters");
//     }

// const password = 'password1234';

//     if(password.length >= 12)
//         {
//             console.log('That password is strong');
//         }
//     else if(password.length >= 8)
//         {
//             console.log('That password is not long enough!');
//         }
//     else
//         {
//             console.log('password is not long enough!');
//         }

// logical operators - OR || and AND &&

// const password = 'password@1234';

//     if(password.length >= 12 && password.includes('@'))
//         {
//             console.log('That password is strong');
//         }
//     else if(password.length >= 8 || password.includes('@') && password.length > 5)
//         {
//             console.log('That password is not strong enough!');
//         }
//     else
//         {
//             console.log('password is not strong enough!');
//         }

// logical NOT (!)

// let user = false;

// if(!user)
//     {
//         console.log('You must be logged in to continue');
//     }

// break and continue

// const score = [50, 25, 0, 30, 12, 34, 100];

// for(let i = 0; i < score.length; i++)
//     {
//         if(score[i] === 0)
//             {
//                 continue;
//             }

//         console.log('your score: ', score[i]);

//         if(score[i] === 100)
//             {
//                 console.log('you reached the top score');
//                 break;
//             }
//     }

// switch statements
// const grade = 'D';

// switch(grade)
// {
//     case 'A':
//         console.log('You got an A');
//         break;
//     case 'B':
//         console.log('You got an B');
//         break;
//     case 'C':
//         console.log('You got an C');
//         break;
//     case 'D':
//         console.log('You got an D');
//         break;
//     case 'F':
//         console.log('You got an F');
//         break;
//     default:
//         console.log('not valid');
// }

// variables & block scope
// let age = 30;

// if(true)
//     {
//         let age = 40;
//         let name = 'name'
//         console.log('inside 1st code block: ', age, name);

//         if(true)
//             {
//                 let name = 'pete';
//                 console.log('inside 2nd code block: ', age, name)
//                 var test = 'hello';
//             }
//     }

// console.log('outside the code block: ', age, test);

