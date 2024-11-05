function validarFormulario() {
  // Obter os valores dos campos A e B
  const campoA = parseFloat(document.getElementById('campoA').value);
  const campoB = parseFloat(document.getElementById('campoB').value);
  const mensagem = document.getElementById('mensagem');

  // Verificar se o campo B é maior que o campo A
  if (campoB > campoA) {
      mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
      mensagem.className = "message success";
      return true;
  } else {
      mensagem.textContent = "Formulário inválido. Campo B deve ser maior que Campo A.";
      mensagem.className = "message error";
      return false;
  }
}
