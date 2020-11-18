var exercise = function (workout) {
    return (`Today workout: ${workout} `)
};
var run = function () {
    return exercise(`running`);
}

var swim = function () {
    return exercise(`swimming`);
}
console.log(run());
console.log(swim());



// run = function () {
//     return "Today's exercise running";
// }
// console.log(run());


// swim = () => {
//     return "Today's exercise swimming"
// }

// console.log(swim());
