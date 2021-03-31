const fruits = () => {
    var fruit = 'apple'
    console.log(fruit)
}
fruits()
console.log(fruit)

//Reasignando valor de VAR en una fuction, es recomendable usar let para ebitar comerter errores de reasignacion de variables.
const anotherFunction = () => {
    var x = 1
    var x = 2
    let y = 1
    console.log(x)
    console.log(y)
}
anotherFunction()
