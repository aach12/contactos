var Contact = function (name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

var contacts = [];

var obtenercontactos = function () {
    peticion('http://localhost:3000/obtenercontactos', 'get')
      .then( data => {
        contacts = []
        if (Array.isArray(data)) {

          contacts = data
        }
        console.log(data);
        listContacts();
      });
  }

var listContacts = function () {
  document.getElementById('displayContacts').innerHTML = " ";
  for (var i = 0; i < contacts.length; i++) {
    document.getElementById('displayContacts').innerHTML += '<tr><td id="name' + i + '">' + contacts[i].name + '</td><td id="email' + i + '">' + contacts[i].email + '</td><td id="phone' + i + '">' + contacts[i].phone + '</td><td><button class="editbut" onclick=updateContact(' + i + ')>Editar</button></div><button class="deletebut" onclick=deleteContact(' + i + ')>Eliminar</button></td></tr>';
  }
};

var guardarcontactos = function () {
  peticion('http://localhost:3000/guardarcontactos', 'post', contacts)
  .then(data => {
    console.log(data);
  });
}

var addNewContact = function () {
  var name = document.getElementById('inputName').value;
  var email = document.getElementById('inputEmail').value;
  var phone = document.getElementById('inputPhone').value;
  var contact = new Contact(name, email, phone);
  contacts.push(contact);
  guardarcontactos();
  listContacts();
}

var deleteContact = function (i) {
  contacts.splice(i, 1);
  guardarcontactos();
  listContacts();
}

var updateContact = function (i) {
  contactId = i;
  document.getElementById("inputName").value = contacts[i].name;
  document.getElementById("inputEmail").value = contacts[i].email;
  document.getElementById("inputPhone").value = contacts[i].phone;
  document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="editbut" onclick=submitUpdatedContact(contactId)>Modificar</button>';

}

var submitUpdatedContact = function (i) {
  contacts[i].name = document.getElementById("inputName").value;
  contacts[i].email = document.getElementById("inputEmail").value;
  contacts[i].phone = document.getElementById("inputPhone").value;

  document.getElementById("inputName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPhone").value = "";

  guardarcontactos();
  listContacts();
}

obtenercontactos();

async function peticion(url, method, data = {}) {

  var options = {
    method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Access-Control-Allow-Origin': '1',
      'Content-Type': 'application/json'
    },
  }
  if (method == "post") {
    options.body = JSON.stringify(data)
  }
  const response = await fetch(url, options);
  return response.json();
}
// peticion('http://localhost:3000/obtenercontactos', 'get')
//   .then(data => {
//     console.log(data);
//   });


