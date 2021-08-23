angular.module("projetoDevBetha").controller("inserirClienteController", function ($scope, clienteService, $location){

    $scope.insertCliente = function(cliente) {
        clienteService.postCliente(cliente).then(function(response) {
            $location.path("/clientes")
        }, function (error) {
            alert(error.data.errors[0].message)   
        })
    }
});