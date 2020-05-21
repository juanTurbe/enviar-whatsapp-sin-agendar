let valorNumero = document.getElementById('numero'),
btnEnviar = document.getElementById('btn-numero'),
enlace = document.createElement('a'),
aviso = document.createElement('p');



btnEnviar.addEventListener('click', function(){
    if (valorNumero.value === "" ) {
        aviso.style.color = "red";
        aviso.textContent = 'Ingresa un número';
        document.querySelector('.lista').appendChild(aviso);
    } else {
        aviso.style.display = "none";
        enlace.className = 'btn-enviar';
        enlace.setAttribute('href', 'https://api.whatsapp.com/send?phone=' + valorNumero.value);
        enlace.setAttribute('target', '_blank');
        enlace.textContent = 'Enviar por Whatsapp';
        document.querySelector('.botones').appendChild(enlace);
    }

    enlace.addEventListener('click', function(){
        location.reload();
    });
});