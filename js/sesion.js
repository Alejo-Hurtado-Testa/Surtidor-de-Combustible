const formularioLog = document.getElementById('loggform');
const btnLog = document.getElementById('btnlog');
const nombreLog = document.getElementById('namelogg');
const apellidoLog = document.getElementById('surnamelogg');
const contenOculto1 = document.getElementById('ocultar1');
const contenOculto2 = document.getElementById('ocultar2');
const nomUsuario = document.getElementById('nomusuario');

let usuarioEnLS = JSON.parse(localStorage.getItem('username'));
let apellidoEnLS = JSON.parse(localStorage.getItem('usersurname'));

if (usuarioEnLS && apellidoEnLS) {
  nomUsuario.innerText += `${usuarioEnLS} ${apellidoEnLS}`;
  formularioLog.style.display = 'none';
  contenOculto1.classList.remove('ocultar');
  contenOculto2.classList.remove('ocultar');
} else {
  formularioLog.style.display = 'flex';
}

btnLog.addEventListener('click', () => {
  quitarEnvioForm(event);
  if (nombreLog.value && apellidoLog.value) {
    const nameTransform = JSON.stringify(nombreLog.value);
    const surnaTransform = JSON.stringify(apellidoLog.value);
    localStorage.setItem('username', nameTransform);
    localStorage.setItem('usersurname', surnaTransform);
    formularioLog.style.display = 'none';
    nomUsuario.innerText += `${JSON.parse(
      localStorage.getItem('username')
    )} ${JSON.parse(localStorage.getItem('usersurname'))}`;
    contenOculto1.classList.remove('ocultar');
    contenOculto2.classList.remove('ocultar');
  }
});
