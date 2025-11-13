ocument.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formIndustrializado',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/industrializados',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/industrializados',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/industrializados/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
