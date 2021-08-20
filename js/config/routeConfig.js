angular.module("projetoDevBetha").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clientesController"
    })

    $routeProvider.when("/novocliente", {
        templateUrl: "view/novoCliente.html",
        controller: "inserirClienteController"
    })

    $routeProvider.when("/alterarcliente/:id", {
        templateUrl: "view/alterarCliente.html",
        controller: "alterarClienteController"
    })
});