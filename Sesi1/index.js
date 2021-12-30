// // variable declaration using let
// let playerName = "Agung";
// console.log(playerName);
// playerName = "Wicaksono";
// console.log(playerName)

// // manipulate string data type
// console.log("I"+" Love"+" myself")

// let kalimat = "This"
// kalimat = kalimat + " is "
// kalimat = kalimat + " Javscript."
// console.log(kalimat)

// let first = "Modern"
// let second =  "Javascript"
// console.log(`${first} ${second}`)

// // array declaration
// let arr_bil = [1,2,3,4,5]
// let arr_str = ["Y", "You", "You are so bad!"]
// let arr_bol = [true, false, false, true]
// // array operation using PUSH
// arr_bil = [10, 29, 2, 3]
// console.log(arr_bil)
// arr_bil.push(24)
// console.log(arr_bil)
// // array operation using shift
// const array1 = [1,2,3]
// const firstElement = array1.shift()
// console.log(array1)
// console.log(firstElement)
// // array operation using unshift
// const array2 = [1,2,3]
// console.log(array2.unshift(4, 5))
// console.log(array2)
// // array operation using splice
// const months = ['Jan', 'March', 'April', 'June']
// months.splice(1, 0, 'Feb')
// console.log(months)
// months.splice(4, 1, 'May')
// console.log(months)
// multidimension array
// let arr = [
//     [1,2,3],
//     [7,3],
//     [81,8,100,30]
// ]
// console.log(arr)

// arr[0].shift()
// console.log(arr)

// arr[1].unshift(4, 5)
// console.log(arr)

// // this keyword
// let counter = {
//     val: 0,
//     increment: function(){
//         this.val += 1
//     }
// }

// console.log(counter)

// counter.increment()

// console.log(counter)


// // Traditional function with no argument
// let a = 4
// let b = 2
// function hallo() {
//     return a + b + 100;
// }

// // arrow function with no argument
// let hello = () => a + b + 100

// // Traditional function
// function hi(a) {
//     return a + 100
// }

// // arrow function

// // first method
// let hy = (a) => { return a + 100 }

// // second method
// let he = (a) => a + 100

// // third method
// let hei = a => a + 100

// // class
// class Polygon {
//     constructor(height, width) {
//         this.area = height * width
//     }
// }

// console.log(new Polygon(4, 3).area)

// // another way to make class
// let pol = new Polygon(3,4)
// console.log(pol.area)

// // object declaration 1
// let obj1 = {
//     nama: "Agung",
//     umur: 22
// }

// // object declaration 2
// let obj2 = {}
// obj2.nama = "Wicaksono"
// obj2.umur = 22

// console.log(obj1)
// console.log(obj2)

// console.log(obj1.nama)
// console.log(obj2.umur)

// // destructuring object
// const user = {}
// user.name = 'Agung Wicaksono'
// user.handle = '@agungwicaksono'
// user.location = 'Madiun, Indonesia'

// // // extraction
// // const name = user.name
// // const handle = user.handle
// // const location = user.location
// // console.log(name, handle)

// // new way
// const { name, handle, location} = user
// console.log(name, handle, location)

// // destructuring function result
// const getUser = () => {
//     return {
//         name: 'Agung Wicaksono',
//         handle: '@agungwicaksono',
//         location: 'Madiun, Indonesia'
//     }
// }

// // extraction
// const { name, handle, location} = getUser()
// console.log(name, handle, location)

// // destructuring array
// let spec = ['Mercedes Benz', 'Mercy', 'GLA 200']

// let [brand, short_name, type] = spec
// console.log(brand, short_name, type)

// let arr = [0, 1, 2, 3, 4, 5]

// arr.shift()

// console.log(arr)

// destruc object with same property using alias method
// example : const {property: alias} = object
// console.log(alias)
const getUser = () => {
    return {
        name: 'Agung Wicaksono',
        handle: '@agungwicaksono',
        location: 'Madiun, Indonesia'
    }
}
const getAdmin = () => {
    return {
        name: 'Affan Wicaksono',
        handle: '@affanwicaksono',
        location: 'Surabaya, Indonesia'
    }
}

const { name, handle, location} = getUser()
console.log(name, handle, location)
const { name: adminName, handle: adminHandle, location: adminLocation} = getAdmin()
console.log(adminName, adminHandle, adminLocation)

