// este e sun ejemplo de un clousure crado por error, si en la linea 3 del codigo remplazamos var por let, el alcance del mismo cambiaria y el ouput cambiaria.
const anotherFunction = () => {
    for (var i = 0; i<10; i++){
        setTimeout(()=> {
            console.log(i)
        }, 1000)
    }
}
anotherFunction()