var dbPeople = [];
var person = {};
var boton = document.getElementById('boton');

boton.onclick = () => {
    var identification = document.getElementById('identification').value;
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;

    var sexoP = document.formulario.sexo;
    for (let index = 0; index < sexoP.length; index++) {
        if (sexoP[index].checked) {
            var sexo = sexoP[index].value
        }
    }

    var date = document.getElementById('date').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;
    var infomation = document.getElementById('info').value;
    var visit = document.getElementById('confi').value;

    identification ? status = true : alert('Por favor, digite su cedula'), status = false;
    name ? status = true : alert('Por favor, digite su nombre'), status = false;
    lastName ? status = true : alert('Por favor, digite su apellido'), status = false;
    age ? status = true : alert('Por favor, digite su edad'), status = false;
    sexo ? status = true : alert('Por favor, digite su sexo'), status = false;
    date ? status = true : alert('Por favor, digite la fecha'), status = false;
    validateEmail(email) ? alert("El email es correcto") : alert("El email NO es correcto");
    service ? status = true : alert('Por favor, digite el servicio'), status = false;
    visit ? status = true : alert('Por favor, digite tu opinion'), status = false;

    if (status) {
        person = {
            identificationPerson: identification,
            namePerson: name,
            lastNamePerson: lastName,
            agePerson: age,
            sexoPerson: sexo,
            datePerson: date,
            emailPerson: email,
            servicePerson: service,
            infomationPerson: infomation,
            visitPerson: visit
        };
        dbPeople.push(person);

        console.log(person);
        console.log(dbPeople);

        Show();
    } else {
        alert('ERROR AL GUARDAR LOS DATOS');
    }
}

function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function Show() {
    document.getElementById("tabla").innerHTML += '<tbody><td>' + person.identificationPerson + '</td><td>' + person.namePerson +
        '</td><td>' + person.lastNamePerson + '</td><td>' + person.agePerson +
        '</td><td>' + person.sexoPerson + '</td><td>' + person.datePerson +
        '</td><td>' + person.emailPerson + '</td><td>' + person.servicePerson +
        '</td><td>' + person.infomationPerson + '</td><td>' + person.visitPerson +
        '</td></tbody>';
}