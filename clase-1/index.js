const nombre = [
    {
        name: "sorido0"
    },
    {
        name: "Darlin"
    },
    {
        name: "Maicol"
    }
]

// nombre.map(
//     nombr => console.log(nombr)
// )

let resul = nombre.filter(
    nombr => nombr.name === "sorido0"
)
console.log(resul)