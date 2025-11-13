document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaIndustrializado',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/industrializados',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/industrializados',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});