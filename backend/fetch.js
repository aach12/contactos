async function peticion(url, method, data = {}) {
    
const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
peticion('http://localhost:3000/obtenercontactos', 'get')
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

peticion('http://localhost:3000/guardarcontactos', 'post', {canCont: 1})
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });