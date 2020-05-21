let valorNumero = document.getElementById('numero'),
btnEnviar = document.getElementById('btn-numero');
const enlace = document.createElement('a');

btnEnviar.addEventListener('click', function(){
    enlace.className = 'btn-enviar';
    enlace.setAttribute('href', 'https://api.whatsapp.com/send?phone=' + valorNumero.value);
    enlace.setAttribute('target', '_blank');
    enlace.textContent = 'Enviar por Whatsapp';
    document.querySelector('.botones').appendChild(enlace);
});    