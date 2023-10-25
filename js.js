let boton = document.getElementById("boton");
const URL = "https://jsonplaceholder.typicode.com/users";


 function evento(){
    let nombre = document.getElementById(nombre);
    let apellido = document.getElementById(apellido);
    let nacimiento = document.getElementById(nacimiento);
    
    let usuario = {nombre: nombre.value,
                apellido: apellido.value,
                fechaNacimiento: nacimiento.value};

    const opciones = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)}
    
    fetch(URL,opciones)
        .then(response => {
            if (response.ok) {
              console.log("Informacion enviada correctamente");
            } else {
              throw new Error('Error en el posteo de información');
            }})
        .catch(error => {
            console.error('Error:', error);
          });
    }

    boton.addEventListener ('click', evento);