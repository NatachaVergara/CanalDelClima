/*Creamos una funcion para conectar con el html*/
console.log("Estoy linkeado")
let btn = document.querySelector(".btnCargar");

// let ciudad = document.querySelectorAll("h1")[0];
let temperatura = document.querySelector(".temp");
let humedad = document.querySelector(".humedad");
let sensacionTermica = document.querySelector(".sTermica");
let condClimatica = document.querySelector(".cClimatica");
let iconosVer = document.querySelector(".scroll");
let icono = document.querySelector(".icono");



let nomCiudad = document.querySelector(".ciudad");


// console.log(temperatura)


//Creamos el boton que va a llamar a la informacion de la api
btn.addEventListener("click", peticionClima)


function peticionClima() {
    //Si un usuario deja el input vacio
    let ciudadInput = document.getElementById("ciudad").value;
    btn.innerHTML = "Volver a buscar";
    

    if (ciudadInput === "") {
        alert("Por favor, ingrese primero el nombre de la ciudad y luego el nombre de la provincia")
    }
    
    else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadInput},AR&lang=sp&&units=metric&appid=7ef39c539326f2f7490c5ecc19ba80c5`)
            .then(respuesta => respuesta.json())
            .then(respuesta => {


                console.log(ciudadInput);
                nomCiudad.innerText = `${ciudadInput}`;
                temperatura.innerText = ` ${respuesta.main.temp}°`;
                humedad.innerText = ` ${respuesta.main.humidity}%`;
                sensacionTermica.innerText = ` ${respuesta.main.feels_like}°`;
                condClimatica.innerText = ` ${respuesta.weather[0].description}`
                

                
                

            })
            .catch(err => console.log(err))
           
        // iconosVer.scrollIntoView({ inline: "center", behavior: "smooth" });
    }

}





