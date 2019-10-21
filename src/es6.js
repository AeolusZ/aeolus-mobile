// function hello(name='hh') {
//     console.log(`hello ${name}`)
// }
// const hello1 = (name='xiaohua') => {
//     console.log(`hello ${name}`)
// }
// hello()
// hello('xixi')
// hello1()
// hello1('mingming')

// const hello2 = (name1, name2) => {
//     console.log(`${name1} xxxx ${name2}`)
// }
// const arr = ['xiao', 'he']
// hello2.apply(null, arr)
// hello2(...arr)

// obj= {name: 'wsl', age: 30}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const name = 'wsl'
// const obj = {}
// obj[name] = 30
// console.log(obj)

// const obj1 = {
//     name,
//     [name]: 30
// }
// console.log(obj1)

// const  arr = ['hello1', 'hello2']
// const [arg1, arg2] = arr
// console.log(arg1, arg2)

const obj={name: 'wsl', age: 30}
const {name, age} = obj
console.log(name, age)
