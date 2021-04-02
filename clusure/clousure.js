// estor construyendo una alcansia, y con esta logica no se guardan las "monedas " que deposito.
const alcansia = (monedas) => {
    var ahorros = 0
    ahorros += monedas
    console.log(ahorros)
}
alcansia(5)
alcansia(7)

//esta version si hara que las monedas se guarden

const alcansia = () =>{
    var ahorro = 0
    const contador = (monedas) =>{
        ahorro += monedas
        console.log (ahorro)
    }
    return contador
}
let miAlcancia = alcansia()
miAlcancia(9)
miAlcancia(18)