// Esto esta hardcord, es un clusure que cuida el acceso a los datos privados.
const person = () => {
    saveName = "Name"
    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name
        },
    }
}
newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Elieser')
console.log(newPerson.getName())