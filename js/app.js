"use strict";

/**
 * array.push() Carga un elemento en un array
 */

// De la siguiente forma podemos cargar elementos teniendo el enlace
// de script en el head, debemos colocar todo dentro de la función
// para que se ejecute correctamente
let numeros = [3, 2, 1, -1, 234];
let interruptor = true;
// console.log(numeros);
const init = () => {
    // nodos
    let form = document.querySelector(".form-floating")
    let input = document.querySelector("#floatingInputValue");
    let output = document.querySelector(".salida"); // es la 2ª etiqueta article
    let btnBorrar = document.querySelector(".btn-secondary");
    let success = document.querySelector(".alert-success");
    let btnOrdenar = document.getElementById("ordenar");//botón que permite ordenar



    let ul = null;


    // Cargo el array primero
    success.innerHTML = `Array[${numeros}]`;

    // Funciones
    const crearUl = () => {
        ul = document.createElement("ul");
        ul.className = "lista";
        // console.log(ul);
        output.appendChild(ul);
        // console.log(output.value);
    }

    const crearLi = valor => {
        const li = document.createElement("li");
        li.innerHTML = valor;
        ul.appendChild(li);
    }

    const deleteLi = () => {
        numeros = [];
        success.innerHTML = `Array[${numeros}]`;
        if (ul !== null) {
            ul.innerHTML = "";
        }
    }

    const ordenarArray = () => {
        //reorremos array
        for (let x = 0; x < numeros.length; x++) {
            for (let i = x; i < numeros.length; i++) {
                if (numeros[x] > numeros[i]) {
                    //intercambio de valores
                    let temporal = numeros[i]; //guardamos temporalmente el primer valor del array
                    // intercambiamos posiciones 
                    numeros[i] = numeros[x];
                    numeros[x] = temporal;

                }
            }
        }
        console.log(numeros)
    }

    // Eventos
    form.addEventListener(
        "submit",
        ev => {
            ev.preventDefault();
            numeros.push(Number(input.value));
            // console.log(numeros);
            console.log(interruptor);

            if (interruptor) {
                interruptor = false;
                console.log(interruptor);
                crearUl();

            }
            crearLi(numeros);
            success.innerHTML = `Array[${numeros}]`
        }
    );

    //  con la siguiente función borraremos los LIs
    btnBorrar.addEventListener(
        "click",
        deleteLi
    );

    // botón para ordenar array
    btnOrdenar.addEventListener(
        "click",
        ordenarArray
    );

}


// Inicialización del evento
window.addEventListener(
    "load",
    init
);