let name = 'Harry Potter'; //string
let age = '1'; //string
let option = true; //boolean
let height; //undefined
let eyecolour = null; //null

console.log(name);
console.log(age);
console.log(option);
console.log(height);
console.log(eyecolour);

//arrays
let shopping = [];
shopping = ['paintBrush', 'colorpPalette', 'canvas'];
console.log(shopping);

let numbers = [];
numbers = [1,3,2,5,7,4];
console.log(numbers[0] + numbers[1]);
console.log(numbers.sort());
numbers.push(6);
console.log(numbers);

let mix = [];
mix = ['one', 1, 'two', 2];
console.log(mix);


//objects
let pen = {
	type: 'ballpoint',
	color: 'black',
	cost: 10
};

console.log(pen.cost);


//functions
function product(a,b){
	return a*b;
}

let x = product(5,10);
console.log(x);


//conditional statements
let numbers = [];
numbers = [1,2,1,2,3,2,3,1];
if(numbers[0] == numbers[2]){
	console.log('correct');
}
else{
	console.log('wrong');
}


//loops
let i = 0;
while(i < 5){
	console.log(i);
	i++;
}

for(let i=0; i<5; i++)
	console.log(i);
