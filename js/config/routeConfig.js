angular.module("projetoDevBetha").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clientesController"
    })

    $routeProvider.when("/novoCliente", {
        templateUrl: "view/novoCliente.html",
        controller: "clientesController"
    })

    $routeProvider.when("/alterarCliente/:id", {
        templateUrl: "view/alterarCliente.html",
        controller: "clientesController"
    })
});