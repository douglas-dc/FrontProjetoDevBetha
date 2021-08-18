angular.module("projetoDevBetha").config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('')

    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clientesController"
    })
});