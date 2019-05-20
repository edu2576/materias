const cursos = require('./curso');
const argv = require('yargs').argv;
const fs = require('fs');

var id = argv.id;
var nombre = argv.nombre;
var cedula = argv.cedula;
var interesado = argv.interesado;

let buscar = () => {

    let asignatura = cursos.materia.find(curso => curso.id === id);
    if(asignatura)
    {
        let texto = "La materia "+ asignatura.nombre+
                    " de id "+asignatura.id+
                    " tiene una duracion de "+asignatura.duracion+
                    " y un costo de "+asignatura.costo+"."+'\n'+
                    "El nombre del interesado es "+ nombre +
                    " y su cédula es "+cedula+".";

        fs.writeFile('descripcion.txt', texto, (err) => {
            if(err) throw(err);
            console.log("El archivo se ha generado correctamente.")
        });
    }
    else
    {
        console.log('Error: El id '+id+' no existe en la base de datos de materias, por favor digite otro id.')
    }

    if(interesado == 'inscribir')
    {
        console.log("La inscripción se ha realizado correctamente.")
    }
    else
    {
        cursos.listar();
    }
}

buscar();
