// let obj1={
//     name:'abc',
//     age:22
// }
// let obj2=obj1
// obj2.name='xyz';
//  console.log(obj1.name)

// if(1){
//     console.log('true')
// }
// else{
//     console.log("false");
// }

// console.log(5+'5');
// console.log(5-'5');
// console.log(5==='5');

// let arr=[1,'new',2,'3']
// console.log(arr);

// let mark=30
// if(mark>=40){
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }

// let result = mark >= 40?'pass':'fail'
// console.log(result);

// console.log(10^6)

function add(a, b) {
  console.log(a + b)
}
const sub = (a, b) => {
  console.log(a - b)
}
const mul = (a, b) => {
  console.log(a * b)
}

const calc = (a, b, fun) => {
  fun(a, b)
}
// calc(4,3,add)

let num = [2, 3, 4, 5, 6, 7, 8]
let obj = {
  name: 'abc',
  state: {
    city: 'ASD',
  },
  age: 22,
}

// console.log(obj?.state?.city)
// // for(let index in obj){
// //     console.log(index);
// // }

// const addone=(num)=>{return num+1}
// let res=arr.map(addone)

// let double=arr.map((num)=>num*2)
// console.log(double)

// let productName=products.map((product)=>{console.log(product.name)})

// let b=arr.filter((num)=>num%2)
// console.log(b);

// let product=products.filter((p)=>p.price>6000)
// console.log(product)

// let arr=[1,2,3,4,5,6]
// let sum=arr.reduce((total,curr)=>{ return total+curr},0)
// console.log(sum);
// let products=[
//     {id:1,name:'laptop',price:25000},
//     {id:2,name:'mobile',price:9500},
//     {id:3,name:'keyboard',price:2000},
// ]

// let a=products.find((p)=>p.id==2)
// console.log(a);

// let totalPrice = products.reduce((total, curr) => {
//   return total + curr.price
// }, 0)
// console.log(totalPrice);

// let arr1=[11,22,33,44,55]
// let [first,...other]=arr1
// console.log(other)

// let arr2=[66,77]
// let arr3=[...arr1,...arr2]
// console.log(arr3);

// let [x,,b]=arr1
// console.log(b)

// let student={
//     name:"xyz",
//     department:"CSE",
//     age:22
// }
// const {name,department}=student
// console.log(name,department);

let car={
    brand:"BMW",
    year:2024
}
let  newCar={...car,year:2026}
console.log(newCar);

// const promise = new Promise((resolve, reject) => {
//   let success=false
//   if(success){
//     resolve("data received successfully")
//   }else{
//     reject("error fetching data")
//   }
// })
// promise.then((data) => console.log(data)).catch((error) => console.log(error))


async function fetchData(){
    try {
        const res =await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await res.json()
        data.map((user)=>console.log(user.email))

    } catch (error) {
        console.log(error)
    }
}
// fetchData()

console.log('hello');

setTimeout(()=>{
  console.log("will log after 2 seconds")
},0)

console.log('end')

