const helloWorld = () => {
    const hello = 'hello world'
    console.log(hello)
}
helloWorld()
console.log(hello)


var scope = 'Im global'
const functionScope = () => {
    var scope = 'now Im local var'
    const func = () => {
        return scope
    }
    console.log(func())
}
functionScope()


var scope = 'Im global'
const functionScope = () => {
    var scope = 'now Im local var'
    console.log(scope)
}
functionScope()