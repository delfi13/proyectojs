const spanNombre = document.querySelector("#span-Nombre")
const spanApellido = document.querySelector("#span-Apellido")
const spanEdad = document.querySelector("#span-Edad")


const personaID = localStorage.getItem("id")

async function cargarPersona (){
    let persona = await fetch(`http://localhost:3000/personas/${personaID}`)
    .then (response => response.json())
    .then (data => {
        return data
    })
    return persona
}




 async function verPersona (){ 
    cargarPersona()
    .then (persona => {
    spanNombre.textContent = persona.nombre
    spanApellido.textContent = persona.apellido
    spanEdad.textContent = persona.edad

    })
}
cargarPersona()
verPersona()