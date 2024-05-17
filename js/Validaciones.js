const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")
const message = document.getElementById("message")
const contactForm = document.getElementById("contactForm")  
const parrafo = document.getElementById("warnings")
console.log("Hola")

contactForm.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
    if (nombre.value.length < 6) {
        warnings += 'El nombre no es válido <br>'
    }

    if (!emailRegex.test(email.value)) {
        warnings += 'La dirección de correo electrónico no es válida <br>';
    }

    // Aquí puedes agregar más validaciones para asunto y mensaje si es necesario

    parrafo.innerHTML = warnings; // Mostrar las advertencias en el elemento con ID "warnings"
})

    
