const fs = require ('fs');

function escribir(data) {

fs.writeFile("./contactos/contacs.json", JSON.stringify(data), (error)=>{
    if (error) {
        throw error;
    }
    console.log("archivo creado");
  
})
}

function leer() {
let contactos = fs.readFileSync("./contactos/contacs.json", 'utf-8');
  console.log(contactos)
  try {
    contactos = JSON.parse(contactos)
  } catch (error) {
    //console.log(error)
  }
  return contactos

}

module.exports = {leer, escribir}