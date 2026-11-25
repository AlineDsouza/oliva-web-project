// Exibe o footer em todas as páginas
fetch("components/footer.html")

  // Lê o conteúdo do ficheiro
  .then(response => response.text())

  // Insere o footer na página
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });