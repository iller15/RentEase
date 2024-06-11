
// boton de regresar atras
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('atras_button');
    button.addEventListener('click', function() {
        window.location.href = 'index.html'; // 
    });
});

//boton de registro
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-js1');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('class1')) {
                window.location.href = 'inicio_sesion.html';
            } else if (button.classList.contains('class2')) {
                window.location.href = 'inicio_sesion.html';
            } else if (button.classList.contains('class3')) {
                window.location.href = 'inicio_sesion.html';
            } else if (button.classList.contains('class4')) {
                window.location.href = 'inicio_sesion.html';
            }
        });
    });
});
