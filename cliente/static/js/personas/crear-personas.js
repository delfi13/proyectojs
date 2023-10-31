const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const edad = document.querySelector('#edad')
const botonCrear = document.querySelector('#botonCrear')



botonCrear.addEventListener('click', (e) => {
    e.preventDefault()
    const crearPersona = {
        nombre : nombre.value,
        apellido : apellido.value,
        edad : edad.value
      }
   fetch ('http://localhost:3000/personas', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(crearPersona)
    }
    ).then(response => (window.location.replace('./index.html'))
)}
)



