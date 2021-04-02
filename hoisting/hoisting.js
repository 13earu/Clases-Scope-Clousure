//el hositing funciona en declaraciones

a = 2
var a
console.log(a) // ouput 2


console.log(a)
var a = 2 //undefine


// oc, si yo llamo la linea #16 antes de escribir la function, el ouput sigue siendo "pepe" *0* 
function nameOfDog (name) {
    console.log(name)
}
nameOfDog('pepe')