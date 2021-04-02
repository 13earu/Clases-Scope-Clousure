// Scope en una function y en un bloke, es simple var asigna valor en una function y let & const adigna solo dentro del bloke >>> {} esto e sun bloke.

//Ahorael siguiente ejemplo con var sirve, pero si cambiamos 2 var por let y const se rompe el codigo.
const fruits = () => {
    if(true){
        var fruits1 = 'apple'
        var fruits2 = 'banana'
        var fruits3 = 'kiwi'
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}
fruits()

// ejemplo como deberia ser con let y const---  El llamado con el console.log debe ser dentro dle mismo bloke en el que se declaran let y const

const fruits = () => {
    if(true){
        let fruits1 = 'apple'
        const fruits2 = 'banana'
        var fruits3 = 'kiwi'
        console.log(fruits1)
        console.log(fruits2)
    } 
    console.log(fruits3)
}
fruits()

// Si en este ejemplo cmabiaramos let por Var el vlaor de var se asignaria a la variable global dandonos un ouput de 2 2

let x = 1
{
    let x = 2
    console.log(x)
}
console.log(x)

//Otra tractica:  Ok con el setTimeout es necesario asignar el valor de i usando let. Perocuandonousoeos si no solo console.log uso var y funciona :V aiudaa!


const anotherFunction = () => {
    for (let i = 0; i<10; i++){
        setTimeout(()=> {
            console.log(i)
        }, 1000)
    }
}
anotherFunction()


const anotherFunction = () => {
    for (var i = 0; i<10; i++){
    console.log(i)
    }
}
anotherFunction()