# Alumnos de una facultad - Ejemplo puro en MongoDB

## Objetivo
muestra cómo generar una [base de alumnos que cursan materias de una facultad](https://github.com/uqbar-project/eg-alumnos-mongodb/wiki/Enunciado-Alumnos) en MongoDB.

## Modelo
El modelo de datos se estructura en un documento que contiene: 

* el nombre de la materia, 
* el curso 
* y un alumno del cual conocemos 
 * su nombre 
 * y los parciales (nota y fecha del examen).
 
## Instalación
Hay dos archivos que contienen scripts para ejecutar directamente en una base MongoDB:

* [Insert alumnos](scripts/01_insert.js) permite generar un juego de datos con dos cursos de Diseño de Sistemas
* [Queries alumnos](scripts/02_queries.js) resuelve 5 requerimientos (cada uno se explica dentro del mismo archivo). Se puede copiar y pegar en un shell de Mongo uno por uno.

![video](video/demo.gif)
