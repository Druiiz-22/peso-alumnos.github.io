//Arreglo para almacenar el peso de todos los alumnos
let alumnos = []

/**
 * Función para agregar el peso del alumno ingresado por el input
 */
const agregar = function () {

    //Obtener el valor en el input
    const txtPeso = document.getElementById("txtPeso").value;
    const peso = Number(txtPeso)

    //Validar que el peso ingresado sea mayor a 0
    if (peso > 0) {

        //Agregar el peso del alumno nuevo
        alumnos.push(peso)

        //Mostrar mensaje de éxito
        alert(`Peso del alumno ${alumnos.length} fue agregado exitosamente.`)

        //Reescribir el label para mostrar el número del alumno nuevo que se le agregará su peso
        document.getElementById("lblPeso").innerText = `Ingrese el peso del alumno ` + (alumnos.length + 1) + `:`

        //Vaciar el input
        document.getElementById("txtPeso").value = "";
        //Enfocar el input
        document.getElementById("txtPeso").focus();

    } else {
        //Mensaje de error
        alert("¡El peso ingresado es inválido!\nVuelva a ingresar el peso.");
        //Vaciar el input
        document.getElementById("txtPeso").value = "";
        //Enfocar el input
        document.getElementById("txtPeso").focus();
    }
}


/**
 * Función para calcular el peso de los alumnos
 */
const calcular = function () {

    //Obtener la cantidad de alumnos registrados
    const cantidad = alumnos.length

    //Validar que exista al menos 1 alumno registrado
    if (cantidad > 0) {

        //================================== DIVIDIR LOS GRUPOS POR PESO  ==================================
        //Primer grupo para contar los alumnos que 
        //pesan menos de 40kg
        let grupoUno = 0

        //Segundo grupo para contar los alumnos que 
        //pesan entre 40kg y menos de 50kg
        let grupoDos = 0

        //Tercer grupo para contar los alumnos que
        //pesan entre 50kg y menos de 60 kg
        let grupoTres = 0

        //Cuarto grupo para contar los alumnos que
        //pesan 60kg o más
        let grupoCuatro = 0

        //CICLO FOREACH para calcular los pesos de los alumnos
        alumnos.forEach(alumno => {

            //validar si el peso es menor de 40 kg
            if (alumno < 40) grupoUno++;
            //Validar si el peso está entre 40 y 49 kg
            else if (alumno >= 40 && alumno < 50) grupoDos++;
            //Validar si el peso está entre 50 y 59 kg
            else if (alumno >= 50 && alumno < 60) grupoTres++;
            //Validar si el peso es 60 o mayor
            else if (alumno >= 60) grupoCuatro++;

        });

        //================================== MOSTRAR ELEMENTOS BÁSICOS  ==================================
        //Elemento padre que contendrá los cálculos
        const boxCalculos = document.getElementById('calculos')
        boxCalculos.innerText = ""
        //Elemento para una barra <hr>
        const barra = document.createElement('hr')
        //Elemento para un subtitulo <h2>
        const subtitulo = document.createElement('h2')
        //Elemento para un sub-subtitulo <h3> que mostrará la cantidad de alumnos
        const cantidadAlumnos = document.createElement('h4')

        //AGREGAR LOS ELEMENTOS
        //Agregar la barra
        boxCalculos.appendChild(barra)

        //Agregar el subtitulo
        subtitulo.innerText = "Resultados"
        boxCalculos.appendChild(subtitulo)

        //Agregar la cantidad de alumnos
        cantidadAlumnos.innerText = `Cantidad de alumnos: ${cantidad}\n`
        boxCalculos.appendChild(cantidadAlumnos)

        //================================== MOSTRAR LOS CÁLCULOS  ==================================
        //Resultados de la probabilidad        
        const probabilidadUno = (grupoUno / cantidad) * 100
        const probabilidadDos = (grupoDos / cantidad) * 100
        const probabilidadTres = (grupoTres / cantidad) * 100
        const probabilidadCuatro = (grupoCuatro / cantidad) * 100

        //Elementos de parrafo <p> para mostrar los cálculos
        const resultadoUno = document.createElement('p')
        const resultadoDos = document.createElement('p')
        const resultadoTres = document.createElement('p')
        const resultadoCuatro = document.createElement('p')

        //Asignarle la cantidad de alumnos y la probabilidad con un máximo de 2 decimales
        resultadoUno.innerText = `Alumnos de menos de 40 Kg: ${grupoUno} alumnos (${probabilidadUno.toFixed(2)}%)`
        resultadoDos.innerText = `Alumnos entre 40 y menos de 50 kg: ${grupoDos} alumnos (${probabilidadDos.toFixed(2)}%)`
        resultadoTres.innerText = `Alumnos entre 50 y menos de 60 Kg: ${grupoTres} alumnos (${probabilidadTres.toFixed(2)}%)`
        resultadoCuatro.innerText = `Alumnos de 60 kg o más: ${grupoCuatro} alumnos (${probabilidadCuatro.toFixed(2)}%)`

        //Agregar los parrafos
        boxCalculos.appendChild(resultadoUno)
        boxCalculos.appendChild(resultadoDos)
        boxCalculos.appendChild(resultadoTres)
        boxCalculos.appendChild(resultadoCuatro)


    } else {
        //Mensaje de error
        alert("¡Debe haber al menos 1 alumno registrado!\nIngrese el peso del primer alumno.");
        //Enfocar el input
        document.getElementById("txtPeso").focus();
    }

}

/**
 * Oyente del teclado para que, cuando se presione Enter, se agregue el peso al alumno
 */
document.addEventListener('keypress', (event) => {

    if (event.key == 'Enter') agregar();

}, false);