ocument.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formPFrio',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/pFrios',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/pFrios',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/pFrios/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
