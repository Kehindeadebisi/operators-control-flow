let subjects = {'Science': [' Physics', ' Chemistry', ' Biology', ' Technical Drawing'], 
'Social' : ['Accounting', ' Commerce', ' Marketing', ' Geography'],
'Arts' : [' Government', 'Economics', 'Literature', 'History'],
'General': [' English', ' Mathematics']
};

let studentName = 'Bolatito'
let choice = 'Science';

if (choice == 'Art') {
    console.log ('Hi ' + studentName+', your subjects are: ' + subjects.Arts);
}
else if (choice == 'Science') {
    console.log('Hi ' + studentName+', your subjects are: ' + subjects.Science);
}
else if (choice == 'Social Science') {
    console.log('Hi ' + studentName+', your subjects are: ' + subjects.Social);
}
else {
    console.log('Hi ' + studentName+', your subjects are: ' + subjects.General);
}

/* let i = 1;
let l = 5;
while(i < 5) {
    console.log(i);
    i++
};

let sum = 0;
for (let i = 0; i < 20; i++)
{
    sum+= i;        
}
console.log(sum);

let add = 0;
let num = 0;

while (num < 20) {
    add += num;
    num++
}
console.log(add);
**/
let sumNumber = 0;
let number = 10;
while (number < 20) {
    sumNumber += number;
    number++;
    if (number > 15) {
        break;
    }
}
console.log(sumNumber);

for (let i = 0; i < 5; i++)
{
    if (i == 4){
        continue;
    }
    console.log(i);
};

let num = 40;
let exp = 1;
let pwr = 0; 

while (pwr < num){
    pwr = 2**exp;
    exp++;
    if (pwr >= num){
        break;
    }
}
if (pwr < num)
{
    console.log('The number ' + pwr + ' is is the power of 2 nearest to ' + num);
}
else {
    console.log('The number ' + pwr * 2**(-1) + ' is is the power of 2 nearest to ' + num);
}

//5

/**let num = 40;
let exp =2;
let pwr = 2 ** (exp-1);
fo

if (num % 2 == 0) {
    console.log('The number ' + pwr + ' is is the power of 2 nearest to ' + num)
}
 else {
    console.log('The number ' + num + ' is not an even number')
 }



**/