


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
             <button class = "botonVer"> Ver </button>
            </a>
            </td>
        </tr>
        `
    })
    botonVer(personas)
 })
}


function botonVer (personas){
    let  btnsVer = document.querySelectorAll('.botonVer')

    for (let i = 0; i < btnsVer.length; i++){
        btnsVer[i].addEventListener('click', () => {
            localStorage.setItem('id', personas[i]._id)
        })
    }
}



tablaPersonas()