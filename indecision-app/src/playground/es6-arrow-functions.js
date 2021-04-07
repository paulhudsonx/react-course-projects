const square = function(x) {
    return x * x;
}

/*const squareArrow = (x) => {
    return x * x;
};*/

const squareArrow = (x) => x * x;

console.log(squareArrow(9));


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Paul Hudson'));
console.log(getFirstName2('Paul Hudson'));
