# Estudiantes de una facultad - Ejemplo puro en MongoDB

[![build-estudiantes](https://github.com/uqbar-project/eg-alumnos-mongodb/actions/workflows/build.yml/badge.svg)](https://github.com/uqbar-project/eg-alumnos-mongodb/actions/workflows/build.yml)

## Objetivo

Muestra cómo generar una [base de estudiantes que cursan materias de una facultad](https://github.com/uqbar-project/eg-alumnos-mongodb/wiki/Enunciado-Alumnos) en MongoDB.

## Instalación

Solo hace falta tener instalado algún Desktop de Docker (el pack docker engine y docker compose), seguí las instrucciones de [esta página](https://phm.uqbar-project.org/material/software) en el párrafo `Docker`.

```bash
docker compose up
```

Para más detalle, seguí [estos pasos](https://github.com/uqbar-project/eg-viajes-mongodb). Tenés [este archivo para definir la conexión en Studio 3T](./Studio_3T_Connection_URI_Export.uri)

## Modelo

El modelo de datos se estructura en un documento que contiene: 

* el nombre de la materia, 
* el curso 
* y un alumno del cual conocemos 
 * su nombre 
 * y los parciales (nota y fecha del examen).
 
## Scripts

Podés fijarte en la carpeta [scripts](scripts) los queries que podés ejecutar.
