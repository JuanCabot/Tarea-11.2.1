
function postData() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const nacimiento = document.getElementById("nacimiento").value;
    
  let usuario = {nombre: nombre,
                apellido: apellido,
                fechaNacimiento: nacimiento};

    fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'},
          body: JSON.stringify(usuario)
          })
          .then(response => response.json())
          .then(data => {
          console.log('Respuesta del servidor:', usuario);
          alert('Datos enviados exitosamente');
          })
          .catch(error => {
          console.error('Error al enviar los datos:', error);
          alert('Error al enviar los datos');
              });
          }
          
          console.log();




    

    
      
