// Exibição do navbar em todas as páginas
fetch("components/navbar.html")

    // Lê o conteúdo do ficheiro
    .then(response => response.text())

    // Insere o navbar na página
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    });