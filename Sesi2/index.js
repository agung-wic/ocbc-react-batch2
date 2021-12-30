// callback

// // without callback
// function myDisplayer(some) {
//    console.log(some)
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2
//     return sum
// }

// let result = myCalculator(5, 5)
// myDisplayer(result)

// // with callback
// function myDisplayer(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2
//     myCallback(sum)
// }

// myCalculator(5, 5, myDisplayer)
// myCalculator(5, 5, function(value){
//     console.log(value)
// })

// callback vs promise

// // callback style
// setTimeout(function(){
//     myFunction("I love You!!!")
// }, 3000)

// function myFunction(value) {
//     console.log(value)
// }

// // promise style
// let myPromise = new Promise(function(myResolve, myReject){
//     setTimeout(function(){
//         myResolve("I love You!!!")
//     }, 3000)
// })

// myPromise.then(function(value){
//     console.log(value)
// })

// var pageTitleElement = document.getElementById("page-title");

// var pageBoxElement = document.getElementsByClassName("page-box");

// var pageHeadings = document.getElementsByTagName("h1");

// var pageTitleElementContent = pageTitleElement.innerHTML;

// console.log('isi <div id="page-title"> :' + pageTitleElementContent)

// for (var i = 0; i < pageBoxElement.length; i++){
//     var currentPageBoxElement = pageBoxElement[i]
//     var pageBoxElementContent = currentPageBoxElement.innerHTML
//     console.log('isi <div class="page-box"> :' + pageBoxElementContent)
// }




// function buatJanji(message){
//     return new Promise((resolve, reject) =>{
//         if(message == null) return reject('harus diisi')
//         return resolve('berhasil')
//     })
// }

// buatJanji()
// .then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })