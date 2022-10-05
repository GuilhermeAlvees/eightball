let userName = ('Guilherme');

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = ('Will the person reading this sentence give me a new job?');

console.log(`${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(`${randomNumber}`);

let eb = '';

switch (randomNumber) {
   case 0:
eb = 'Sure'
    break;
  case 1:
eb = 'Yes'
    break;
     case 2:
eb = 'Of course!!!'
    break;
     case 3:
eb = 'You start tomorrow'
    break;
     case 4:
eb = 'Going to thing'
    break;
     case 5:
eb = 'Obvious'
    break;
     case 6:
eb = 'The job is your'
    break;
     case 7:
eb = 'I can pay to you only $1000000'
    break;
     case 8:
eb = 'No'
    break;
}
console.log(`Your quest: ${eb}`);