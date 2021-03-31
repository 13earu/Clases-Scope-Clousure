var hello = 'hello'
let world = 'hello world'
const helloWorld = 'Hello world constante'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()


// aOther MALA PRACTICA

const helloWorld = () => {
    globalVar = 'im global'
}
helloWorld()
console.log(globalVar)

const anotherFunction = ()  => {
     var localVar = globalVar = 'Im Global'
 }
anotherFunction()
console.log (globalVar)
