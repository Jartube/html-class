
//button hello world
function Alert(){

    alert("Hello world")
    
        document.getElementById("btn");
        document.getElementById("btn").innerHTML = "Thank you";
       
    } 
    
    //get current year
    const currentData = new Date();
    const currentyear = currentData.getFullYear();
    
    document.getElementById("current_year").innerHTML = currentyear;
    
    console.log("fecha actual: " + currentData.toDateString());
    
    //-----------------------------------------------------------
    //codigo saludo
    
    //Esperar a que el DOM se cargue completamente
    document.addEventListener("DOMContentLoaded", function(){
    
    //octener la hora actual
    
    const horaActual = new Date().getHours();
    const saludoElement = document.getElementById("saludo");
    
    //saludo segun hora dia
    let saludomensaje = "";
    let saludoclase = "";
    
    if (horaActual <12){
    saludomensaje = "¡Good morning!";
    saludoclase = "Good morning";
    }else if (horaActual >= 12 && horaActual <= 17){
        saludomensaje = "¡Good affternoon!";
        saludoclase ="afternoon";
    }else{
        saludomensaje = "¡Good evening!";
        saludoclase = "evening"
    }
    // Establecer el saludo en el elemento HTML
    saludoElement.textContent = saludomensaje;
    
    // Agregar la clase CSS según la hora del día
    saludoElement.classList.add(saludoclase);
    
    })
    //se obtiene el id de el boton 
    const button = document.getElementById("btn-alert");
    
    //se guarda el texto original del boton
    const originaltext = button.innerText;
    
    
    //esta codigo hace que el boton cambie de nombre por el ejemplo "Hello"
    button.onmouseover = function(){
    button.innerText = "Hello";
    }
    
    //este codigo lo que  hace es que vuelve a colocar el texto original del boton
    button.onmouseout = function(){
        //este texto  del innertext cambia el texto visible sin  alterar el contenido HTML
        button.innerText = originaltext;
    }
    //--------------------------------------------
    
    // Esperar a que el DOM se cargue completamente
    document.addEventListener("DOMContentLoaded", function() {
        // Obtener la lista ordenada por su ID
        const listaOrdenada = document.getElementById("números");
    
        // Bucle for para crear 12 elementos <li>
        for (let i = 1; i <= 12; i++) {
            // Crear un nuevo elemento <li>
            const listItem = document.createElement("li");
    
            // Establecer el texto según si el índice es par o impar
            if (i % 2 === 0) {
                listItem.textContent = `Element ${i}: Even`;
            } else {
                listItem.textContent = `Element ${i}: Odd`;
            }
    
            // Añadir el <li> a la lista ordenada
            listaOrdenada.appendChild(listItem);
        }
    });