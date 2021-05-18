const btnEnviar = document.getElementById('btn-numero');
let valorNumero = document.getElementById('numero'),
enlace = document.createElement('a'),
aviso = document.createElement('p');

btnEnviar.addEventListener('click', enviarWhatsApp);

enlace.addEventListener('click', ()=> {
    location.reload();
});
 
function enviarWhatsApp() {
    if (valorNumero.value === "" ) {
        aviso.style.color = "red";
        aviso.textContent = 'Por favor, ingresa un número';
        aviso.style.fontWeight = "bold";
        document.querySelector('.lista').appendChild(aviso);
    } else {
        aviso.style.display = "none";
        enlace.className = 'btn-enviar';
        enlace.setAttribute('href', 'https://api.whatsapp.com/send?phone=' + valorNumero.value);
        enlace.setAttribute('target', '_blank');
        enlace.textContent = 'Enviar por Whatsapp';
        document.querySelector('.botones').appendChild(enlace);
    }
}