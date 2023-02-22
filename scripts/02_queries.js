// 1 Estudiantes del curso K3053
db.estudiantes.find({"curso": "K3053"}).pretty()

// 2 Estudiantes cuyo nombre es > "V"
db.estudiantes.find({"alumno.nombreApellido": { "$gt": "V"}})

// 3 quiénes aprobaron un parcial
db.estudiantes.find({"alumno.parciales.parcial.nota": { "$gt": "3" }})

// 4 qué estudiantes se llaman Sebastián
db.estudiantes.find({ "alumno.nombreApellido": /.*Sebastian.*/})

// 5 quiénes aprobaron el primer parcial
db.estudiantes.find(
    { $and: [
        { "alumno.parciales.0.parcial.nota": { $gte: "4" } },
        { "alumno.parciales.0.parcial.nota": { $lt: "A" } }
      ]
    }
)
