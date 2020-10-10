let age = Number(prompt("What is your age?");

// If age is negative, print an error message

if(age < 0) {
    console.log('Choose a body to incarnate into');
}

// If age is 21, print 'happy 21st birthday!!'

if(age == 21) {
    console.log('happy 21st birthday!!');
}

// If age is age is odd, print 'your age is odd!'

if(age % 2 === 1) {
    console.log('your age is odd!');
}

// If age is a perfect square, print 'perfect square!'

if(age % Math.sqrt(age) === 0) {
    console.log('perfect square!');
}
