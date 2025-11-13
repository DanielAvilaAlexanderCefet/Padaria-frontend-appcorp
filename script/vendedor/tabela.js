document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaVendedor',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/vendedors',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/vendedors',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});