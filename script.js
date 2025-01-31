document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = "Las contraseñas no coinciden.";
        return;
    }

    // Crear el objeto de usuario
    var newUser = {
        username: username,
        email: email,
        password: password
    };

    // Enviar los datos al servidor (aquí usaremos un ejemplo con fetch)
    fetch('http://tu-servidor.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Usuario registrado con éxito');
            // Redirigir o hacer algo después del registro
        } else {
            document.getElementById('error-message').textContent = "Error al registrar el usuario: " + data.message;
        }
    })
    .catch(error => {
        document.getElementById('error-message').textContent = "Error al conectar con el servidor.";
    });
});
