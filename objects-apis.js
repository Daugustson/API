// Objects, Interfaces, and API's


//let dog = {
	//name: "Steve",
	//color: "brown",
	//breed: "Pug",
	//size: "Small",
	//bark: function("Bark!") {
	//	console.log("Bark!");

//	},

//};

//dog.bark();

function x(y) {
	y.num = y.num + 5;
	console.log(y);
}
//Passed in by value
//let y = 5;

//passed in by ref.
let y = {
	name: "Tom",
	num: 10,
};
x(y);
console.log(y);
