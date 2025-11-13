document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaProduto',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/produtos',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/produtos',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});