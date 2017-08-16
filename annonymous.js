function sayHello(sayGoodbye) {
	console.log('hello');
	sayGoodbye();
}

sayHello(function sayGoodbye(){
console.log('sayGoodbye')
});
//sayHello();
//sayGoodBye();
