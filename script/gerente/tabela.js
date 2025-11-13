document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaGerente',
        url: 'http://localhost:8080/AppCorporativaMavenWeb/gerentes',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/AppCorporativaMavenWeb/gerentes',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});