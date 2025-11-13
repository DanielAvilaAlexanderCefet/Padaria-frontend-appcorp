document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formGerente',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/gerentes',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/gerentes',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/gerentes/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
