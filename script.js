document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('texto');
    const contador = document.getElementById('contador');
    const resetButton = document.getElementById('resetButton');

    let textoDigitado = ''; // Inicializa a variável textoDigitado

    function atualizarContador() {
        const numeroCaracteres = textoDigitado.length;
        contador.textContent = `${numeroCaracteres} caracteres`;
    }

    textarea.addEventListener('input', function () {
        textoDigitado = textarea.value;
        atualizarContador();
    });

    resetButton.addEventListener('click', function () {
        // Reseta o conteúdo do textarea para uma string vazia
        textarea.value = '';
        textoDigitado = ''; // Reseta a variável textoDigitado
        atualizarContador(); // Atualiza o contador de caracteres
    });
});
