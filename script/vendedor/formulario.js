ocument.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formVendedor',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/AppCorporativaMavenWeb/vendedors',
        urlEditar: 'http://localhost:8080/AppCorporativaMavenWeb/vendedors',
        urlCargaDados: 'http://localhost:8080/AppCorporativaMavenWeb/vendedors/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});
