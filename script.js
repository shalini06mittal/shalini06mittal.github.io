
// console.log('1')
// setTimeout(()=>console.log('2'), 2000)
// console.log('3')
const arr = ["hey","good morining","dude"];
// var i=0,x=0;
// var interval = setInterval(function(){ 

// console.log(arr[i]); 
// i++;
// if(x==arr.length-1){
// clearTimeout(interval);
// }
// x++;
// }, 3000);

// function countNumber() {
//     var arr = []
//     for (var i = 0; i < 5; i++) {
//         arr[i] = function () { return i; }
//     }
//     return arr;
// }
// let callArr = countNumber()
// console.log(callArr[0]())
// console.log(callArr[1]())
// console.log(callArr[2]())


// function countNumber1() {
//     function getNumber(no) {
//         return function () {
//             return no;
//         }
//     }
//     var arr = []
//     for (var i = 0; i < 5; i++) {
//         arr[i] = getNumber(i);
//     }
//     return arr;
// }
// let callArr1 = countNumber1()
// console.log(callArr1[0]())
// console.log(callArr1[1]())
// console.log(callArr1[2]())

function print(msg)
{
    return function()
    {
        console.log(msg)
    }
}
arr.forEach(element => {
    setInterval(() => {
        print(element)()
    }, 2000);    
});
