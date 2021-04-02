// hambito lexico aplicado e un clousure, importante recordar: la asginacion de la linea 10, noentiendopara que se usa, osea si pero no profondiso aun en el conosimiento de lso jedy
const buildCount = (i) => {
    let count = i
    const displayCount = () =>{
        console.log(count++)
    }
    return displayCount
}

const myCount = buildCount(1)
myCount()
myCount()
myCount()

const myOtherCount = buildCount(10)
myOtherCount()
myOtherCount()
