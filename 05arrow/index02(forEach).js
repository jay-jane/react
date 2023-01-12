
let arr = ["a", "b", "c", "d"];
arr.forEach(function(value, index, arr) {
    console.log(`값 : ${value}, 인덱스 : ${index}, 현재 배열 : ${arr}`);
}, );

arr.forEach(function(value) {
    console.log(value);
});

arr.forEach((value, index, arr) => console.log(value, index, arr));
arr.forEach(value => console.log(value));
