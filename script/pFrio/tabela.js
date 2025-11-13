document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaPFrio',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/pFrios',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/pFrios',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});