// 1 Alumnos del curso K3053
db.alumnos.find({"curso": "K3053"}).pretty()

// 2 Alumnos cuyo nombre es > "V"
db.alumnos.find({"alumno.nombreApellido": { "$gt": "V"}})

// 3 quiénes aprobaron un parcial
db.alumnos.find({"alumno.parciales.parcial.nota": { "$gt": "3" }})

// 4 qué alumnos se llaman Sebastián
db.alumnos.find({ "alumno.nombreApellido": /.*Sebastian.*/})

// 5 quiénes aprobaron el primer parcial
// Transformamos la lista de alumnos en uno que contenga el nombre del alumno + la nota del primer parcial
let primerParcial = function() {
    const nota = this.alumno.parciales[0].parcial.nota
    if (nota > 4) {
        emit(this.alumno.nombreApellido, nota)
    }
}

let resumenAlumnos = function(nombre, nota) {
    return {
        nombre: nombre,
        nota: nota
    }
}
                    
db.alumnos.mapReduce(primerParcial, resumenAlumnos, { out: 'alumnosPrimerParcial' })

// TODO: Lograr que ande con arrow functions

db.alumnosPrimerParcial.find()

