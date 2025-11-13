ocument.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formGerente',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/produtos',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/produtos',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/produtos/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
