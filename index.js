const fs = require("fs")
const gatiteame = require ("cat-me")
const identikit = require("./identikit.js")

const {name, surname, age} = identikit.identikit
const fileData = `Buenas! Soy ${name} ${surname}, tengo ${age} años.`

console.log(gatiteame());

fs.writeFile("identikit.txt", fileData, () => {
  console.log("Se creó 'identikit.txt' exitosamente.");
})