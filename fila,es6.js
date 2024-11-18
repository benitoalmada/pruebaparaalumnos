// Función para mostrar el modal de inicio de sesión al cargar la página
function mostrarLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Función para manejar el inicio de sesión
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validación básica para la demostración
    if (username === "usuario" && password === "contraseña") {
        document.getElementById('loginModal').style.display = 'none'; // Ocultar el modal si es correcto
    } else {
        document.getElementById('error-message').innerText = "Nombre de usuario o contraseña incorrectos.";
    }
}

// Función para manejar el registro de nuevo usuario
function registrarNuevoUsuario() {
    alert("La función de registro de nuevo usuario está en construcción.");
}
// Función para mostrar una sección específica y ocultar las demás
function mostrarSeccion(seccionId) {
    var secciones = document.querySelectorAll('.content');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
        seccion.style.opacity = '0';
    });

    var seleccionada = document.getElementById(seccionId);
    seleccionada.style.display = 'block';
    setTimeout(() => {
        seleccionada.style.opacity = '1';
    }, 10);
}

// Variables para almacenar si es un inicio de sesión o un registro
let isLogin = true;

// Mostrar el formulario de inicio de sesión al cargar la página
function mostrarLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Alternar entre el formulario de inicio de sesión y registro
function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("loginTitle").textContent = isLogin ? "Iniciar Sesión" : "Registrar Usuario";
    document.getElementById("loginButton").textContent = isLogin ? "Ingresar" : "Registrarse";
}

// Validar el inicio de sesión o registrar el nuevo usuario
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación básica de campos vacíos
    if (!email || !password) {
        document.getElementById('error-message').innerText = "Por favor, completa todos los campos.";
        return;
    }

    // Registro de nuevo usuario
    if (!isLogin) {
        if (localStorage.getItem(email)) {
            document.getElementById('error-message').innerText = "El usuario ya existe. Inicia sesión.";
        } else {
            localStorage.setItem(email, password);
            alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
            toggleForm(); // Cambiar al formulario de inicio de sesión
        }
        return;
    }

    // Inicio de sesión
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
        document.getElementById('loginModal').style.display = 'none';
        alert("Inicio de sesión exitoso.");
    } else {
        document.getElementById('error-message').innerText = "Correo o contraseña incorrectos.";
    }
}
// Función para hacer un scroll suave al inicio de la página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar botón de "Volver al inicio" cuando el usuario hace scroll hacia abajo
window.onscroll = function() {
    var btn = document.getElementById("btnScrollTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Mostrar/ocultar el menú flotante y el fondo opaco
function toggleMenu() {
    const menu = document.getElementById("floatingMenu");
    const overlay = document.getElementById("menuOverlay");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        overlay.style.display = "none";
    } else {
        menu.style.display = "block";
        overlay.style.display = "block";
    }
}

// Cerrar el menú flotante al hacer clic en una opción
function closeMenu() {
    const menu = document.getElementById("floatingMenu");
    const overlay = document.getElementById("menuOverlay");

    menu.style.display = "none";
    overlay.style.display = "none";
}

// Asociar evento de cierre a los enlaces del menú
document.querySelectorAll(".floating-menu ul li a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

 // Función para mostrar las partes internas o externas del hardware
 function mostrarPartes(tipo) {
    // Ocultar ambas secciones antes de mostrar una
    document.getElementById('partesInternas').style.display = 'none';
    document.getElementById('partesExternas').style.display = 'none';
    
    // Mostrar la sección correspondiente
    if (tipo === 'internas') {
        document.getElementById('partesInternas').style.display = 'block';
    } else if (tipo === 'externas') {
        document.getElementById('partesExternas').style.display = 'block';
    }
}
function mostrarSubseccion(id) {
    // Ocultar todas las subsecciones
    const subsecciones = document.querySelectorAll('.subcontent');
    subsecciones.forEach(subseccion => subseccion.style.display = 'none');

    // Mostrar la subsección seleccionada
    document.getElementById(id).style.display = 'block';
}

function mostrarSeccion(id) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.content');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // Mostrar la sección seleccionada
    document.getElementById(id).style.display = 'block';
}