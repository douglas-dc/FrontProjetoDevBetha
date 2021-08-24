angular.module("projetoDevBetha").controller("alterarClienteController", function ($scope, clienteService, $routeParams, $location){

    $scope.findClienteById = function(clienteId) {
        clienteService.getClienteById(clienteId).then(function(response) {
            $scope.cliente = response.data;
            console.log(response.data)
        })
    }

    $scope.findClienteById($routeParams.id)

    $scope.updateCliente = function(cliente) { 
        clienteService.putCliente(cliente).then(function() {
            $location.path("/clientes")
        }, function (error) {
            alert(error.data.errors[0].message)      
        })
    }
})