const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    nombre: { type: String, required: true} , 
    apellido:  {type: String, required: true} ,
    edad: {type: Number, required: true},
})

const Persona = mongoose.model('Persona', PersonaSchema);


module.exports = Persona;