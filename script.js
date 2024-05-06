document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('texto');
    const contador = document.getElementById('contador');

    textarea.addEventListener('input', function () {
        const textoDigitado = textarea.value;
        const numeroCaracteres = textoDigitado.length;
        contador.textContent = `${numeroCaracteres} caracteres`;
    });
});
