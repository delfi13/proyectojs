


async function cargarPersona(){
    let personas = await fetch('http://localhost:3000/personas')
    .then (response => response.json())
    .then (data => {
        return data
    })
    return personas
}

const tbody = document.querySelector('tbody')


async function tablaPersonas(){
 cargarPersona().then (personas => {
    tbody.innerHTML = ''
    personas.forEach(persona => {
        tbody.innerHTML += `
        <tr>
            <td> ${persona.nombre} </td>
            <td> ${persona.apellido} </td>
            <td> ${persona.edad} </td>
            <td>
            <a href = "./crear-personas.html">
             <button id = "botonCrear"> Crear </button> 
            </a>
            <a href = "./ver-persona.html">
             <button id = "botonVer"> Ver </button>
            </td>
        </tr>
        `
    })
 })
}
tablaPersonas()